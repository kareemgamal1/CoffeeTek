import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { UserComponent } from './Pages/user/user.component';
import { CartPComponent } from './Pages/cart/cart-p.component';
import { HotDrinksComponent } from './Pages/menu/menu.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { AuthGuard } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'crud', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'togglePage' },
  },
  { path: 'cart-p', component: CartPComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: HotDrinksComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
