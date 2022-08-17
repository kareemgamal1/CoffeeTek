import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() price: string = '';

  constructor() {}

  ngOnInit(): void {}
}
