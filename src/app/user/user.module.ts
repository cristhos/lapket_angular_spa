import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router';

import { USER_ROUTING } from './user.routing'



import {
  UserBandComponent,
  UserProductComponent,
  UserProductVoteComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  RessetingPasswordFormComponent,
  ChangePasswordFormComponent,
  ProfileFormComponent,
  CanActivateViaAuthGuard,
} from './user.component';

import {
  SharedModule
} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(USER_ROUTING)
  ],
  declarations: [
    UserBandComponent,
  UserProductComponent,
  UserProductVoteComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  RessetingPasswordFormComponent,
  ChangePasswordFormComponent,
  ProfileFormComponent,        
  ],
  exports: [ 
    UserBandComponent,
    UserProductComponent,
    UserProductVoteComponent,
    UserFollowerComponent,
    UserFollowingComponent,
    RessetingPasswordFormComponent,
    ChangePasswordFormComponent,
    ProfileFormComponent,
    ],
  providers : [
    
  ],
})
export class UserModule {}
