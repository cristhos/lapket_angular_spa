import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { PRODUCT_ROUTING } from './product.routing'
import {
  ProductService,
  ProductDetailComponent,
} from './product.component';

import {
  CategoryService,
} from '../category/category.component';

import {
  DealService,
} from '../deal/deal.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PRODUCT_ROUTING)
  ],
  declarations: [
    ProductDetailComponent,          
  ],
  exports: [ 
    ProductDetailComponent,
    ],
  providers : [
    ProductService,
    CategoryService,
    DealService
  ],
})
export class ProductModule {}
