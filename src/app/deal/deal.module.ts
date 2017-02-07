import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  DealFormComponent,
  DealService,
  DealCommonComponent,
  DealConversationCommonComponent,
  DealConversationComponent,
  DealMessageComponent
} from './deal.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
        DealFormComponent,
        DealCommonComponent,
        DealConversationCommonComponent,
        DealConversationComponent,
        DealMessageComponent   
  ],
  exports: [ 
        DealFormComponent,
        DealCommonComponent,
        DealConversationCommonComponent,
        DealConversationComponent,
        DealMessageComponent
    ],
  providers : [
    DealService,
  ],
})
export class DealModule {}
