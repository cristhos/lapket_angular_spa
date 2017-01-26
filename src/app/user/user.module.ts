import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  UserService,
  UserBandComponent,
  UserAlbumComponent,
  UserProductComponent,
  UserProductVoteComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  LoginFormComponent,
  RegisterFormComponent,
  RegisterFinalFormComponent,
  RegisterSocialComponent,
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
    SharedModule
  ],
  declarations: [
    UserBandComponent,
  UserAlbumComponent,
  UserProductComponent,
  UserProductVoteComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  LoginFormComponent,
  RegisterFormComponent,
  RegisterFinalFormComponent,
  RegisterSocialComponent,
  RessetingPasswordFormComponent,
  ChangePasswordFormComponent,
  ProfileFormComponent,        
  ],
  exports: [ 
    UserBandComponent,
    UserAlbumComponent,
    UserProductComponent,
    UserProductVoteComponent,
    UserFollowerComponent,
    UserFollowingComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterFinalFormComponent,
    RegisterSocialComponent,
    RessetingPasswordFormComponent,
    ChangePasswordFormComponent,
    ProfileFormComponent,
    ],
  providers : [
    UserService,
    CanActivateViaAuthGuard,
  ],
})
export class UserModule {}
