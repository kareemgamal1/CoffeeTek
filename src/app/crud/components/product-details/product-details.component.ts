import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() price!: string;
  noPrice!: number;
  noOfboughtItemsCount: number = 1;
  boughtItemsCount: string = '1';
  noTotal: number = 0;
  total: string = '0';
  isAddedToCart!: boolean;
  sugar!: number;
  sizeSelected: number = 1;
  sugarSelected: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.noPrice = parseInt(this.price);
    this.total = String(this.noPrice);
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
