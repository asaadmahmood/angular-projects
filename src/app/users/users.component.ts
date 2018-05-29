import { UsersService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';
import { GetUsersResults } from '../interfaces/get-users-results';
import { Router } from '@angular/router';

@Component({
  selector: 'ta-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users = [];
  seed = '';

  constructor(
    private usersService: UsersService,
    public router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((response: GetUsersResults) => {
      this.users = response.results;
      this.seed = response.info.seed;
    });
  }

  goToUser(email) {
    this.router.navigate(['/users/user/' + this.seed + '/' + email]);
  }

}
