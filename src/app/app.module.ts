import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Components/main/login/login.component';
import { RegisterComponent } from './Components/main/register/register.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductComponent } from './Components/products/product/product.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { SubNavbarComponent } from './Components/sub-navbar/sub-navbar.component';
import { HotDrinksComponent } from './Pages/menu/menu.component';
import { CartPComponent } from './Pages/cart/cart-p.component';
import { UserComponent } from './Pages/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './Components/user-navbar/user-navbar.component';
import { ButtonsHolderComponent } from './Components/main/buttons-holder/buttons-holder.component';
import { DefaultComponent } from './Components/products/product-details/default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './Components/shared/loading-spinner/loading-spinner.component';
import { HeadingComponent } from './Components/shared/heading/heading.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { InfoComponent } from './Components/info/info.component';
import { StoryComponent } from './Components/story/story.component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    HotDrinksComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailsComponent,
    SubNavbarComponent,
    HeadingComponent,
    NavbarComponent,
    CartPComponent,
    UserComponent,
    UserNavbarComponent,
    ButtonsHolderComponent,
    DefaultComponent,
    LoadingSpinnerComponent,
    InfoComponent,
    StoryComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserModule,
    MatProgressSpinnerModule,
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
