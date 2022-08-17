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

  constructor(private http: HttpClient, private routing: RoutingService) {
    this.password = 'kareeem';
    this.email = '123456';
  }

  ngOnInit(): void {}
  onLogin() {
    let data = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post<any>('https://coffeeshopv.herokuapp.com/user/v1/login', data)
      .subscribe((response) => {
        this.routing.toMenu();
      });
  }
  getRoute() {
    return this.routing;
  }
}
