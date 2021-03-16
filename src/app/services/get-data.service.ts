import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
private isDataLoadedBehaviorSubject = new BehaviorSubject<boolean>(false);
  isDataLoaded$ = this.isDataLoadedBehaviorSubject.asObservable();

  constructor(public http: HttpClient) { }

  getInfo(url: string) {
    return this.http.get(url);
  }

  setLoadedStatus(isLoaded: boolean) {
    this.isDataLoadedBehaviorSubject.next(isLoaded);
  }
}
