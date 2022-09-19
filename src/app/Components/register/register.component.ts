import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutingService } from '../../Services/routing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RoutingService],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private http: HttpClient, private routing: RoutingService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      secondPassword: new FormControl(null, Validators.required),
    });
  }

  onRegister() {
    console.log(this.registerForm.get('email').value);
    this.routing.toLogin();
  }
}
