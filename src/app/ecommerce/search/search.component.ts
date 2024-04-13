import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private router:Router){

  }

  search(value:any){
    var val = String(value).trim();
    this.router.navigate(['/search/'+val]);
  }
}
