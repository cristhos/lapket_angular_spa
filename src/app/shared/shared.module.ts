import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  UserSuggestionComponent,
  UserSuggestionCommonComponent,
  UserMiniSuggestionComponent,
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
  ProductFormCommonComponent,
} from '../product/product.component';

import {
        AlbumFormComponent,
        AlbumCommonComponent,
} from '../album/album.component';

import {MomentModule} from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {MaterializeDirective} from "angular2-materialize";

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { Ng2PopupModule } from 'ng2-popup';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  imports:[ 
      CommonModule,
      FormsModule,
      MomentModule,
      InfiniteScrollModule,
      LazyLoadImageModule,
      RouterModule,
      Ng2PopupModule,
      Ng2AutoCompleteModule
      ],
  declarations: [ 
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
    ProductFormCommonComponent,
    AlbumFormComponent,
    AlbumCommonComponent,
    MaterializeDirective,
    FileSelectDirective
  ],
  exports:      [ 
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
    ProductFormCommonComponent,
    AlbumFormComponent,
    AlbumCommonComponent,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    RouterModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    MaterializeDirective,
    FileSelectDirective,
    Ng2PopupModule
   ]
})
export class SharedModule { }