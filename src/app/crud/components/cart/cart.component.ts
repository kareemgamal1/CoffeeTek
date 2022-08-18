import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService) {}
  getCart() {
    console.log(JSON.parse(localStorage.getItem('products') || '[]'));
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  ngOnInit(): void {}
}
