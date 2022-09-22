import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() currentProduct: Product;
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.currentProduct = {
      ...this.currentProduct,
      prices: [
        this.currentProduct.originalPrice,
        this.currentProduct.originalPrice + 10,
        this.currentProduct.originalPrice + 15,
      ],
      amount: 1,
      sizeSelected: 1,
      sugarSelected: 1,
      totalPrice: this.currentProduct.originalPrice,
      currentPrice: this.currentProduct.originalPrice,
    };
  }

  onProductclick() {
    this.ProductsService.currentProduct.next(this.currentProduct);
    this.ProductsService.selected.next(true);
  }
}

//what should i subscribe to in order to change the product in the service to the currently clicked one?
//the product in the service will be a subject, that changes everytime a product is clicked
