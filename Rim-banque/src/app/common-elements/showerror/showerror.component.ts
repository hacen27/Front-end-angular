import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './showerror.component.html',
  styleUrls: ['./showerror.component.css']
})
export class ShowerrorComponent implements OnInit{

  @Input("msg") msg: any;

  constructor() { }

  ngOnInit(): void {
  }
}
