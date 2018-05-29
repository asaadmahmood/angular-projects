import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ta-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
    currentList: any;

    title = 'Todo App';
    username = '';

    todoList = [{
        text: 'Do Homework',
        date: '22nd June',
        done: false,
        editing: false
    }, {
        text: 'Browse the Web',
        date: '28th June',
        done: false,
        editing: false
    }, {
        text: 'Work on your project',
        date: '1st July',
        done: false,
        editing: false
    }, {
        text: 'Whatever',
        date: '18th August',
        done: false,
        editing: false
    }];

    addNewTodo (newTodoText) {
        this.todoList.push({
            text: newTodoText.text,
            date: newTodoText.date,
            done: false,
            editing: false
        })

        localStorage.setItem('currentList', JSON.stringify(this.todoList));
    }

    removeCurrentTodo (todoValue) {
        var todoIndex = this.todoList.indexOf(todoValue);
        this.todoList.splice(todoIndex, 1);

        localStorage.setItem('currentList', JSON.stringify(this.todoList));
    }

    saveCurrentTodo (updatedTodo) {
        var todoIndex = this.todoList.indexOf(updatedTodo.todoValue);
        this.todoList[todoIndex].text = updatedTodo.text,
        this.todoList[todoIndex].date = updatedTodo.date,
        this.todoList[todoIndex].editing = false

        localStorage.setItem('currentList', JSON.stringify(this.todoList));
    }

    doneCurrentTodo (todoValue) {
        var todoIndex = this.todoList.indexOf(todoValue);
        console.log(todoIndex);
        this.todoList[todoIndex].text = todoValue.text,
        this.todoList[todoIndex].date = todoValue.date,
        this.todoList[todoIndex].done = todoValue.done,
        this.todoList[todoIndex].editing = false,

        localStorage.setItem('currentList', JSON.stringify(this.todoList));
    }

    constructor(
        private route: ActivatedRoute
    ) {
        this.currentList = (localStorage.getItem('currentList')!==null) ? JSON.parse(localStorage.getItem('currentList')) : [  ];

        if (!this.currentList || this.currentList.length === 0) {
            this.todoList; // whatever you want  when local storage is empty
        } else {
            this.todoList = this.currentList;
        }
    }

    ngOnInit() {
        this.route.params
        .subscribe((parameters) => {
            this.username = parameters.message;
        });

        localStorage.setItem('currentList', JSON.stringify(this.todoList));
    }
}
