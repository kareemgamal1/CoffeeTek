import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() boughtItemsCount!: string;
  isAddedToCart!: boolean;
  sugar!: number;

  constructor() {}

  ngOnInit(): void {}
}
