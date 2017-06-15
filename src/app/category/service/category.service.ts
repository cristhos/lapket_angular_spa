import { Injectable,OnInit }    from '@angular/core';
import {  Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class CategoryService implements OnInit{
 baseUrl: string;
  autherBaseUrl:string;
  url: any;

  constructor(private http: Http){
    this.baseUrl = environment.LAPKET_API_URL+'/api/category';
    this.autherBaseUrl = environment.LAPKET_API_URL+'/api/category_follow';
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
