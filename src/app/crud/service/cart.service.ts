import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //read it from backend
  products: { src: string; name: string; price: number; quantity: number }[] =
    [];
  addToCart(objectToBeReturned: {
    src: string;
    name: string;
    price: number;
    quantity: number;
  }) {
    this.products.push(objectToBeReturned);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  constructor() {}
}
