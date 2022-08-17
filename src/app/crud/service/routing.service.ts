import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router, private location: Location) {}
  isHomeRoute() {
    return this.router.url === '/crud/main';
  }
  isLoginRoute() {
    return this.router.url === '/crud/login';
  }
  isRegisterRoute() {
    return this.router.url === '/crud/register';
  }
  isMenuRoute() {
    return this.router.url === '/crud/menu';
  }
  isAboutRoute() {
    return this.router.url === '/crud/about';
  }
  toLogin() {
    this.location.replaceState('/crud/login');
    window.location.reload();
  }
  toMenu() {
    this.location.replaceState('/crud/menu');
    window.location.reload();
  }
}
