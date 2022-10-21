import { style, transition, trigger, useAnimation } from '@angular/animations';
import { rotateCubeToLeft, rotateCubeToRight } from 'ngx-router-animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('homePage=>menuPage', style({})),
      transition('menuPage=>homePage', style({})),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'CoffeTek';
  inMain = true;
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
  ngOnInit(): void {}
}
