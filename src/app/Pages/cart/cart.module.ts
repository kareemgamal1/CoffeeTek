import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartComponent } from 'src/app/Components/cart/cart.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { CartPComponent } from './cart-p.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CartComponent, CartPComponent],
  imports: [SharedModule, CommonModule, HttpClientModule, MatTableModule],
  exports: [CartComponent, CartPComponent],
})
export class CartModule {}
