import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutingService } from '../../Services/routing.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RoutingService, UserService],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = true;
  loginForm: FormGroup;

  constructor(private routing: RoutingService, private user: UserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('kareemgamaal@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('asdasdasd', [Validators.required]),
    });
  }

  onLogin() {
    console.log(this.loginForm.get('email').value);
    this.routing.toMenu();
  }
}
