import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuth } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingupComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    MatButtonModule ,
    MatCardModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule, 
   
    
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
