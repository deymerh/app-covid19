import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  public url: string = "https://api.covid19api.com/summary";
  public infoCovid: any = [];
  public infoCountries: any = [];
  constructor(private GetDataService: GetDataService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.GetDataService.getInfo(this.url).subscribe(res => {
      this.infoCovid = res;
      this.infoCountries = this.infoCovid.Countries;
      console.log(this.infoCovid)
      console.log(this.infoCountries)
    });
}
}
