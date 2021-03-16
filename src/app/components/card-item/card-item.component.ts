import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  
  public infoCovid: any = [];
  public infoCountries: any = [];
  public isLoaded: boolean = false;
  constructor(private GetDataService: GetDataService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.isLoaded = false;
    this.GetDataService.getInfo(environment.url).subscribe(res => {
      this.GetDataService.setLoadedStatus(true);
      this.isLoaded = true;

      this.infoCovid = res;
      this.infoCountries = this.infoCovid.Countries;
    });
  }
}
