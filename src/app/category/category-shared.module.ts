import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import {
  CategoryService,
  CategoryListComponent,
  CategoryDescoveryComponent,
  CategorySuggestionComponent,
  CategoryMenuComponent,
  CategoryHomeComponent,
  CategoryFollowComponent,
  CategoryCommonComponent,
} from './category.component';

@NgModule({
  imports:[ 
      CommonModule,
  ],
  declarations: [ 
    CategoryListComponent,
    CategoryDescoveryComponent,
    CategorySuggestionComponent,
    CategoryMenuComponent,
    CategoryHomeComponent,
    CategoryFollowComponent,
    CategoryCommonComponent,
  ],
  exports:[ 
    CategoryListComponent,
    CategoryDescoveryComponent,
    CategorySuggestionComponent,
    CategoryMenuComponent,
    CategoryHomeComponent,
    CategoryFollowComponent,
    CategoryCommonComponent,
  ],
  providers : [
    CategoryService,
  ],
})
export class CategorySharedModule { }