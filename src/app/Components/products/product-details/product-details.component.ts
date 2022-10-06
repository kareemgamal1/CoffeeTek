import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from '../../../Services/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  loggedIn: boolean;
  @Input() currentProduct: Product;
  constructor(
    private CartService: CartService,
    private ProductService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductService.currentProduct.subscribe((product) => {
      this.currentProduct = product;
    });
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
    this.calculateTotal();
  }

  addToCart() {
    if (this.loggedIn) {
      this.CartService.addToCart(this.currentProduct);
    } else {
      //show overlay which has button (ok) that takes him to login page
      this.router.navigate(['/home/login']);
    }
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
