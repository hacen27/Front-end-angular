import { Component, OnInit ,AfterViewInit, ViewEncapsulation} from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { LoginService } from '../services/login.service';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService],

    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit , AfterViewInit{
  backgroundCardAdmin = ['bg-danger','bg-warning'];
  icons_admin = ['vl_clip-board','vl_user-male']
  user_profile ='';
   comptes!: any[];
   cmpt_total=0;
   counters:number[]=[];
   counts:Record<string, any> = {};
   messages:string[] =[];

  constructor(
    private localDbService: LocalDbService,
    private loginService: LoginService,
    private dashboardService:DashboardService) {
      this.user_profile = localDbService.getRole();

  }
  ngAfterViewInit(): void {
    this.dashboardService.getComptes().subscribe((datas)=>{
      this.comptes=datas as any;
      this.cmpt_total=Object.keys(this.comptes).length;
      console.log(datas)
      console.log("finsh *****************dashboard!",this.comptes
      )

      this.loadCardContent();
      // this.messages[0]=this.cmpt_total as unknown as string;
      console.log("nombres totals",this.cmpt_total
      )
    })  }

  ngOnInit(): void {
  
    console.log("Inisialiser dashboard!")
    this.dashboardService.getAdminCount().subscribe((data)=>console.log(data));

  }

  afficheToken(){
    console.log("la token : "+ this.localDbService.token);
    this.loginService.logOut();
  }

  logout(){
    this.loginService.logOut();
  }

  loadCardContent(){
    if (this.user_profile=='Admin') {
      this.dashboardService.getAdminCount().subscribe((data)=>{
       this.counts=data ;
       // console.log(this.counts);
       Object.keys(this.counts).map((key)=>{
         console.log(key)
         console.log(this.counts[key])
       //  this.counters[index] =this.counts[key]
       //  this.messages[index] =key;
       this.counters.push(this.counts[key])
       this.messages.push(key)
 
        console.log('messages',this.messages)
        // append(counts[k])
      });
     })
     
     // console.log(this.counters);
 
     }
     if ((this.user_profile=='Client')) {

      
      
     }
  }
}
