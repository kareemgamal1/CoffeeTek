import { NgModule } from '@angular/core';
import { HotDrinksComponent } from 'src/app/Pages/menu/menu.component';
import { ProductDetailsComponent } from 'src/app/Components/products/product-details/product-details.component';
import { ProductComponent } from 'src/app/Components/products/product/product.component';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { DefaultComponent } from 'src/app/Components/products/product-details/default/default.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HotDrinksComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    DefaultComponent,
  ],
  imports: [SharedModule, CommonModule, HttpClientModule],
  exports: [
    HotDrinksComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    DefaultComponent,
  ],
  providers: [],
})
export class MenuModule {}
