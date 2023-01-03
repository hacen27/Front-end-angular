import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly API_URL="http://localhost:9000";


  readonly ENDPOINT_COMPTES="/comptes";
  readonly ENDPOINT_SEARCH_COMPTES="/searchcompte/{codecompte}";
  constructor(private httpClient:HttpClient) {

  }
  getComptes(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_COMPTES)
  }
}
