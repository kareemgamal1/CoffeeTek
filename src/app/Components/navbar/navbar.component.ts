import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../Services/routing.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [RoutingService, UserService],
})
export class NavbarComponent implements OnInit {
  constructor(private routing: RoutingService, private user: UserService) {}

  ngOnInit(): void {}

  getRoute() {
    return this.routing;
  }
  getUser() {
    return this.user;
  }
  deleteProducts() {
    localStorage.removeItem('products');
  }
  checkLoggedIn() {
    let stat = localStorage.getItem('loggedIn');
    if (stat == 'true') {
      return true;
    } else {
      return false;
    }
  }
}
