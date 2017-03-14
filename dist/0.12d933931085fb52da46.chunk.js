webpackJsonp([0],{1270:function(t,i,o){"use strict";var n=this&&this.__decorate||function(t,i,o,n){var e,a=arguments.length,c=a<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,i,o,n);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(c=(a<3?e(c):a>3?e(i,o,c):e(i,o))||c);return a>3&&c&&Object.defineProperty(i,o,c),c},e=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},a=o(0),c=o(43),r=o(12),s=o(1281),f=o(1274),l=o(614),p=function(){function NotificationModule(){}return NotificationModule=n([a.NgModule({imports:[c.CommonModule,l.SharedModule,r.RouterModule.forChild(s.NOTIFICATION_ROUTING)],declarations:[f.NotificationListComponent,f.NotificationCommonComponent],exports:[f.NotificationListComponent,f.NotificationCommonComponent],providers:[f.NotificationService]}),e("design:paramtypes",[])],NotificationModule)}();i.NotificationModule=p},1274:function(t,i,o){"use strict";var n=o(1275);i.NotificationService=n.NotificationService;var e=o(1280);i.NotificationListComponent=e.NotificationListComponent;var a=o(1279);i.NotificationCommonComponent=a.NotificationCommonComponent},1275:function(t,i,o){"use strict";var n=this&&this.__decorate||function(t,i,o,n){var e,a=arguments.length,c=a<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,i,o,n);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(c=(a<3?e(c):a>3?e(i,o,c):e(i,o))||c);return a>3&&c&&Object.defineProperty(i,o,c),c},e=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},a=o(0),c=o(34);o(117);var r=o(59),s=function(){function NotificationService(t,i){this.http=t,this.apiUrlService=i,this.baseUrl=this.apiUrlService.getBaseUrl(),this.baseUrl=this.baseUrl+"/api/notification"}return NotificationService.prototype.getMyNotification=function(t){return this.url=this.baseUrl+"/my/notifications.json?page="+t,this.http.get(this.url).map(function(t){return t.json()})},NotificationService.prototype.removeNotification=function(t){return this.url=this.baseUrl+"/notifications/"+t+"/remove.json",this.http.get(this.url).map(function(t){return t.json()})},NotificationService=n([a.Injectable(),e("design:paramtypes",[c.Http,r.ApiUrlService])],NotificationService)}();i.NotificationService=s},1279:function(t,i,o){"use strict";var n=this&&this.__decorate||function(t,i,o,n){var e,a=arguments.length,c=a<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,i,o,n);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(c=(a<3?e(c):a>3?e(i,o,c):e(i,o))||c);return a>3&&c&&Object.defineProperty(i,o,c),c},e=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},a=o(0),c=function(){function NotificationCommonComponent(){}return n([a.Input(),e("design:type",Object)],NotificationCommonComponent.prototype,"notification",void 0),NotificationCommonComponent=n([a.Component({selector:"notification-common",template:o(1285),styles:["\n\n  "],changeDetection:a.ChangeDetectionStrategy.OnPush}),e("design:paramtypes",[])],NotificationCommonComponent)}();i.NotificationCommonComponent=c},1280:function(t,i,o){"use strict";var n=this&&this.__decorate||function(t,i,o,n){var e,a=arguments.length,c=a<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,i,o,n);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(c=(a<3?e(c):a>3?e(i,o,c):e(i,o))||c);return a>3&&c&&Object.defineProperty(i,o,c),c},e=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},a=o(0),c=o(1275),r=function(){function NotificationListComponent(t){this.notificationService=t,this.notifications=[]}return NotificationListComponent.prototype.ngOnInit=function(){this.page=1,this.pages=2,this.getMyNotifications()},NotificationListComponent.prototype.getMyNotifications=function(){var t=this;this.page<=this.pages&&(this.notifications_loading=!0,this.notificationService.getMyNotification(this.page).subscribe(function(i){t.pages=i.pages;for(var o=0;o<=i.limit;o++)i._embedded.items[o]&&(t.notifications.push(i._embedded.items[o]),t.page=i.page+1);t.notifications_loading=!1},function(i){console.log(i),t.notifications_loading=!1},function(){console.log("finish"),t.notifications_loading=!1}))},NotificationListComponent.prototype.removeNotification=function(t){var i=this;this.notificationService.removeNotification(t.id).subscribe(function(o){for(var n=0;n<=i.notifications.length;n++)if(i.notifications[n].id==t.id){i.notifications.splice(n,1);break}},function(t){return console.log(t)},function(){return console.log("finish")})},NotificationListComponent.prototype.onScrollDown=function(){this.getMyNotifications()},NotificationListComponent=n([a.Component({selector:"notification-list",template:o(1286),styles:["\n\n  "]}),e("design:paramtypes",[c.NotificationService])],NotificationListComponent)}();i.NotificationListComponent=r},1281:function(t,i,o){"use strict";var n=o(1274);i.NOTIFICATION_ROUTING=[{path:"",component:n.NotificationListComponent}]},1285:function(t,i){t.exports='<div class="card" *ngIf="notification != null">\n    <a [routerLink]="[\'/user\',notification.author.username ]" [title]="notification.author.full_name">\n      <i *ngIf="notification.author.profile_picture == null" class="fa fa-user fa-4x avatar-profile-pict  avatar"></i>\n      <img class="avatar-profile-pict  avatar" *ngIf="notification.author.profile_picture != null" src="{{notification.author.profile_picture.web_path}}" alt="{{notification.author.profile_picture.alt}}"/>\n       <strong class="title">{{ notification.author.full_name }}</strong><em> @{{ notification.author.username }}</em>\n    </a>\n    <span *ngIf="notification.destinator.is_author == false">\n        <span *ngIf="notification.type == \'ProductVote\'"> <span class="text"> aime une publication dans laquelle vous apparaissez</span></span>\n        <span *ngIf="notification.type == \'Follower\'"> <span class="text">commence à suivre vos publications </span></span>\n        <br><br><small> {{notification.published_at | amTimeAgo}}</small>\n    </span>\n    <span *ngIf="notification.destinator.is_author == true">\n        <span *ngIf="notification.type == \'ProductVote\'"> <span class="text"> aime votre publication </span></span>\n        <br><br><small> {{notification.published_at | amTimeAgo}}</small>\n    </span>\n    \n</div>'},1286:function(t,i){t.exports='<div class="container row" >\n  <div class="col s12 m3 right">\n      <user-mini-sugestion></user-mini-sugestion>\n  </div>\n  <div class="col s12 m6 offset-m3">\n    <ul *ngIf ="notifications != null" class="collection with-header"\n                infinite-scroll [infiniteScrollDistance]="2"\n                [infiniteScrollUpDistance]="1.5"\n                [infiniteScrollThrottle]="3000"\n                (scrolled)="onScrollDown()">\n                <li class="collection-header">\n                    NOTIFICATIONS \n                </li>\n                <li  *ngFor = "let notification of notifications"  >\n                    <a class="right" (click)="removeNotification(notification)">\n                        <i class="fa fa-close"></i>\n                    </a>\n                    <a class="collection-item" [routerLink]="[\'/product\',notification.object_id ]" >\n                        <notification-common [notification]="notification" ></notification-common>\n                    </a>\n                </li>\n            <p *ngIf="page <= pages" class="center">\n                <button (click)="onScrollDown()" class="btn-flat">Suivant</button>\n            </p>   \n    </ul>\n    <div *ngIf="notifications_loading == true">\n        <loading></loading>\n    </div>\n  </div>\n</div>\n'}});