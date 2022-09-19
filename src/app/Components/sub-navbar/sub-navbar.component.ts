import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css'],
})
export class SubNavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() heading!: string;
  @Input() description!: string;
  constructor() {}

  ngOnInit(): void {}
}
