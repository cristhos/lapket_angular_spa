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
  client_id :string;
  client_secret: string;

  constructor(private http: Http, private apiUrlService : ApiUrlService){
    this.baseUrl = this.apiUrlService.getBaseUrl();
    this.tokenUrl = this.baseUrl + "/api/oauth/v2/token"
    this.baseUrl = this.baseUrl + '/api/user';
    this.access_token = localStorage.getItem('access_token');
  }

  getClientId(){
    if (process.env.ENV === 'production') {
      this.client_id = "1_g1bs2j3lra0cs4goo4ss084wksskgk4gok8wsk48kkw48ksk4";
    } else {
      this.client_id = "1_3vze4od93m4g4k0coc48w4k0go4owcggs8kc4048w4sosoc4o4";
    }
    return this.client_id;
  }

  getClientSecret(){
     if (process.env.ENV === 'production') {
      this.client_secret = "47iyfy5o17gg0sso8og000wck4484swk8go0wos04ggc8s8ss0";
    } else {
      this.client_secret = "nvh0vprhc1wgssg08cks448w04g0o0owo8woc8ckw0ow048c4";
    }
    return this.client_secret;
  }

  login(user : any){
      this.tokenUrl = this.tokenUrl 
                      +"?client_id="+this.getClientId()
                      +"&client_secret="+this.getClientSecret()
                      +"&username="+user.username
                      +"&password="+user.password
                      +'&grant_type=password';

      return this.http
               .get(this.tokenUrl)
               .map(res => res.json());
  }

  facebookConnect(user:any){
      this.url = this.apiUrlService.getBaseUrl() + '/facebook/check-facebook.json';
      let body = JSON.stringify(user);
      return this.http
                 .post(this.url,body)
                 .map(res => res.json())
      ;
  }

  googleConnect(user:any){
      this.url = this.apiUrlService.getBaseUrl() + '/google/check-google.json';
      let body = JSON.stringify(user);
      return this.http
                 .post(this.url,body)
                 .map(res => res.json())
      ;
  }

  getRefreshToken(){
      this.tokenUrl = this.tokenUrl 
                      +"?client_id="+this.getClientId()
                      +"&client_secret="+this.getClientSecret()
                      +"&refresh_token="+localStorage.getItem('refresh_token')
                      +'&grant_type=refresh_token';

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

  getPasswordRequestReset(email){

    this.url = this.baseUrl + '/passwords/requests/reset.json?slug='+email;
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
