import { ProductDetailComponent, ProductFormComponent } from './product.component';
import { CanActivateViaAuthGuard } from '../user/user.component'

export const PRODUCT_ROUTING = [
    {path: ':id', component: ProductDetailComponent},
    {path: 'add', component: ProductFormComponent, canActivate: [CanActivateViaAuthGuard]},
    {path: 'edit/:id', component: ProductFormComponent, canActivate: [CanActivateViaAuthGuard]},
];