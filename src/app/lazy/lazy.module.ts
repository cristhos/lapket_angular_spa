import { NgModule } from '@angular/core';

import { UserSuggestionComponent,
         UserProductComponent,
         UserProductVoteComponent,
         UserFollowerComponent,
         UserFollowingComponent,
         UserAlbumComponent,
         LoginFormComponent,
         RegisterFormComponent,
         RessetingPasswordFormComponent,
         ChangePasswordFormComponent,
         ProfileFormComponent
       } from '../user/user.component';

@NgModule({
  imports: [routing],
  declarations: [LazyComponent]
})
export class LazyModule {}
