import { Injectable } from '@angular/core';
import { Product } from '../Components/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  boughtProducts: Product[] = [
    {
      src: 'assets/espresso.png',
      name: 'Espresso',
      originalPrice: 32,
    },
  ];
  constructor() {}

  addToCart(product: Product) {
    this.boughtProducts.push(product);
  }

  getCart() {
    return this.boughtProducts;
  }

  clearCart() {
    this.boughtProducts = [];
  }
}
