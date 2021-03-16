import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-test';
  spinner: boolean = true;
  constructor( private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.isDataLoaded$.subscribe(isLoaded => {
      this.spinner = !isLoaded;
    });
  }

}
