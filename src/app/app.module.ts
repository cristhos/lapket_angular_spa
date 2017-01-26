import { NgModule }       from '@angular/core';
import { BrowserModule,Title }  from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import {
  AboutComponent,
  ConditionComponent,
  PageNotFoundComponent,
  CoreDetailComponent,
  NavbarComponent,
  SideNavComponent,
  FooterComponent,
  LoadingComponent,
} from './core/core.component';

import {
  SearchFormComponent,
  SearchListComponent,
  SearchCommonComponent,
  SearchDetailComponent
} from './search/search.component';

import {
  NotificationListComponent,
  NotificationService,
  NotificationCommonComponent,
} from './notification/notification.component';

import {
  DealFormComponent,
  DealService,
  DealCommonComponent,
  DealConversationCommonComponent,
  DealConversationComponent,
  DealMessageComponent
} from './deal/deal.component';

//code a reviser
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

import {
  CountryService
} from './country/country.component';
import {
  CityService
} from './city/city.component';

import { ApiUrlService } from './utils/api-url.service';
import { ImageResizerService } from './utils/image-resizer.service';
import { requestOptionsProvider } from './utils/default-request-options.service';

@NgModule({
  declarations : [
    AppComponent,
    AboutComponent,
    ConditionComponent,
    PageNotFoundComponent,
    CoreDetailComponent,
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    LoadingComponent,
    SearchFormComponent,
    SearchListComponent,
    SearchDetailComponent,
    SearchCommonComponent,
    NotificationListComponent,
    NotificationCommonComponent,
    DealFormComponent,
    DealCommonComponent,
    DealConversationCommonComponent,
    DealConversationComponent,
    DealMessageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    CategoryModule,
    AlbumModule,
    ProductModule,
    UserModule,
    
  ],
  providers : [
     Title,
    NotificationService,
    DealService,
    CityService,
    CountryService,
    ApiUrlService,
    ImageResizerService,
    requestOptionsProvider,
  ],
  bootstrap :[AppComponent]
})
export class AppModule {}
