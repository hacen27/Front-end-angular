import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../models/ilogin";
import {ILoginResponse} from "../models/ilogin-response";
import {Observable} from "rxjs";
import {LocalDbService} from "./local-db.service";
import { UtilService } from './util.service';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  
    constructor(private httpClient: HttpClient,
                private utilService: UtilService,
                private localDbService: LocalDbService) { }
  
    logIn(loginObj: ILogin): Observable<ILoginResponse> {
      return this.httpClient.post<ILoginResponse>("https://fstblogsi.up.railway.app/dj-rest-auth/login/", loginObj);
    }
  
    logOut() {
      this.localDbService.token = "";
      this.utilService.navigateTo("login");
    }
  
  
}
