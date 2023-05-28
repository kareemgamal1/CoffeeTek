import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { UserComponent } from './Pages/user/user.component';
import { CartPComponent } from './Pages/cart/cart-p.component';
import { HotDrinksComponent } from './Pages/menu/menu.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './Pages/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { RegisterComponent } from './Components/main/register/register.component';
import { LoginComponent } from './Components/main/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent, data: { animation: 'mainPage' } },
      {
        path: 'register',
        component: RegisterComponent,
        data: { animation: 'registerPage' },canActivate:[AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'loginPage' },canActivate:[AuthGuard]
      },
    ],
    data: { animation: 'homePage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'aboutPage' },
  },
  {
    path: 'menu',
    component: HotDrinksComponent,
    data: { animation: 'menuPage' },
  },
  {
    path: 'cart',
    component: CartPComponent,
    canActivate: [AuthGuard],
    data: { animation: 'cartPage' },
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { animation: 'userPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
