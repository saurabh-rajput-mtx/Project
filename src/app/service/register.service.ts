import { Injectable } from '@angular/core';
import { Login } from '../shared/login';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BaseURL = baseURL
  constructor(private http: HttpClient) { }
  postregister(data: any) {
    console.log(this.BaseURL + 'login',)
    return this.http.post<any>(this.BaseURL + 'login', data)
      .pipe(map((res: any) => {
        return res;

      }))
  }
  getLogin(email: string) {
    return this.http.get<any>(this.BaseURL + 'login/?email='+email)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
