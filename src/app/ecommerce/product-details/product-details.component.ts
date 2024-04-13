import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { ActivatedRoute } from '@angular/router';
import { GET_PRODUCTS_BY_ID } from '../../../auth';
import { CartService } from '../cart-status/cart.service';
import { CartItem } from '../cart-status/cart.model';
import { Products } from '../product-list/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{


  products: Products = new Products();


  id:any;
  quantity: number = 1;

  // cartQuan: CartItem = new CartItem(this.quantity);

  constructor(private common:CommonService, private route:ActivatedRoute,private cart:CartService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetails(this.id);
  }
  getDetails(id: any){
    this.common.httpGet(GET_PRODUCTS_BY_ID+id).subscribe((data)=>{
      this.products = data.response;
    })
  }
  onPlus(){
    this.quantity++
  }
  onMinus(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
  addToCart(){
    console.log(`Adding to Cart: ${this.products.name}, ${this.products.unitPrice}`);

    const theCartItem = new CartItem(this.products);
    theCartItem.quantity= this.quantity;
    this.cart.addToCart(theCartItem);
  }


}
