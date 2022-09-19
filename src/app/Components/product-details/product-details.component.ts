import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { RoutingService } from '../../Services/routing.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [CartService, RoutingService],
})
export class ProductDetailsComponent implements OnInit {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() price!: string;
  @Output() childName = new EventEmitter<MouseEvent>();

  source!: string;
  noPrice!: number;
  noOfboughtItemsCount: number = 1;
  boughtItemsCount: string = '1';
  noTotal: number = 0;
  total: string = '0';
  isAddedToCart!: boolean;
  sugar!: number;
  sizeSelected: number = 1;
  sugarSelected: number = 1;
  constructor(private cart: CartService, private routing: RoutingService) {}

  public handleClick(event: MouseEvent) {
    this.childName.emit(event);
  }

  ngOnInit(): void {
    this.source = this.src;
    this.noPrice = +this.price;
    this.total = String(this.noPrice);
  }

  addToCart() {
    const objectToBeReturned: {
      src: string;
      name: string;
      price: number;
      quantity: number;
    } = {
      src: this.source,
      name: this.name,
      price: this.noPrice,
      quantity: this.noOfboughtItemsCount,
    };
    console.log(this.cart.products);
    let stat = localStorage.getItem('loggedIn');
    if (stat == 'true') {
      this.cart.addToCart(objectToBeReturned);
    } else {
      alert('Please login first!');
      this.routing.toLogin();
    }
  }

  onAdd() {
    this.noOfboughtItemsCount++;
    this.boughtItemsCount = String(this.noOfboughtItemsCount);
    this.calculateTotal();
  }

  onDelete() {
    if (this.noOfboughtItemsCount > 0) {
      this.noOfboughtItemsCount--;
      this.boughtItemsCount = String(this.noOfboughtItemsCount);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.noTotal = parseInt(this.price) * this.noOfboughtItemsCount;
    this.total = String(this.noTotal);
  }

  selectSize(size: number) {
    this.sizeSelected = size;
    if (size != 1) {
      this.price = String(5 * size + this.noPrice);
    } else {
      this.price = String(this.noPrice);
    }
    this.calculateTotal();
  }

  selectSugar(sugar: number) {
    this.sugarSelected = sugar;
  }
}