import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

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
    SharedModule
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
