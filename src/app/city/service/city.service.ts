import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';

import '../../rxjs-operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class CityService {
  baseUrl: string = environment.LAPKET_API_URL;
  url: any;

  constructor(private http: Http){
    this.baseUrl = this.baseUrl + '/api/user';
  }

  getCities(limit){
    this.url = this.baseUrl + '/cities.json?limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getCitiesCountry(country_id){
    this.url = this.baseUrl + '/cities/'+country_id+'/country.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
}
