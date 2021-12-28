import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList:any=[]
  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


  //added data from menu
  addtoCart(product : any){
    let flagInsert=false
    if (this.cartItemList.length===0){
      this.cartItemList.push(product);
    }
    else{
      for(let i in this.cartItemList){
        console.log(product.id,this.cartItemList[i].id)
        if (product.id===this.cartItemList[i].id){
          this.cartItemList[i].qty++
          flagInsert=true
          // break;
        }
      }
      if(!flagInsert){      
        this.cartItemList.push(product);
      }
    }
    console.log(this.cartItemList)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.price*a.qty);
    })
    return grandTotal;
  }
  reducecartQty(product: any){
    let index:any=0
    for(let i in this.cartItemList){
      console.log(product.id,this.cartItemList[i].id)
      if (product.id===this.cartItemList[i].id){
        this.cartItemList[i].qty--
        index=i
        // flagInsert=true
        // break;
      }
    }
    this.productList.next(this.cartItemList);
    if (this.cartItemList[index].qty==0){
      this.removeCartItem(product)
    }
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}