import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';

import '../../rxjs-operators';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class CityService {
  baseUrl: string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/user';
  }

  getCities(){
    this.url = this.baseUrl + '/cities.json';
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
