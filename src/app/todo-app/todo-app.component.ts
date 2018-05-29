import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ta-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
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
    }

    removeCurrentTodo (todoValue) {
        var todoIndex = this.todoList.indexOf(todoValue);
        this.todoList.splice(todoIndex, 1);
    }

    saveCurrentTodo (updatedTodo) {
        var todoIndex = this.todoList.indexOf(updatedTodo.todoValue);
        this.todoList[todoIndex].text = updatedTodo.text,
        this.todoList[todoIndex].date = updatedTodo.date,
        this.todoList[todoIndex].editing = false
    }

    constructor(
        private route: ActivatedRoute
      ) { }

      ngOnInit() {
        this.route.params
        .subscribe((parameters) => {
            this.username = parameters.message;
        });
      }
}
