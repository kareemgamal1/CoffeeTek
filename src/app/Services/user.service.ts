import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedIn() {
    localStorage.setItem('loggedIn', 'true');
  }
  loggedOut() {
    localStorage.setItem('loggedIn', 'false');
  }

  constructor() {}
}
