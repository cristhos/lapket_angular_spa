import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  SearchListComponent,
  SearchCommonComponent,
  SearchDetailComponent
} from './search.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
    SearchListComponent,
    SearchCommonComponent,
    SearchDetailComponent
  ],
  exports: [ 
    SearchListComponent,
    SearchCommonComponent,
    SearchDetailComponent
  ],
})
export class SearchModule {}
