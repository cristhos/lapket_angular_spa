import {
  CategoryListComponent,
  CategoryDetailComponent
} from './category.component';

export const CATEGORY_ROUTING = [
    {path: '', component: CategoryListComponent},
    {path: ':id', component: CategoryDetailComponent},
];
