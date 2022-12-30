import { AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DashCardComponent } from './components/dash-card/dash-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  title = 'Rim-banque';
  ngOnInit(): void {
    // console.log('new instance ',this.dashCardComponents)
  }
}
