import { Injectable }    from '@angular/core';

@Injectable()
export class ApiUrlService {
  
  private baseUrl;
  
  getBaseUrl(){
    if (process.env.ENV === 'production') {
      this.baseUrl = "http://138.68.52.163";
    } else {
      
      //this.baseUrl = "http://localhost/masta/web/app_pre_prod.php";
      this.baseUrl = "http://192.168.43.59/masta/web/app_pre_prod.php";
    }
    return this.baseUrl;
  }
}
