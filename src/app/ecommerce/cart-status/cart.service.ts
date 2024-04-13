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



  existCartItem: CartItem | undefined;
  alreadyExist: boolean = true;
  constructor() { }

  addToCart(theCartItem: CartItem) {


    let alreadyExistsInCart: boolean = false;

    if (this.cartItems.length > 0) {

      // for (let tempCartItem of this.cartItems) {
      //   if (tempCartItem.id === theCartItem.id) {
      //     this.existingCartItem = tempCartItem;
      //     break;
      //   }
      // }

      this.existCartItem = this.cartItems.find((item)=>item.id===theCartItem.id);
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
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
}
