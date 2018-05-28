import { UsersService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { GetUsersResults } from '../interfaces/get-users-results';

@Component({
  selector: 'ta-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((response: GetUsersResults) => {
      this.users = response.results;
    });
  }

}
