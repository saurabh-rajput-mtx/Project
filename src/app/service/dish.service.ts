import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DishConst } from '../shared/DISHES';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class DishService {
  id: number = 0
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:9080/' + 'menu');
  }
  // to det filter dish 
  getDish(id: number): Observable<Dish> {
    // it will become array using filter
    
    return this.http.get<Dish>('http://localhost:9080/menu/' + id);

  }
  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
  constructor(private http: HttpClient) { }
}
