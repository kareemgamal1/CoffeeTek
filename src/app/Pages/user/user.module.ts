import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { UserNavbarComponent } from 'src/app/Components/user-navbar/user-navbar.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, UserNavbarComponent],
  exports: [UserComponent, UserNavbarComponent],
  imports: [SharedModule],
})
export class UserModule {}
