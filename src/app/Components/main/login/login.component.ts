import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;
  error: string = null;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('kareemgamaaal@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('asdasdasd', [Validators.required]),
    });
  }

  onLogin() {
    this.AuthService.login(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).subscribe(
      () => {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/menu']);
        }, 1000);
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
