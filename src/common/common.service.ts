import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public httpGet(url: any): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(url);
  }

  public httpPost(url: any, reqData: any): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(url, reqData);
  }
}
