import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-p',
  templateUrl: './cart-p.component.html',
  styleUrls: ['./cart-p.component.css'],
})
export class CartPComponent implements OnInit {
  constructor(private cart: CartService) {}
  getCart() {
    console.log(JSON.parse(localStorage.getItem('products') || '[]'));
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  deleteProducts() {
    localStorage.removeItem('products');
  }
  ngOnInit(): void {}
}
