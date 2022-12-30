import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { ILoginResponse } from '../models/ilogin-response';
import { IUserRegister } from '../models/iuser-register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {
       }

  register(user: IUserRegister) : Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>("http://127.0.0.1:9000/users/registerNewUser", user);
  }
}


