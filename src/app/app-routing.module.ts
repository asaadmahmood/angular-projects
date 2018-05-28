import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: 'todo/:message',
    component: TodoAppComponent
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
