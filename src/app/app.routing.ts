import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
  CoreDetailComponent,
  AboutComponent,
   ConditionComponent,
  NavbarComponent,
   FooterComponent,
   PageNotFoundComponent
 } from './core/core.component';

 import {
  SearchDetailComponent,
} from './search/search.component';
import {
  CategoryListComponent,
  CategoryDetailComponent
      } from './category/category.component';

import {
        DealConversationComponent,
        DealMessageComponent
      } from './deal/deal.component';

import { UserSuggestionComponent,
         UserProductComponent,
         UserProductVoteComponent,
         UserFollowerComponent,
         UserFollowingComponent,
         LoginFormComponent,
         RegisterFormComponent,
         RessetingPasswordFormComponent,
         ChangePasswordFormComponent,
         ProfileFormComponent,
         CanActivateViaAuthGuard
        } from './user/user.component';

import { NotificationListComponent } from './notification/notification.component';
import { ProductDetailComponent, ProductFormComponent } from './product/product.component';

const appRoutes : Routes = [
  {path: '', component: CoreDetailComponent},
  {path: 'core', redirectTo: '', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'condition', component: ConditionComponent},
  {path: 'search/:term', component: SearchDetailComponent},
  {
    path: 'suggestion', component: UserSuggestionComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'notification', component: NotificationListComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'user',
    children: [
      {path: ':username', component: UserProductComponent},
      {path: 'follows/:username', component: UserFollowingComponent},
      {path: 'followers/:username', component: UserFollowerComponent},
      {path: 'products/:username', component: UserProductComponent},
      {path: 'products/vote/:username', component: UserProductVoteComponent},
    ]
  },
  {path: 'product/:id', component: ProductDetailComponent},
  {
    path: 'deal',
    children : [
      {path: 'message/:conversation_id', component: DealMessageComponent},
      {path: 'conversation', component: DealConversationComponent},
    ],
    canActivate: [CanActivateViaAuthGuard]
  },


  {
    path: 'category',
    children : [
        {path: '', component: CategoryListComponent},
        {path: ':id', component: CategoryDetailComponent},
    ]
  },
  {
    path: 'add/product', component: ProductFormComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'edit/product/:id', component: ProductFormComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'pass-resseting', component: RessetingPasswordFormComponent},
  {path: 'change-password', component: ChangePasswordFormComponent},
  {
    path: 'setting', component: ProfileFormComponent,
    canActivate: [CanActivateViaAuthGuard]
  },

  {path: '**', component:PageNotFoundComponent},
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});
