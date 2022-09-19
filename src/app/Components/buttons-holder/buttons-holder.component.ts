import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-buttons-holder',
  templateUrl: './buttons-holder.component.html',
  styleUrls: ['./buttons-holder.component.css'],
})
export class ButtonsHolderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
