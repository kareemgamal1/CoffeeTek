import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../service/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [RoutingService],
})
export class NavbarComponent implements OnInit {
  constructor(private routing: RoutingService) {}

  ngOnInit(): void {}

  getRoute() {
    return this.routing;
  }
  deleteProducts() {
    localStorage.removeItem('products');
  }
}
