import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnInit {
  @Input() heading: string = '';
  @Input() description: string = '';

  constructor() {}
  ngOnInit(): void {}
}
