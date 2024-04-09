import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { GET_ALL_CATEGORY, GET_BY_CATEGORY } from '../../../auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  id: any;
  category: any;
  categoriesList: any;

  constructor(private common: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.getAllCategories();
  }

  getAllCategories() {
    this.common.httpGet(GET_ALL_CATEGORY).subscribe((data) => {
      this.categoriesList = data.response;
      this.getByCategory(this.id);
    });
  }

  getByCategory(id: any) {
    if (id !== undefined) {
      this.common.httpGet(GET_BY_CATEGORY + id).subscribe((data) => {
        this.category = data.response;
      });
    }
  }

}
