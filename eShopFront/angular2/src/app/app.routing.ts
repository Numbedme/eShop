import {Routes} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {LoggedInGuardService} from "./logged-in-guard.service";
import {AboutComponent} from "./about/about.component";
import {AccountComponent} from "./account/account.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AuthenticatedGuardService} from "./authenticated-guard.service";
export const appRoutes:Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',

    },
    {
      path: "home",
      component: ProductListComponent,
    },
    {
      path: 'create',
      component: EditProductComponent,
      canActivate: [LoggedInGuardService]
    },
    {
      path: 'edit/:id',
      component: EditProductComponent,
      canActivate: [LoggedInGuardService]
    },
    {
      path: 'search/:pattern',
      component: ProductListComponent,
    },
    {
      path: 'register',
      component: CustomerRegistrationComponent,
      canActivate: [AuthenticatedGuardService]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthenticatedGuardService]
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path:'account',
      component: AccountComponent,
      canActivate: [LoggedInGuardService]
    },
    {
      path:'details/:id',
      component:ProductDetailsComponent,
    }
  ]
  ;
