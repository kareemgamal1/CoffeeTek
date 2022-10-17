import { NgModule } from '@angular/core';
import { SubNavbarComponent } from '../sub-navbar/sub-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeadingComponent } from './heading/heading.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    SubNavbarComponent,
    HeadingComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
  ],
  declarations: [
    FooterComponent,
    SubNavbarComponent,
    HeadingComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
