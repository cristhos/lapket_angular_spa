import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { PARTENAIRE_ROUTING } from './partenair.routing'
import {
  PartenairDetailComponent,
  PartenairListComponent,
  PartenairItemComponent,
} from './partenair.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PARTENAIRE_ROUTING)
  ],
  declarations: [ 
    PartenairListComponent,
    PartenairDetailComponent,
    PartenairItemComponent, 
  ],
  exports: [ 
    PartenairListComponent,
    PartenairItemComponent,     
  ],
  providers : [
    //PartenairService,
  ],
})
export class PartenairModule {}
