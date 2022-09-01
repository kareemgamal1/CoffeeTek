import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() heading!: string;
  @Input() description!: string;
  constructor() {}

  ngOnInit(): void {}
}
