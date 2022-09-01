import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SubHeaderComponent } from './Components/sub-header/sub-header.component';
import { HotDrinksComponent } from './Pages/menu/menu.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeadingComponent } from './Components/heading/heading.component';
import { CartPComponent } from './Pages/cart/cart-p.component';
import { UserComponent } from './Pages/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './Components/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadingComponent,
    ProductsComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    HotDrinksComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailsComponent,
    SubHeaderComponent,
    NavbarComponent,
    CartPComponent,
    UserComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
