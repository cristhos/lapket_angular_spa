import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  AboutComponent,
  ConditionComponent,
  PageNotFoundComponent,
  CoreDetailComponent,
  NavbarComponent,
  FooterComponent,
} from './core.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
    AboutComponent,
    ConditionComponent,
    PageNotFoundComponent,
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
  ],
  exports: [ 
    AboutComponent,
    ConditionComponent,
    PageNotFoundComponent,
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}