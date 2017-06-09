import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ShareButtonsModule} from 'ng2-sharebuttons';

import {
  CoreDetailComponent,
  NavbarComponent,
  FooterComponent,
  SocialMediaComponent,
  PartainerComponent,
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
  CanActivateViaAuthGuard,
} from '../user/user.component';

import {
  CategoryService,
  CategoryListComponent,
  CategoryDescoveryComponent,
  CategorySuggestionComponent,
  CategoryMenuComponent,
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
  CityService,
  CityCommonComponent,
  CityHomeComponent
} from '../city/city.component';

import {
  metadataFactory
} from '../utils/metadata.factory';

import { ApiUrlService } from '../utils/api-url.service';
import { ImageResizerService } from '../utils/image-resizer.service';
import { requestOptionsProvider } from '../utils/default-request-options.service';

import { MomentModule } from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MaterializeModule } from "angular2-materialize";
import { FileUploadModule } from 'ng2-file-upload';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { MetadataModule, MetadataService, MetadataLoader } from 'ng2-metadata';
import {ImageCropperModule} from 'ng2-img-cropper';

@NgModule({
  imports:[ 
      CommonModule,
      FormsModule,
      MomentModule,
      InfiniteScrollModule,
      LazyLoadImageModule,
      RouterModule,
      FileUploadModule,
      MetadataModule,
      MaterializeModule,
      ImageCropperModule,
      ShareButtonsModule.forRoot(),
      MetadataModule.forRoot({
        provide: MetadataLoader,
        useFactory: (metadataFactory)
     })
      ],
  declarations: [ 
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    PartainerComponent,
    SocialMediaComponent,
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
    CategoryFollowComponent,
    CategoryCommonComponent,
    ProductCommonComponent,
    ProductListComponent,
    ProductLastComponent,
    ProductFormComponent,
    ProductNullCommonComponent,
    SearchFormComponent,
    BlockLeftComponent,
    BlockRightComponent,
    CityCommonComponent,
    CityHomeComponent,
  ],
  exports:      [ 
    CoreDetailComponent,
    NavbarComponent,
    FooterComponent,
    SocialMediaComponent,
    PartainerComponent,
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
    CategoryFollowComponent,
    CategoryCommonComponent,
    ProductCommonComponent,
    ProductListComponent,
    ProductLastComponent,
    ProductFormComponent,
    ProductNullCommonComponent,
    SearchFormComponent,
    BlockLeftComponent,
    BlockRightComponent,
    CityCommonComponent,
    CityHomeComponent,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    FileUploadModule,
    MaterializeModule,
    ImageCropperModule
  ],
  providers : [
    CityService,
    CountryService,
    ApiUrlService,
    ImageResizerService,
    CategoryService,
    UserService,
    ProductService,
    MetadataService,
    CanActivateViaAuthGuard,
    requestOptionsProvider
  ],
})
export class SharedModule { }
