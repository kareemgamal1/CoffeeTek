import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInfo } from './menu-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  MenuData: Array<MenuInfo> = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  HandleMenuShowHide(e: MouseEvent, x: HTMLDivElement) {
    e.preventDefault();
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  isHomeRoute() {
    return this.router.url === '/crud/main';
  }
  isLoginRoute() {
    return this.router.url === '/crud/login';
  }
  isRegisterRoute() {
    return this.router.url === '/crud/register';
  }
}
