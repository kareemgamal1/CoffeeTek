import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud', redirectTo: 'crud/main', pathMatch: 'full' },
  { path: 'crud/main', component: MainComponent },
  { path: 'crud/registration', component: MainComponent },
  { path: 'crud/login', component: MainComponent },
  { path: 'crud/register', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
