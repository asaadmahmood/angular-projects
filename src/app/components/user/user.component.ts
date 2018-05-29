import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { GetUsersResults } from '../../interfaces/get-users-results';

@Component({
  selector: 'ta-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = [];
  seed = '';
  email = '';

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((parameters) => {
        this.seed = parameters['seed'];
        this.email = parameters['email'];
    });

    this.usersService.getCurrentUsers(this.seed)
    .subscribe((response: GetUsersResults) => {
      this.users = response.results;
    });
  }

}
