import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

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
    SharedModule
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
