import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}
  toLogin() {
    this.router.navigate(['home']);
  }
  toMenu() {
    this.router.navigate(['menu']);
  }
}
