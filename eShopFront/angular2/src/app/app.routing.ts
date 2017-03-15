import {Routes} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ProductCreatorComponent} from './product-creator/product-creator.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {LoggedInGuardService} from "./logged-in-guard.service";
export const appRoutes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:"home",
        component: ProductListComponent
    },
    {
        path:'create',
        component: ProductCreatorComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path: 'edit/:id',
        component: EditProductComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path:'search/:pattern',
        component: ProductListComponent
    },
    {
        path: 'register',
        component: CustomerRegistrationComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
];
