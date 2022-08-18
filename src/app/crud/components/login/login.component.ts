import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../service/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RoutingService],
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  isLogged: boolean = true;
  constructor(private http: HttpClient, private routing: RoutingService) {}

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
    } else {
      this.isLogged = false;
    }
  }
  getRoute() {
    return this.routing;
  }
}
