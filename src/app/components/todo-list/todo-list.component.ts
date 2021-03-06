import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'ta-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input() list = [];
    @Output() todoRemoved = new EventEmitter<any>();
    @Output() todoSaved = new EventEmitter<any>();
    @Output() todoDone = new EventEmitter<any>();

    editClass = '';
    currentTodoVal = '';
    currentTodoDate = '';
    todoHighlight = 'red';

    constructor() { }

    ngOnInit() {
    }

    setColor(color){
        this.todoHighlight = color;
    }

    removeTodo(todoValue) {
        this.todoRemoved.emit(todoValue);
    }

    stopEdit(todoValue) {
        todoValue.editing = false;
    }

    editTodo(todoValue) {
        // Inefficient code
        this.list.forEach(element => {
            element.editing = false;
        });

        // How do I focus on the input        
        todoValue.editing = true;
        this.currentTodoVal = todoValue.text;
        this.currentTodoDate = todoValue.date;
    }

    doneTodo(todoValue) {
        todoValue.done = true;
        this.todoDone.emit(todoValue);
    }

    saveTodo(todoValue) {
        this.todoSaved.emit({text: this.currentTodoVal, date: this.currentTodoDate, todoValue});
    }
}
