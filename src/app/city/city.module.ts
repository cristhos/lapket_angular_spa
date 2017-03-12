import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { CITY_ROUTING } from './city.routing'

import {
  CityService,
  //CityDetailComponent,
} from './city.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CITY_ROUTING)
  ],
  declarations: [
    //CityDetailComponent,          
  ],
  exports: [ 
    //CityDetailComponent,
  ],
  providers : [
    CityService,
  ],
})
export class CityModule {}
