import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';


import { DEAL_ROUTING } from './deal.routing';
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
    SharedModule,
    RouterModule.forChild(DEAL_ROUTING)
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
