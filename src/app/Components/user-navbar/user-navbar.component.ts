import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() heading!: string;
  @Input() description!: string;
  constructor() {}

  ngOnInit(): void {}
}
