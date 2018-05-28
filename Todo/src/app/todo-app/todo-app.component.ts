import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ta-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
    title = 'Todo App';
    todoList = [{
        text: 'Do Homework',
        done: false
    }, {
        text: 'Browse the Web',
        done: false
    }, {
        text: 'Work on your project',
        done: false
    }, {
        text: 'Whatever',
        done: false
    }];

    addNewTodo (newTodoText) {
        this.todoList.push({
            text: newTodoText,
            done: false
        })        
    }

    constructor() { }

    ngOnInit() {
    }
}
