import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts = this.cart.getCart();
  totalPrice: number = 0;
  constructor(private cart: CartService) {}
  getCart() {}
  deleteProducts() {}
  ngOnInit(): void {
    for (const product of this.cartProducts) {
      this.totalPrice += product.totalPrice;
    }
  }
}
