import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalDbService } from './local-db.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly API_URL="http://localhost:9000";


  readonly ENDPOINT_COMPTES="/comptes";
  readonly ENDPOINT_SEARCH_COMPTES="/searchcompte/{codecompte}";
  constructor(private httpClient:HttpClient,private localDbService:LocalDbService) {

  }
  getComptes(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_COMPTES)
  }

  getCount(){
    return this.httpClient.get('http://127.0.0.1:9000/api/counter/',{'headers':{
      'token':<string>this.localDbService.getToken()
    }})
  } 
}
