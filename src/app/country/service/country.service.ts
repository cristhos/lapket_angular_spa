import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';

import '../../rxjs-operators';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class CountryService {
  baseUrl: string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/user';
  }

  getCountries(){
    this.url = this.baseUrl + '/countries.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
}
