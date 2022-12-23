import { AfterViewInit, NgModule, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';

import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuth } from '@angular/fire/compat/auth';
import { DashCardComponent } from './components/dash-card/dash-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashBordContainerComponent } from './components/dash-bord-container/dash-bord-container.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HistoryComponentComponent } from './history-component/history-component.component';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // SingupComponent,
    // LoginComponent,
    DashboardComponent,
    // DashCardComponent,
    NavbarComponent,
    DashBordContainerComponent,
    SideBarComponent,
    HistoryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase), 
    // MatButtonModule ,
    // MatCardModule,
    // MatInputModule,
    // FormsModule, 
    // ReactiveFormsModule, 
   
    
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // @ViewChildren()
 
}
