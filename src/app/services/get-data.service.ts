import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public loading: boolean = false;
  constructor(public http: HttpClient) { }
  
  getInfo(url: string) {
    return this.http.get(url);
  }

}
