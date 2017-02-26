import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSuggestionComponent,
         LoginFormComponent,
         RegisterFormComponent,
         CanActivateViaAuthGuard
        } from './user/user.component';
import { PageNotFoundComponent } from './core/core.component';

const appRoutes : Routes = [
  {path: '', loadChildren: "./core/core.module#CoreModule"},
  {path: 'user', loadChildren: "./user/user.module#UserModule"},
  {path: 'product', loadChildren: "./product/product.module#ProductModule"},
  {path: 'deal', loadChildren: "./deal/deal.module#DealModule", canActivate: [CanActivateViaAuthGuard]},
  {path: 'category', loadChildren: "./category/category.module#CategoryModule"},
  {path: 'notification', loadChildren: "./notification/notification.module#NotificationModule", canActivate: [CanActivateViaAuthGuard]},
  {path: 'search', loadChildren: "./search/search.module#SearchModule"},
  {path: '**', component:PageNotFoundComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});
