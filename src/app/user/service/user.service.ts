import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';

import '../../rxjs-operators';

import { ApiUrlService } from '../../utils/api-url.service';

@Injectable()
export class UserService {
  baseUrl: string;
  tokenUrl : string;
  url: any;
  access_token: string ;
  //authentification_pro
  isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.tokenUrl = this.baseUrl + "/api/oauth/v2/token"
    this.baseUrl = this.baseUrl + '/api/user';
    this.access_token = localStorage.getItem('access_token');
  }

  login( user : any){
      let client_id = "2_18b2u4vyyf9c4kssgs8wgw80ssk4w4wsw8wg4gk0k8gock4w4o";
      let client_secret = "715mhjygo7ockok0ksgwsggg0s4ogkko4w0cgkc0o484g0o44";
      this.tokenUrl = this.tokenUrl 
                      +"?client_id="+client_id
                      +"&client_secret="+client_secret
                      +"&username="+user.username
                      +"&password="+user.password
                      +'&grant_type=password';

      return this.http
               .get(this.tokenUrl)
               .map(res => res.json());
  }

  register( user : any){
      this.url = this.baseUrl +'/users.json';
      let body = JSON.stringify(user);
      return this.http
                 .post(this.url,body)
                 .map(res => res.json())
      ;
  }

  putUser(user:any){
    this.url = this.baseUrl + '/user.json';
    let body = JSON.stringify(user);

    return this.http
               .put(this.url,body)
               .map(res => res.json());
  }


  putPassword(model:any){
    this.url = this.baseUrl + '/password?';
    let body = JSON.stringify(model);

    return this.http
               .put(this.url,body)
               .map(res => res.json());
  }

  getUserSession(){
    this.url = this.baseUrl + '/user/status.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getUserMiniSugestion(page: number){
    let limit = 3;
    this.url = this.baseUrl + '/user/sugestions.json?page='+page+'&limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  getUserSugestion(page: number){
    let limit = 8;
    this.url = this.baseUrl + '/user/sugestions.json?page='+page+'&limit='+limit;
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getUser(username: string){

    this.url = this.baseUrl + '/users/'+username+'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  getFollowerAuthor(username: string){

    this.url = this.baseUrl + '/followers/'+username+'.json';

    return this.http
               .get(this.url)
               .map(res => res.json());
  }
  getFollowingAuthor(username: string){

    this.url = this.baseUrl + '/followings/'+username+'.json';
    return this.http
               .get(this.url)
               .map(res => res.json());
  }

  postFollow(user_id: number){

     this.url = this.baseUrl + '/followers/'+user_id+'.json';
     let body = JSON.stringify({user_id});
     return this.http
               .post(this.url,body)
               .map(res => res.json());
  }

  removeFollow(user_id: number){
    this.url = this.baseUrl + '/followers/'+user_id+'/remove.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
    localStorage.setItem("authent" , "N");

  }
}
