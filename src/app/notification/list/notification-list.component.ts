import { Component, OnInit} from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styles: [`

  `]
})

export class NotificationListComponent implements OnInit {
  notifications : any = [] ;
  notification ;
  page :number;
  pages :number;
  notifications_loading : boolean;

  constructor(private notificationService : NotificationService) {}

  ngOnInit(){
    this.page = 1;
    this.pages = 2;
    this.getMyNotifications();
  }

  getMyNotifications(){
    
    if(this.page <= this.pages ){
      this.notifications_loading = true;
      this.notificationService.getMyNotification(this.page).subscribe(
          data => {
            this.pages = data.pages;
            for(let i=0; i<=data.limit; i++) {
              if(data._embedded.items[i]){
                this.notifications.push(data._embedded.items[i]);
                this.page = data.page + 1;
              }
            }
            this.notifications_loading = false;
          },
          error =>{
            console.log(error);
            this.notifications_loading = false;
          } ,
          () =>{
            console.log("finish");
            this.notifications_loading = false;
          } 
      );
    }

  }

  removeNotification(notification: any){
    this.notificationService.removeNotification(notification.id).subscribe(
        data =>{
            for(let i=0; i<=this.notifications.length; i++){
              if(this.notifications[i].id == notification.id){
                  this.notifications.splice(i,1);
                  break;
              }
            }
        },
        error => console.log(error),
        () => console.log("finish")
    );
  }
  
  onScrollDown() {
      this.getMyNotifications();
  }
}
