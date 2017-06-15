import { Injectable }    from '@angular/core';
import {  Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class NotificationService {
  baseUrl: string = environment.LAPKET_API_URL;
  url: any;

  constructor(private http: Http) {
    this.baseUrl = this.baseUrl + '/api/notification';
  }

  getMyNotification(page){
    this.url = this.baseUrl + '/my/notifications.json?page='+page;
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }

  removeNotification(notification_id: number){
    this.url = this.baseUrl + '/notifications/'+ notification_id + '/remove.json';
    return this.http
               .get(this.url)
               .map(res => res.json())
    ;
  }
}
