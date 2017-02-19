import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  LoadingComponent,
} from '../core/core.component';

import {
  UserSuggestionComponent,
  UserSuggestionCommonComponent,
  UserMiniSuggestionComponent,
  RegisterFinalFormComponent,
} from '../user/user.component';

import {
  CategoryListComponent,
  CategoryDescoveryComponent,
  CategorySuggestionComponent,
  CategoryMenuComponent,
  CategoryHomeComponent,
  CategoryFollowComponent,
  CategoryCommonComponent,
} from '../category/category.component';

import {
  ProductCommonComponent,
  ProductListComponent,
  ProductLastComponent,
  ProductFormComponent,
  ProductNullCommonComponent,
} from '../product/product.component';

import {
  SearchFormComponent,
} from '../search/search.component';

import {
  CountryService
} from '../country/country.component';
import {
  CityService
} from '../city/city.component';

import { ApiUrlService } from '../utils/api-url.service';
import { ImageResizerService } from '../utils/image-resizer.service';
import { requestOptionsProvider } from '../utils/default-request-options.service';

import { MomentModule } from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MaterializeDirective } from "angular2-materialize";
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  imports:[ 
      CommonModule,
      FormsModule,
      MomentModule,
      InfiniteScrollModule,
      LazyLoadImageModule,
      RouterModule,
      ],
  declarations: [ 
    LoadingComponent,
    UserSuggestionComponent,
    UserSuggestionCommonComponent,
    UserMiniSuggestionComponent,
    CategoryListComponent,
    CategoryDescoveryComponent,
    CategorySuggestionComponent,
    CategoryMenuComponent,
    CategoryHomeComponent,
    CategoryFollowComponent,
    CategoryCommonComponent,
    ProductCommonComponent,
    ProductListComponent,
    ProductLastComponent,
    ProductFormComponent,
    ProductNullCommonComponent,
    SearchFormComponent,
    RegisterFinalFormComponent,
    MaterializeDirective,
    FileSelectDirective
  ],
  exports:      [ 
    LoadingComponent,
    UserSuggestionComponent,
    UserSuggestionCommonComponent,
    UserMiniSuggestionComponent,
    CategoryListComponent,
    CategoryDescoveryComponent,
    CategorySuggestionComponent,
    CategoryMenuComponent,
    CategoryHomeComponent,
    CategoryFollowComponent,
    CategoryCommonComponent,
    ProductCommonComponent,
    ProductListComponent,
    ProductLastComponent,
    ProductFormComponent,
    ProductNullCommonComponent,
    RegisterFinalFormComponent,
    SearchFormComponent,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    MaterializeDirective,
    FileSelectDirective
  ],
  providers : [
    CityService,
    CountryService,
    ApiUrlService,
    ImageResizerService,
    requestOptionsProvider,
  ],
})
export class SharedModule { }