import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-succes',
  templateUrl: './show-succes.component.html',
  styleUrls: ['./show-succes.component.css']
})
export class ShowSuccesComponent implements OnInit{
  @Input("msg") msg: any;

  constructor() { }

  ngOnInit(): void {
  }

}
