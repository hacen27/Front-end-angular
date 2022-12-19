import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'singup', component: SingupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: '**', component: HomeComponent },   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
