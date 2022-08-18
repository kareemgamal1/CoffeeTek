import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { CartPComponent } from './pages/cart-p/cart-p.component';
import { HotDrinksComponent } from './pages/hot-drinks/hot-drinks.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud/main', component: MainComponent },
  { path: 'crud/registration', component: MainComponent },
  { path: 'crud/login', component: MainComponent },
  { path: 'crud/about', component: AboutComponent },
  { path: 'crud/cart-p', component: CartPComponent },
  { path: 'crud/menu', component: HotDrinksComponent },
  { path: 'crud/user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
