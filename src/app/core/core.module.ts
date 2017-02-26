import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { CORE_ROUTING } from './core.routing'
import {
  AboutComponent,
  ConditionComponent,
  PageNotFoundComponent,
} from './core.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CORE_ROUTING)
  ],
  declarations: [ 
    AboutComponent,
    ConditionComponent,
  ],
  exports: [ 
    AboutComponent,
    ConditionComponent,
  ],
    providers : [

  ],
})
export class CoreModule {}