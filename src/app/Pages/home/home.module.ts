import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/Components/shared/shared.module';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { ButtonsHolderComponent } from '../../Components/main/buttons-holder/buttons-holder.component';
import { LoginComponent } from '../../Components/main/login/login.component';
import { MainComponent } from '../../Components/main/main.component';
import { RegisterComponent } from '../../Components/main/register/register.component';
import { AboutModule } from '../about/about.module';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    ButtonsHolderComponent,
  ],
  imports: [
    AboutModule,
    BrowserModule,
    SharedModule,
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
  exports: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    ButtonsHolderComponent,
  ],
})
export class HomeModule {}
