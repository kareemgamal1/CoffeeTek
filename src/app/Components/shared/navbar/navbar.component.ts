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
    this.AuthService.loggedIn$.subscribe(
      (loggedIn: boolean) => {
        this.loggedIn = loggedIn;
      }
    );
  }

  logOut() {
    this.AuthService.logout();
  }
}
