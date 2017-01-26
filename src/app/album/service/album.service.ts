import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiUrlService } from '../../utils/api-url.service';
@Injectable()
export class AlbumService {
  baseUrl: string;
  url: any;
  constructor(private http: Http, private apiUrlService : ApiUrlService)
  {
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.baseUrl = this.baseUrl + '/api/album';
  }
  getAlbumMiniSugestion(){
    this.url = this.baseUrl + '/album/mini/sugestions.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getAlbumSugestion(){
     this.url = this.baseUrl + '/album/sugestions.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }
  getAlbumDetail(id: any){
    this.url = this.baseUrl + '/albums/'+ id +'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getShortAlbumsCategory(category_id: any){
    this.url = this.baseUrl + '/shorts/'+ category_id +'/albums/category.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getAlbumCategory(category_id: any){
    this.url = this.baseUrl + '/albums/'+ category_id +'/category.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getAlbumByAuthor(slug: any){
    this.url = this.baseUrl + '/albums/'+ slug +'/author.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  getMyAlbums(){
    this.url = this.baseUrl + '/my/albums.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
  postAlbum(album : any){
    this.url = this.baseUrl + '/albums.json';
    let body = JSON.stringify(album);
    return this.http.post(this.url, body)
                    .map(res => res.json());
  }

  putAlbum(album: Object,album_id: any){
    this.url = this.baseUrl + '/albums/'+album_id+'/.json';
    let body = JSON.stringify({ album });
    return this.http.put(this.url, body)
                   .map(res => res.json());
  }

  removeAlbum(album_id: any){
    return this.http
               .get(``)
               .map(res => res.json())
    ;
  }
}
