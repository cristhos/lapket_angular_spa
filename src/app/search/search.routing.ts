import { Routes } from '@angular/router';

import { NotificationListComponent } from '../notification/notification.component';
import { SearchDetailComponent } from '../search/search.component';

export const SEARCH_ROUTING : Routes = [
      {path: ':term', component: SearchDetailComponent},
];
