import { Component } from '@angular/core';
import { CityService } from '../service/city.service';

@Component({
  selector: 'home-city',
  templateUrl: './city-home.component.html',
  styles: [`
  `],
})

export class CityHomeComponent {
  cities : Object;
  cities_loading : boolean;
  constructor(private cityService : CityService) {
    this.getCities();
  }

  getCities(): void {
    this.cities_loading = true;
    let page = 1;
    let limit = 8;
    this.cityService.getCities(limit).subscribe(
        data =>{
          this.cities = data._embedded.items;
          this.cities_loading = false;
        },
        error =>{
          console.log(error);
          this.cities_loading = false;
        },
        () =>{
          console.log("finish");
          this.cities_loading = false;
        } 
    );
  }
}
