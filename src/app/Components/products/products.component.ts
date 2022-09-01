import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    { src: 'assets/espresso.png', name: 'Espresso', price: 32 },
    { src: 'assets/cappuccino.png', name: 'Cappuccino', price: 41 },
    { src: 'assets/latte-macchiato.png', name: 'Macchiato', price: 45 },
    { src: 'assets/mocha.png', name: 'Mocha', price: 37 },
    { src: 'assets/latte.png', name: 'Latte', price: 34 },
  ];
  currentProduct: { src: string; name: string; price: number } =
    this.products[0];
  constructor() {}

  ngOnInit(): void {}
  changeProduct(name: any) {
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (element.name == name.currentTarget.innerText) {
        this.currentProduct = element;
        console.log(this.currentProduct.name);
      } else continue;
    }
  }
}