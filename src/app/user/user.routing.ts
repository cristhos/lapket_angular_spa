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
      {path: 'pass-resseting', component: RessetingPasswordFormComponent},
      {path: 'change-password', component: ChangePasswordFormComponent},
      {path: 'setting', component: ProfileFormComponent,canActivate: [CanActivateViaAuthGuard]},
      {path: 'suggestion', component: UserSuggestionComponent, canActivate: [CanActivateViaAuthGuard]},
];
