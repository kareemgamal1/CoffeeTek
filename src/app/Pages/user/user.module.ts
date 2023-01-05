import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [SharedModule, HttpClientModule],
})
export class UserModule {}
