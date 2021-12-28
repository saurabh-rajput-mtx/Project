import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { baseURL } from '../shared/baseurl';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes!:Dish[];
  alldishes!:Dish[];
  BaseURL=baseURL
  filterCategory : any;
  // constructor(private dishService:DishService) { }
  constructor(private dishService: DishService,
    private cartService:CartService){ }

  ngOnInit(): void {

    this.dishService.getDishes().
    subscribe((dishes) => {this.dishes = dishes;
    this.alldishes=dishes
    });

  }
  // ngOnInit(): void {
  
  addtocart(item: any){
    let itemtosend={id:item.id,
      name:item.name,
      image:item.image,
      price:item.price,
      qty:1}
    this.cartService.addtoCart(itemtosend);
  }

  filter(label:string){
    this.dishes = this.alldishes
    .filter((a:any)=>{
      if(a.label == label ){
        console.log(a)
        return a;
      }
    })
  }

  AllDishes(){
    this.dishes=this.alldishes
  }


}
