import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../Components/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      src: 'assets/espresso.png',
      name: 'Espresso',
      originalPrice: 32,
    },
    {
      src: 'assets/cappuccino.png',
      name: 'Cappuccino',
      originalPrice: 41,
    },
    {
      src: 'assets/latte-macchiato.png',
      name: 'Macchiato',
      originalPrice: 45,
    },
    {
      src: 'assets/mocha.png',
      name: 'Mocha',
      originalPrice: 37,
    },
    {
      src: 'assets/latte.png',
      name: 'Latte',
      originalPrice: 34,
    },
  ];
  currentProduct = new Subject<Product>();
  selected = new Subject<boolean>();
}
