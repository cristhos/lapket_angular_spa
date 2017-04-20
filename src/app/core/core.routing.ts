import {
   CoreDetailComponent,
   AboutComponent,
   ConditionComponent,
 } from './core.component';

 import {
  LoginFormComponent,
  RegisterFormComponent,
} from '../user/user.component';

export const CORE_ROUTING = [
  {
    path: '', component: CoreDetailComponent,
    data: {
      metadata: {
        title: 'Lapket',
        description: "Plateforme d'échange des produits high tech"
      }
    }
},
  {path: 'core', redirectTo: '', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'condition', component: ConditionComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
];