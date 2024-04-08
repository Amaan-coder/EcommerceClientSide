import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { GET_ALL_DETAILS } from '../../../auth';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productList:any;
  constructor(private common:CommonService){}
  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllProduct(){
    this.common.httpGet(GET_ALL_DETAILS).subscribe((data)=>{
      this.productList = data.response;
    })
  }
}
