import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { HotDrinksComponent } from './pages/hot-drinks/hot-drinks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [
    HeaderComponent,
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
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class CrudModule {}
