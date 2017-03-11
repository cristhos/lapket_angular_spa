import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ShareButtonsModule} from 'ng2-sharebuttons';

import {
  CoreDetailComponent,
  NavbarComponent,
  FooterComponent,
  LoadingComponent,
  PageNotFoundComponent,
  BlockLeftComponent,
  BlockRightComponent
} from '../core/core.component';

import {
  UserService,
  LoginFormComponent,
  RegisterFormComponent,
  RegisterSocialComponent,
  UserSuggestionComponent,
  UserSuggestionCommonComponent,
  UserMiniSuggestionComponent,
  RegisterFinalFormComponent,
  CanActivateViaAuthGuard,
} from '../user/user.component';

import {
  CategoryService,
  CategoryListComponent,
  CategoryDescoveryComponent,
  CategorySuggestionComponent,
  CategoryMenuComponent,
  CategoryHomeComponent,
  CategoryFollowComponent,
  CategoryCommonComponent,
} from '../category/category.component';

import {
  ProductService,
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

import {
  DealService
} from '../deal/deal.component';

import { ApiUrlService } from '../utils/api-url.service';
import { ImageResizerService } from '../utils/image-resizer.service';
import { requestOptionsProvider } from '../utils/default-request-options.service';

import { MomentModule } from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MaterializeModule } from "angular2-materialize";
import { FileUploadModule } from 'ng2-file-upload';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

@NgModule({
  imports:[ 
      CommonModule,
      FormsModule,
      MomentModule,
      InfiniteScrollModule,
      LazyLoadImageModule,
      RouterModule,
      MaterializeModule,
      FileUploadModule,
      ShareButtonsModule.forRoot()
      ],
  declarations: [ 
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterSocialComponent,
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
    BlockLeftComponent,
    BlockRightComponent
  ],
  exports:      [ 
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterSocialComponent,
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
    BlockLeftComponent,
    BlockRightComponent,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    MaterializeModule,
    FileUploadModule
  ],
  providers : [
    CityService,
    CountryService,
    ApiUrlService,
    ImageResizerService,
    CategoryService,
    DealService,
    UserService,
    ProductService,
    CanActivateViaAuthGuard,
    requestOptionsProvider,
  ],
})
export class SharedModule { }