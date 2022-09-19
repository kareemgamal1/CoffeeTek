import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() name: string = '';
  @Input() src: string = '';
  @Input() price: string = '';

  currentProduct: Product = {
    name: this.name,
    src: this.src,
    price: this.price,
  };

  constructor(private ProductsService: ProductsService) {
    this.onProductclick();
  }

  ngOnInit(): void {
    //what should i subscribe to in order to change the product in the service to the currently clicked one?
    //the product in the service will be a subject, that changes everytime a product is clicked
  }

  onProductclick() {
    this.currentProduct.name = this.name;
    this.currentProduct.src = this.src;
    this.currentProduct.price = this.price;
    console.log(this.price);
    this.ProductsService.currentProduct.next(this.currentProduct);
  }
}
