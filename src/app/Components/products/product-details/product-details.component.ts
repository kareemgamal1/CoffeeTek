import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from '../../../Services/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() currentProduct: Product;
  constructor(
    private CartService: CartService,
    private ProductService: ProductsService
  ) {}

  ngOnInit(): void {
    this.ProductService.currentProduct.subscribe((product) => {
      this.currentProduct = product;
      console.log(this.currentProduct);
    });
    this.calculateTotal();
  }

  addToCart() {
    this.CartService.addToCart(this.currentProduct);
    console.log('IN PRODUCT DETAILS', this.CartService.boughtProducts);
  }

  onAdd() {
    this.currentProduct.amount++;
    this.calculateTotal();
  }

  onDelete() {
    if (this.currentProduct.amount > 0) {
      this.currentProduct.amount--;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.currentProduct.totalPrice =
      this.currentProduct.currentPrice * this.currentProduct.amount;
  }

  selectSize(size: number) {
    this.currentProduct.sizeSelected = size;
    this.currentProduct.currentPrice = this.currentProduct.prices[size - 1];
    this.calculateTotal();
  }

  selectSugar(sugar: number) {
    this.currentProduct.sugarSelected = sugar;
  }
}
