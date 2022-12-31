import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth-layout/login/login.component';
import { RegisterComponent } from './layouts/auth-layout/register/register.component';

import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: DashboardComponent ,canActivate: [AuthGuard]},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // { path: 'login', component: LoginComponent },
  // { path: 'singup', component: SingupComponent },
  // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: '**', component: HomeComponent },
  {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',

      },
      {path:'register',component:RegisterComponent}
];

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     // canActivate: [AppGuard],
//     children: [
//       {
//         path: 'apropos',
//         loadChildren: () =>
//           import('../apropos/apropos.module').then(
//             (m) => m.AproposModule
//           ),
//       },
//       {
//         path: 'admin',
//         loadChildren: () =>
//           import('../admin/admin.module').then(
//             (m) => m.AdminModule
//           ),
//       },
//       {
//         path: 'posts',
//         loadChildren: () =>
//           import('../posts/posts.module').then(
//             (m) => m.PostsModule
//           ),
//       },
//     ]
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
