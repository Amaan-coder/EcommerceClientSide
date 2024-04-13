import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.scss'
})
export class CartStatusComponent implements OnInit{
  totalPrice:number=0.00;
  totalQuantity:number=0;

  constructor(private cart:CartService){}

  ngOnInit(): void {
    this.updateCart();
  }
  updateCart() {
    this.cart.totalPrice.subscribe((data)=>{
      this.totalPrice=data;
    });
    this.cart.totalQuantity.subscribe(data=>{
      this.totalQuantity=data;
    })
  }

}
