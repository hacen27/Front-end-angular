import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUserRegister } from 'src/app/models/iuser-register';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  @Output() notify = new EventEmitter();

}
