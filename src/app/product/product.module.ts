import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  ProductService,
  ProductDetailComponent,
} from './product.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,          
  ],
  exports: [ 
    ProductDetailComponent,
    ],
  providers : [
    ProductService,
  ],
})
export class ProductModule {}
