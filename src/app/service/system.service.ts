import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SystemService {
  loggedInUser: User = null;
  constructor(private router: Router) {}

    // not applicable for bmdb as there is no 'admin' property on user
    // isAdmin(): boolean {
    // return (this.loggedInUser==null) ? false: this.loggedInUser.admin;
    // }

  checklogin(): void {

    //If user is not logged in, send to login page
    //comment out this code for testing purposes
    if (this.loggedInUser == null) {
      this.router.navigateByUrl('/user-login');
    }
  }
}





