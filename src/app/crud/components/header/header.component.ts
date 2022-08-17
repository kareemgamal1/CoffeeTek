import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from '../../service/routing.service';
import { MenuInfo } from './menu-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RoutingService],
})
export class HeaderComponent implements OnInit {
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
