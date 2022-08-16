import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CrudModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
