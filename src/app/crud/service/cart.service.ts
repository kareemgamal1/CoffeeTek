import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products!: [{ src: string; name: string; price: number }];
  addToCart(){
    
  }
  constructor() {}
}
