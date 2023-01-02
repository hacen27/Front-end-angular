import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly API_URL="http://localhost:9000/comptesmangement";
  readonly ENDPOINT_COMPTES="/comptes";
  constructor(private httpClient:HttpClient) { 

  }
  getComptes(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_COMPTES)
  }
}
