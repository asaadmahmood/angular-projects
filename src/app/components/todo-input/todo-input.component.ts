import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  placeholderValue = 'Enter todo text';
  newTodoVal = "";
  newTodoDate = "";

  @Output() todoAdded = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoAdded.emit({ text: this.newTodoVal, date: this.newTodoDate });
    this.newTodoVal = '';
    this.newTodoDate = '';
  }

}
