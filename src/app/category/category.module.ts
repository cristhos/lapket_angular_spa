import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { CATEGORY_ROUTING } from './category.routing'

import {
  CategoryService,
  CategoryDetailComponent,
} from './category.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CATEGORY_ROUTING)
  ],
  declarations: [
    CategoryDetailComponent,          
  ],
  exports: [ 
    CategoryDetailComponent,
    ],
  providers : [
    CategoryService,
  ],
})
export class CategoryModule {}
