import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { SEARCH_ROUTING } from './search.routing'

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
    SharedModule,
    RouterModule.forChild(SEARCH_ROUTING)
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
