import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { GET_ALL_DETAILS, GET_BY_CATEGORY, GET_PRODUCTS_BY_SEARCH } from '../../../auth';
import { ActivatedRoute } from '@angular/router';
import { Products } from './product.model';
import { CartService } from '../cart-status/cart.service';
import { CartItem } from '../cart-status/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productList:Products[]=[];
  categoryId: any;
  search:any;
  keyValue:any;
  constructor(private common:CommonService,private route: ActivatedRoute, private cart:CartService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.search =[params['keyword']];
      this.getAllProduct();
    });
  }
  getAllProduct() {
    if(this.categoryId!=null&& this.categoryId!=undefined){

      this.common.httpGet(GET_BY_CATEGORY + this.categoryId).subscribe((data) => {
        this.productList = data.response;
      });

    }

    if(this.search[0]!=null && this.search[0]!=undefined && this.search[0]!="" ){
     this.common.httpGet(GET_PRODUCTS_BY_SEARCH+this.search).subscribe((data)=>{
      this.productList=data.response;
     })

    }

      if(this.categoryId==undefined && this.search[0]==undefined){
        this.common.httpGet(GET_ALL_DETAILS).subscribe((data) => {
          this.productList = data.response;
        });

      }
  }
  addToCart(product:Products){
    const theCartItem = new CartItem(product);
    this.cart.addToCart(theCartItem);
  }

}
