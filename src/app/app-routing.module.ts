import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{
  path: 'todo/:message',
  component: TodoAppComponent
},
{
  path: 'users/user/:seed/:email',
  component: UserComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
