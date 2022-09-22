import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from './product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  currentProduct: Product;
  selected: boolean;
  constructor(private ProductService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.ProductService.products;
    this.ProductService.currentProduct.subscribe((product) => {
      this.currentProduct = product;
    });
    this.ProductService.selected.subscribe((select) => {
      this.selected = select;
    });
  }
}
//Problems:
//When navigating to other pages, the products state is not saved
