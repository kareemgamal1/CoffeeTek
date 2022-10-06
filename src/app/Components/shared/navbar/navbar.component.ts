import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    console.log(this.AuthService.isAuthenticated());
    this.AuthService.loggedIn$.subscribe((loggedIn) => {
      console.log(loggedIn);
      this.loggedIn = loggedIn;
    });
  }

  deleteProducts() {
    localStorage.removeItem('products');
  }
  checkLoggedIn() {
    if (this.AuthService.isAuthenticated()) return true;
    else return false;
  }
  logOut() {
    this.AuthService.logout();
  }
}
