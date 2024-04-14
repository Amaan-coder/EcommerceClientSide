import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  existingCartItem: any;

  alreadyExist: boolean = true;
  constructor() { }

  addToCart(theCartItem: CartItem) {

    console.log(this.cartItems);
    let alreadyExistsInCart: boolean = false;

    if (this.cartItems.length > 0) {

      this.existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
      alreadyExistsInCart = (this.existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {

      this.existingCartItem.quantity++;
    }
    else {

      this.cartItems.push(theCartItem);
    }


    this.computeCartTotals();
  }
  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(parseFloat(totalPriceValue.toFixed(2)));
    this.totalQuantity.next(totalQuantityValue);
  }

  decrement(thecart: CartItem) {
    thecart.quantity--;
    if(thecart.quantity==0){
      this.remove(thecart);
    }
    else{

      this.computeCartTotals();
    }

  }
  remove(thecart: CartItem) {
    const index = this.cartItems.findIndex(item=>item.id==thecart.id);
    if(index!=-1){
      this.cartItems.splice(index,1);
      this.computeCartTotals();
    }
  }



}
