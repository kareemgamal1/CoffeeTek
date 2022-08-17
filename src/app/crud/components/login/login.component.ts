import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';

  constructor(private http:HttpClient) {
    this.password="kareeem";
    this.email="123456";
  }

  ngOnInit(): void {
  }
onLogin(){
        let data = {
        email: this.email,
        password : this.password,
      };
        this.http.post<any>('https://coffeeshopv.herokuapp.com/user/v1/login',data).subscribe((response)=>{
          alert("Logged in successfully")
        });;
}
}
