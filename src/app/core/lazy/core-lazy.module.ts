import { NgModule } from '@angular/core';

import {
  AboutComponent,
  ConditionComponent,
  CoreDetailComponent,
  NavbarComponent,
  FooterComponent,
  LoadingComponent
} from '../core.component';

import { routing } from './core-lazy.routing';

@NgModule({
  imports: [routing],
  declarations: [
    AboutComponent,
    /*ConditionComponent,
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent*/
  ]
})
export class CoreLazyModule {}
