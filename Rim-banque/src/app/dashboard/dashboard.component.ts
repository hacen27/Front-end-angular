import { Component, OnInit } from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { LoginService } from '../services/login.service';
import { DashboardService } from '../services/dashboard.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   comptes!: Object

  constructor(
    private localDbService: LocalDbService,
    private loginService: LoginService,
    private dashboardService:DashboardService) { 

  }

  ngOnInit(): void {
    console.log("Inisialiser dashboard!")
    this.dashboardService.getComptes().subscribe((datas)=>{
      this.comptes=datas;
    })
  }

  afficheToken(){
    console.log("la token : "+ this.localDbService.token);
    this.loginService.logOut();
  }
  
  logout(){
    this.loginService.logOut();
  }

}
