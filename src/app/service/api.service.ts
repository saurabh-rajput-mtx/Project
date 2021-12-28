import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any):Observable<any> {
    return this.http.post<any>("http://localhost:9080/users", data,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
      // .pipe(map((res: any) => {
      //   return res;
      // }))
  };

  getUser():Observable<any> {
    return this.http.get<any>("http://localhost:9080/users",);
      // .pipe(map((res: any) => {
      //   // console.log(res)
      //   return res;
      // }
      // ))
  }
  updateUser(data: any, id: number) {
    return this.http.put<any>("http://localhost:9080/users/" + id, data,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
    .pipe(map((res: any) => {
    return res;
      }))

  }
  filterid(data:any) {
    return this.http.post<any>("http://localhost:9080/users/filter",data,{'headers':{'Content-Type':  'application/json'},responseType:'json'})
    // {headers:{'Content-type':"appliaction/json"},responseType:'text'})
    .pipe(map((res: any) => {
      return res;
    }))
  }
  // filtername(name: string) {
  //   return this.http.get<any>("http://localhost:3000/Users?name=" + name)
  //   // .pipe(map((res: any) => {
  //   //   return res;
  //   // }))
  // }
  deleteUser(id: number):Observable<any> {
    return this.http.delete("http://localhost:9080/users/" + id,{headers:{'Content-type':"appliaction/json"},responseType:'text'})
      // .pipe(map((res: any) => {
      //   return res;
      // }))
  }
  
}