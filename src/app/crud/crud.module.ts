import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
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
