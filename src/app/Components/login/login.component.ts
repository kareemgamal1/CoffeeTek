import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { RoutingService } from 'src/app/Services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = true;
  loginForm: FormGroup;

  constructor(
    private routing: RoutingService,
    private AuthService: AuthService
  ) {}

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
    this.AuthService.login();
    this.routing.toMenu();
  }
}
