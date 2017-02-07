import { Injectable }    from '@angular/core';

@Injectable()
export class ApiUrlService {
  private baseUrl = "http://localhost/masta/web/app_pre_prod.php";
  //private baseUrl = "http://192.168.173.78/masta/web/app_pre_prod.php";

  getBaseUrl(){
    return this.baseUrl;
  }
}
