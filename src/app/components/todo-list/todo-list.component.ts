import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ta-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input() list = [];
    @Output() todoRemoved = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    removeTodo(todoValue) {
        this.todoRemoved.emit(todoValue);
    }
}