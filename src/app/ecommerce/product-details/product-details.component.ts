import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { ActivatedRoute } from '@angular/router';
import { GET_PRODUCTS_BY_ID } from '../../../auth';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product:any;
  id:any;
  quantity: number = 1;
  constructor(private common:CommonService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetails(this.id);
  }
  getDetails(id: any){
    this.common.httpGet(GET_PRODUCTS_BY_ID+id).subscribe((data)=>{
      this.product = data.response;
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
}
