import {Routes} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ProductCreatorComponent} from './product-creator/product-creator.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
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
        component: ProductCreatorComponent
    },
    {
        path: 'edit/:id',
        component: EditProductComponent
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