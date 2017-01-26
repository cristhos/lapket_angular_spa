import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
   CoreDetailComponent,
   AboutComponent,
   ConditionComponent,
   NavbarComponent,
   FooterComponent
 } from '../core.component';

const routes: Routes = [
  {path: '', component: CoreDetailComponent},
  /*{path: 'core', redirectTo: '', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'condition', component: ConditionComponent},*/
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
