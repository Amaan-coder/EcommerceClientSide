import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-status/cart.model';
import { CartService } from '../cart-status/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  quantity: number = 1;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems = this.cart.cartItems;
    this.cart.totalPrice.subscribe(data => {
      this.totalPrice = data;
    });
    this.cart.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
    });
    this.cart.computeCartTotals();
  }


  onPlus(thecart: CartItem) {

    this.cart.addToCart(thecart);
  }
  onMinus(thecart: CartItem) {
    if(thecart.quantity>0){

      this.cart.decrement(thecart);
    }

  }
  remove(thecart:CartItem){
    this.cart.remove(thecart);
  }
}
