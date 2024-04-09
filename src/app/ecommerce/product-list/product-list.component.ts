import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { GET_ALL_DETAILS, GET_BY_CATEGORY } from '../../../auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productList:any;
  categoryId: any;
  constructor(private common:CommonService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.getAllProduct();
    });
  }
  getAllProduct() {
    if (this.categoryId) {
      this.common.httpGet(GET_BY_CATEGORY + this.categoryId).subscribe((data) => {
        this.productList = data.response;
      });
    } else {
      // Fetch all products when no category is selected
      this.common.httpGet(GET_ALL_DETAILS).subscribe((data) => {
        this.productList = data.response;
      });
    }
  }
}
