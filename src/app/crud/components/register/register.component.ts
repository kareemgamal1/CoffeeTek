import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../service/routing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RoutingService],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  secondPassword: string = '';
  email: string = '';
  constructor(private http: HttpClient, private routing: RoutingService) {}

  ngOnInit(): void {}
  onRegister() {
    if (this.password === this.secondPassword) {
      let data = {
        userName: this.username,
        email: this.email,
        password: this.password,
      };
      this.http.post<any>(
        'https://coffeeshopv.herokuapp.com/user/v1/add',
        data
      );
      this.routing.toLogin();
    } else {
      console.log('error');
    }
  }
  getRoute() {
    return this.routing;
  }
}
