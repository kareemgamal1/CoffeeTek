import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from 'src/app/Components/cart/cart.component';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { CartPComponent } from './cart-p.component';

@NgModule({
  declarations: [CartComponent, CartPComponent],
  imports: [SharedModule, CommonModule],
  exports: [CartComponent, CartPComponent],
})
export class CartModule {}
