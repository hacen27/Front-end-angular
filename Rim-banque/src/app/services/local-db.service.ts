import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDbService {

  private _token: string = "";

  constructor() {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") != "undefined"
    ) {
      this.token = sessionStorage.getItem("token")|| '{}';
      console.log(this.token);
    }
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }
  getToken() {
    return sessionStorage.getItem('token');;
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

}
