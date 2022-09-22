import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RoutingService } from '../../Services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  inWelcome: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.url == '/home'
      ? (this.inWelcome = true)
      : (this.inWelcome = false);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/home') {
          this.inWelcome = true;
        } else {
          this.inWelcome = false;
        }
      });
    //I want to subscribe to the current URL, relative to home, whenever it changes I change the value of inMain, so that i can hide buttons holder
  }
}
