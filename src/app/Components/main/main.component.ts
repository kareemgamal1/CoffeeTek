import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private auth: AuthService) {}
  logged: boolean = false;
  ngOnInit(): void {
    this.auth.loggedIn$.subscribe((next: boolean) => {
      this.logged = next;
    });
  }
}
