import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  toLogin() {
    this.router.navigate(['home/login']);
  }
  toMenu() {
    this.router.navigate(['menu']);
  }
}
