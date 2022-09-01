import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../Services/routing.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RoutingService, UserService],
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  isLogged: boolean = true;
  constructor(
    private http: HttpClient,
    private routing: RoutingService,
    private user: UserService
  ) {}

  ngOnInit(): void {}
  onLogin() {
    let data = {
      email: this.email,
      password: this.password,
    };
    if (this.email == 'asdasd@gmail.com' && this.password == '1234') {
      console.log(this.email);
      this.isLogged = true;
      this.http.post<any>(
        'https://coffeeshopv.herokuapp.com/user/v1/login',
        data
      );
      this.routing.toMenu();
      this.user.loggedIn();
    } else {
      this.isLogged = false;
    }
  }
  getRoute() {
    return this.routing;
  }
}
