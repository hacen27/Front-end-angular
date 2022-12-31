import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { IUserResponse } from '../models/iuser-response';
import { IUserRegister } from '../models/iuser-register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {
       }

  register(user: IUserRegister) : Observable<IUserResponse> {
    return this.httpClient.post<IUserResponse>("http://127.0.0.1:9000/users/registerNewUser", user);
  }
}


