import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginAPIUrl : string = "http://localhost:9080/login/";
  employeeAPIUrl : string = "http://localhost:44371/api/Employee/";
  constructor(private _http : HttpClient) { }

  signUp(empObj : any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    return this._http.post<any>(`${this.loginAPIUrl}signup`,empObj,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
  }
  login(empObj:any){
    return this._http.post<any>(`${this.loginAPIUrl}login`,empObj,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
  }
  forget(empObj:any){
    return this._http.put<any>(`${this.loginAPIUrl}forget`,empObj,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
  }
  gettoken(empObj:any){
    return this._http.post<any>(`${this.loginAPIUrl}forget`,empObj,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
  }}
  


