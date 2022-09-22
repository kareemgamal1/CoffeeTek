import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { RoutingService } from '../../Services/routing.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private user: UserService, private AuthService: AuthService) {}

  ngOnInit(): void {}

  deleteProducts() {
    localStorage.removeItem('products');
  }
  checkLoggedIn() {
    if (this.AuthService.loggedIn) return true;
    else return false;
  }
  logOut() {
    this.AuthService.logout();
  }
}
