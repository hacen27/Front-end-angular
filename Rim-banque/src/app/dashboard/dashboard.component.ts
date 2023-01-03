import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { LoginService } from '../services/login.service';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit , AfterViewInit{
   comptes: Object=[];

  constructor(
    private localDbService: LocalDbService,
    private loginService: LoginService,
    private dashboardService:DashboardService) {

  }
  ngAfterViewInit(): void {
    this.dashboardService.getComptes().subscribe((datas)=>{
      this.comptes=datas;
      console.log(datas)
      console.log("finsh *****************dashboard!")
    })  }

  ngOnInit(): void {
    console.log("Inisialiser dashboard!")

  }

  afficheToken(){
    console.log("la token : "+ this.localDbService.token);
    this.loginService.logOut();
  }

  logout(){
    this.loginService.logOut();
  }

}
