import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './Pages/home/home.module';
import { AboutModule } from './Pages/about/about.module';
import { CartModule } from './Pages/cart/cart.module';
import { SharedModule } from './Components/shared/shared.module';
import { UserModule } from './Pages/user/user.module';
import { MenuModule } from './Pages/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutModule,
    CartModule,
    UserModule,
    MenuModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//Use firebase to save users accounts DONE
//Use authentication to prevent users from adding to cart DONE
//Hierarchy of products in cart, expand it to see each order with each specification (sugar and size wise)
//Add default cart

//Fix CSS related bugs:
//Show Size in cart
//Right menu is not padded and is not sized well enough
//Login&Register pages are too narrow
//Make product details buttons better
//Ensure similarity in all buttons across the website
//Left to be responsive: Home, Menu (product-details), About, Cart

//Add animations between routes to ensure smooth UX (Next week)
//Allow editing user details via user page
//replace username in registeration with first and last name
//Generate auto username based on them
