import { Injectable } from '@angular/core';
// Importing service to make http calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=50');
  }

  getCurrentUsers(seed) {
    return this.http.get('https://randomuser.me/api/?results=50&seed=' + seed);
  }
}
