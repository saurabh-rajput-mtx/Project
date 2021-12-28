import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseURL = baseURL
  UserActive:any;
  UserInactive:any=true;
  username!:string;
  emailuser!:string;
  userssuccess=false;
  constructor(private http: HttpClient) { }

  getLogin(email: string) {
    return this.http.get<any>(this.BaseURL + 'login/?email='+email)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  login(){
    this.UserActive=true;
    this.UserInactive='';
    
  }
  logout(){
    this.UserActive='';
    this.UserInactive=true;
  }
  userlogin(){
    return this.username

  }
}
