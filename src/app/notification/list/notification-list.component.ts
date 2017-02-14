import { Component, OnInit} from '@angular/core';
import { List, Map } from 'immutable';

import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'notification-list',
  template: require('./notification-list.component.html'),
  styles: [`

  `]
})

export class NotificationListComponent implements OnInit {
  notifications : any = [] ;
  notification ;
  page :number;
  pages :number;
  constructor(private notificationService : NotificationService) {}

  ngOnInit(){
    this.page = 1;
    this.pages = 2;
    this.getMyNotifications();
  }

  getMyNotifications(){
    if(this.page <= this.pages ){
      this.notificationService.getMyNotification(this.page).subscribe(
          data => {
            this.pages = data.pages;
            for(let i=0; i<=data.limit; i++) {
              if(data._embedded.items[i]){
                this.notifications.push(data._embedded.items[i]);
                this.page = data.page + 1;
              }
            }
          },
          error => console.log(error),
          () => console.log("finish")
      );
    }

  }

  removeNotification(notification: any){
    this.notificationService.removeNotification(notification.id).subscribe(
        data =>{
            //enlever une notification 
        },
        error => console.log(error),
        () => console.log("finish")
    );
  }
  onScrollDown() {
      this.getMyNotifications();
  }
}
