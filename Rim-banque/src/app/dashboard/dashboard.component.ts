import { Component, OnInit } from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private localDbService: LocalDbService,
    private loginService: LoginService) { 

  }

  ngOnInit(): void {
  }

  afficheToken(){
    console.log("la token : "+ this.localDbService.token);
    this.loginService.logOut();
  }
  
  logout(){
    this.loginService.logOut();
  }

}
