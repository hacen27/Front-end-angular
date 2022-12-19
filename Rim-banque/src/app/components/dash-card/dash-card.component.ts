import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css']
})
export class DashCardComponent  implements OnInit{
  count = 9500
  @Input() counter:any;
  @Input()
  ID!: string;


  constructor (){}
  ngOnInit(): void {
   
  }

}
