import { Routes } from '@angular/router';

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
        } from './user.component';

export const USER_ROUTING = [
      {path: ':username', component: UserProductComponent},
      {path: 'follows/:username', component: UserFollowingComponent},
      {path: 'followers/:username', component: UserFollowerComponent},
      {path: 'products/:username', component: UserProductComponent},
      {path: 'products/vote/:username', component: UserProductVoteComponent},
      {path: 'p/pass-resseting', component: RessetingPasswordFormComponent},
      {path: 'c/change-password', component: ChangePasswordFormComponent},
      {path: 'c/change-password/:tokenConfirmation', component: ChangePasswordFormComponent},
      {path: 's/setting', component: ProfileFormComponent,canActivate: [CanActivateViaAuthGuard]},
      {path: 's/suggestion', component: UserSuggestionComponent, canActivate: [CanActivateViaAuthGuard]},
];
