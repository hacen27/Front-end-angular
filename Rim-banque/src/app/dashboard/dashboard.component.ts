import { Component, OnInit ,AfterViewInit, ViewEncapsulation} from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { LoginService } from '../services/login.service';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit , AfterViewInit{
   comptes: Object=[];
   messages = ['20', '200', '1900', '1500', '500'];

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
