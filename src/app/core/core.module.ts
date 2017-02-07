import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  AboutComponent,
  ConditionComponent,
  PageNotFoundComponent,
  CoreDetailComponent,
  NavbarComponent,
  FooterComponent,
  LoadingComponent,
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
    LoadingComponent,
  ],
  exports: [ 
    AboutComponent,
    ConditionComponent,
    PageNotFoundComponent,
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
  ],
})
export class CoreModule {}