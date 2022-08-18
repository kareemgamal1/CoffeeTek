import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Output() childName = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}
  public handleClick(event: MouseEvent) {
    this.childName.emit(event);
  }
}
