import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { any } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public httpGet(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public httpPost(url: any, reqData: any): Observable<any> {
    return this.http.post<any>(url, reqData);
  }
}
