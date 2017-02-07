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
  FooterComponent,
  LoadingComponent,
} from './core/core.component';



import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { DealModule } from './deal/deal.module';
import { NotificationModule } from './notification/notification.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations : [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    CategoryModule,
    ProductModule,
    UserModule,
    DealModule,
    NotificationModule,
    SearchModule,
    CoreModule
  ],
  providers : [
     Title,
  ],
  bootstrap :[AppComponent]
})
export class AppModule {}
