import { Injectable,OnInit }    from '@angular/core';
import {  Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class CategoryService implements OnInit{
  baseUrl: string;
  autherBaseUrl:string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl()+'/api/category';
    this.autherBaseUrl = this.apiUrlService.getBaseUrl()+'/api/category_follow';
  }

  ngOnInit(){
    
  }

  getCategory(limit=20){
    this.url = this.baseUrl + '/categories.json?limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getCategoryFollow(limit=20){
    this.url = this.baseUrl + '/my/follow/categories.json?limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getCategoryDetail(id: any){
    this.url = this.baseUrl + '/categories/'+ id +'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  postCategoryFollow(category_id: any){
    this.url = this.autherBaseUrl+'/categories/'+category_id+'/followers.json';
    let body = JSON.stringify({category_id});
    return this.http
               .post(this.url,body)
               .map(res => res.json());
  }

  deleteCategoryFollow(category_id: any){
    this.url = this.autherBaseUrl+'/categories/'+category_id+'/follower/remove.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }
}
