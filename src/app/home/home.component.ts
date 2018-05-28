import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usernameError = '';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  checkValue(username) {
    if (!username) {
      this.usernameError = 'Please enter a name';
    }
  }

  startTodo(username) {
    this.router.navigate(['/todo/' + username]);
  }

}
