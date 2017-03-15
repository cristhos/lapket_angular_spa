import { Injectable }    from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class ApiUrlService {
  
  private baseUrl;
  
  getBaseUrl(){
    if (environment.production) {
      this.baseUrl = "https://apis.lapket.com";
    } else {
      
      this.baseUrl = "http://localhost/masta/web/app_pre_prod.php";
      //this.baseUrl = "http://192.168.43.59/masta/web/app_pre_prod.php";
    }
    return this.baseUrl;
  }
}
