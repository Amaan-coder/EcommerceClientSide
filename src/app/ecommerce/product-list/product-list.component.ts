import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { GET_ALL_DETAILS, GET_BY_CATEGORY, GET_PRODUCTS_BY_SEARCH } from '../../../auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productList:any;
  categoryId: any;
  search:any;
  keyValue:any;
  constructor(private common:CommonService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.search =[params['keyword']];
      this.getAllProduct();
    });
  }
  getAllProduct() {
    console.log("Search",this.search[0]);

    if(this.categoryId!=null&& this.categoryId!=undefined){

      this.common.httpGet(GET_BY_CATEGORY + this.categoryId).subscribe((data) => {
        this.productList = data.response;
      });

    }

    if(this.search[0]!=null && this.search[0]!=undefined && this.search[0]!="" ){
     this.common.httpGet(GET_PRODUCTS_BY_SEARCH+"?name="+this.search).subscribe((data)=>{
      this.productList=data.response;
     })

    }

      if(this.categoryId==undefined && this.search[0]==undefined){
        this.common.httpGet(GET_ALL_DETAILS).subscribe((data) => {
          this.productList = data.response;
        });

      }
    // }
  }

}
