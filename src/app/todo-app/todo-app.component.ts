import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ta-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
    title = 'Todo App';
    username = 'Do you really not have a name?';

    todoList = [{
        text: 'Do Homework',
        date: '22nd June',
        done: false
    }, {
        text: 'Browse the Web',
        date: '28th June',
        done: false
    }, {
        text: 'Work on your project',
        date: '1st July',
        done: false
    }, {
        text: 'Whatever',
        date: '18th August',
        done: false
    }];

    addNewTodo (newTodoText) {
        this.todoList.push({
            text: newTodoText.text,
            date: newTodoText.date,
            done: false
        })
    }

    removeCurrentTodo (todoValue) {
        console.log(todoValue);
        for(var i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].text == todoValue) {
                this.todoList.splice(i, 1);
                break;
            }
        }
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
