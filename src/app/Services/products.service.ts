import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../Components/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    { src: 'assets/espresso.png', name: 'Espresso', price: '32' },
    { src: 'assets/cappuccino.png', name: 'Cappuccino', price: '41' },
    { src: 'assets/latte-macchiato.png', name: 'Macchiato', price: '45' },
    { src: 'assets/mocha.png', name: 'Mocha', price: '37' },
    { src: 'assets/latte.png', name: 'Latte', price: '34' },
  ];
  currentProduct = new Subject<Product>();
  constructor() {}
}
