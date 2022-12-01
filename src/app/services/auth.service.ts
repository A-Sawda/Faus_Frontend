import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] }, { "username": "sawda", "password": "123", "roles": ['USER'] }];
  public loggedUserName!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router) { }

  logout() {
    this.isloggedIn = false;
    this.loggedUserName = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  signUp(user:User){
    this.users.push(user);
    this.router.navigate(['/login']);
  }

  signIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUserName = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUserName);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }

  setLoggedUserFromLocalStorage(username: string) {
    this.loggedUserName = username;
    this.isloggedIn = true;
    this.getUserRoles(username);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }

}
