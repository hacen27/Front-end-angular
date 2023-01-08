import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDbService {

  private _token: string = "";
  private roles =[];

  constructor() {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") != "undefined"
    ) {
      this.token = sessionStorage.getItem("token")|| '{}';
      this.roles = JSON.parse(sessionStorage.getItem('userRole')|| '{}')
      console.log(this.token);
      console.log(this.roles[0]['name']);
      console.log('roles =======',this.roles)
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
  getRole(){
    return this.roles[0]['name'];
  }

}
