import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  placeholderValue = 'Enter todo text';
  newTodoVal = "";

  @Output() todoAdded = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoAdded.emit(this.newTodoVal);
  }

}
