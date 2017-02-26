import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { NOTIFICATION_ROUTING } from './notification.routing'
import {
  NotificationListComponent,
  NotificationService,
  NotificationCommonComponent,
} from './notification.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(NOTIFICATION_ROUTING)
  ],
  declarations: [ 
    NotificationListComponent,
    NotificationCommonComponent, 
  ],
  exports: [ 
    NotificationListComponent,
    NotificationCommonComponent,     
  ],
  providers : [
    NotificationService,
  ],
})
export class NotificationModule {}
