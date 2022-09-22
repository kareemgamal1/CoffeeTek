import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Components/products/product.model';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-p',
  templateUrl: './cart-p.component.html',
  styleUrls: ['./cart-p.component.css'],
})
export class CartPComponent implements OnInit {
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
