import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  secondPassword: string = '';
  email: string = '';
  constructor(private http:HttpClient) {
    this.username="kareemgamaal";
    this.password="kareeem";
    this.email="123456";
  }

  ngOnInit(): void {}
  onFormSubmit() {
    if (this.password === this.secondPassword) {
      let data = {
        userName : this.username,
        email: this.email,
        password : this.password,
      };
        this.http.post<any>('https://coffeeshopv.herokuapp.com/user/v1/add',data);
        //then go to login page
    }
  }
}
