import { AfterViewInit, Component, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
// import { NavbarComponent } from './components/navbar/navbar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {

  }
  title = 'Rim-banque';
  ngOnInit(): void {
    // console.log('new instance ',this.dashCardComponents)
  }
}
