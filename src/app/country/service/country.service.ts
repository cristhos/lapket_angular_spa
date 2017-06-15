import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';

import '../../rxjs-operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class CountryService {
  baseUrl: string = environment.LAPKET_API_URL;
  url: any;

  constructor(private http: Http){
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
