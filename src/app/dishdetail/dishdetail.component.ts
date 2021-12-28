import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service'; 
import { switchMap } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
// Params give access to router parameter
// ActivatedRoute provided acces to route
import { Params,ActivatedRoute } from '@angular/router';

// location of page track
import { Location } from '@angular/common';

@Component({

  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  // @Input() 
  BaseURL=baseURL
  dish!:Dish;
  dishIds!: string[];
  prev!:string;
  next!:string;
  constructor(private dishservice:DishService,
     private location:Location,
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dishservice.getDishIds()
    .subscribe(dishIds => this.dishIds = dishIds);

    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; 
      // this.setPrevNext(dish.id);
     });


    console.log(this.dish)
  }
  // setPrevNext(dishId:string) {
  //   const index = this.dishIds.indexOf(dishId);
  //   this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
  //   this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  // }
  
  goBack():void{
    this.location.back()
  }

}
