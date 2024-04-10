import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './ecommerce/product-list/product-list.component';
import { ProductDetailsComponent } from './ecommerce/product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:"product",pathMatch:"full"},
  {path:"product",component:ProductListComponent},
  {path:"category/:id",component:ProductListComponent},
  {path:"search/:keyword",component:ProductListComponent},
  {path:"productDetails/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
