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
      return this.httpClient.post<ILoginResponse>("http://127.0.0.1:9000/users/login", loginObj);
    }

  
    logOut() {

      this.localDbService.token = "";
      sessionStorage.removeItem('token');
      sessionStorage.clear();

      this.utilService.navigateTo("login");
    }
  
  
}
