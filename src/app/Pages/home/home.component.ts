import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from '../../Services/routing.service';
import { MenuInfo } from './menu-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RoutingService],
})
export class HomeComponent implements OnInit {
  @Input()
  MenuData: Array<MenuInfo> = [];
  constructor(private routing: RoutingService) {}

  ngOnInit(): void {}

  HandleMenuShowHide(e: MouseEvent, x: HTMLDivElement) {
    e.preventDefault();
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  getRoute() {
    return this.routing;
  }
}
