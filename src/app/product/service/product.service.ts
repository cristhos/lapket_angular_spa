import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import	{	Observable	}	from	'rxjs/Rx';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class ProductService {
  baseUrl: string;
  url: any;

  constructor(private http: Http, private apiUrlService : ApiUrlService) {
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/product';
   }

  getProductLast(page: number,limit:number){
    this.url = this.baseUrl +'/last/products.json?page='+page+'&limit='+limit;   
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getProductFil(page: number){
    this.url = this.baseUrl +'/fil/products.json?page='+page;   
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getProductDetail(id: any){
    this.url = this.baseUrl +'/products/'+id+'.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getProductAlbum(album_id: any){
    this.url = this.baseUrl +'/products/'+album_id+'/album.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getProductsCategory(category_id: any){
    this.url = this.baseUrl +'/products/'+category_id+'/category.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getShortProductsAlbum(album_id: any){
    this.url = this.baseUrl +'/shorts/'+album_id+'/products/album.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getProductAuthor(slug: any, page: any){
    this.url = this.baseUrl +'/products/'+slug+'/author.json?page='+page;
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getProductVoteBy(slug: any){
    this.url = this.baseUrl +'/products/'+slug+'/vote/by.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  postProduct(product){
    this.url = this.baseUrl + '/products.json';
    let body = JSON.stringify(product);
    return this.http.post(this.url, body)
                   .map(res => res.json());
  }

   putProduct(product,product_id){
    this.url = this.baseUrl + '/products/'+product_id+'.json';
    let body = JSON.stringify(product);
    return this.http.put(this.url, body)
                   .map(res => res.json());
  }

  expiredProduct(product_id: number){    
     this.url = this.baseUrl +'/products/'+product_id+'/expired.json';
     let body = JSON.stringify({product_id});
     return this.http
               .put(this.url,body)
               .map(res => res.json());
  }

  removeProduct(product_id: number){    
     this.url = this.baseUrl +'/products/'+product_id+'/remove.json';
     return this.http
                .get(this.url)
                .map(res => res.json());
  }

  postProductVote(product_id: any){
    this.url = this.baseUrl +'/products/votes.json';
    let body = JSON.stringify({product_id});
    return this.http
               .post(this.url,body)
               .map(res => res.json());
  }
  deleteProductVote(product_id: any){
    this.url = this.baseUrl +'/votes/'+product_id+'/remove.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }


  desactiveNotification(product_id: number){
      this.url = this.baseUrl + '/votes/'+ product_id + '/desactive/notify.json';
      let body = JSON.stringify({product_id});
      return this.http
                 .put(this.url,body)
                 .map(res => res.json());
  }

  activeNotification(product_id: number){
      this.url = this.baseUrl + '/votes/'+ product_id + '/active/notify.json';
      let body = JSON.stringify({product_id});
      return this.http
                 .put(this.url,body)
                 .map(res => res.json());
  }

  search(term: string,page){
    this.url = this.baseUrl + '/products/term.json?term='+term+'&page='+page;
  	return	this.http
                .get(this.url)
  					    .map(res	=>res.json());
  }

}
