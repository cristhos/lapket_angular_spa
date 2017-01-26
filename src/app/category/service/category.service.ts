import { Injectable }    from '@angular/core';
import {  Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class CategoryService {
  baseUrl: string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/category';
  }

  getCategory(limit=8){
    this.url = this.baseUrl + '/categories.json?limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getCategoryFollow(limit=8){
    this.url = this.baseUrl + '/my/follow/categories.json?limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getCategoryDetail(id: any){
    this.url = this.baseUrl + '/categories/' + id +'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  postCategoryFollow(category_id: any){
    this.baseUrl = this.apiUrlService.getBaseUrl()+'/api/category_follow/categories/';
    this.url = this.baseUrl+category_id+'/followers.json';
    let body = JSON.stringify({category_id});
    return this.http
               .post(this.url,body)
               .map(res => res.json());
  }

  deleteCategoryFollow(category_id: any){
    this.baseUrl = this.apiUrlService.getBaseUrl() +'/api/category_follow/categories/';
    this.url = this.baseUrl+category_id+'/follower/remove.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }
}
