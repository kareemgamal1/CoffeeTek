import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  error: string = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      secondPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onRegister() {
    this.authService
      .signup(
        this.registerForm.get('email').value,
        this.registerForm.get('password').value
      )
      .subscribe(
        () => {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.router.navigate(['/menu'], { relativeTo: this.route });
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
