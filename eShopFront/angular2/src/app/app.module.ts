import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';

import {appRoutes} from './app.routing';
import { ProductCreatorComponent } from './product-creator/product-creator.component';

import {ProductService} from './product.service';
import {UtilService} from './util.service';
import {CustomerService} from './customer.service';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ImageComponent } from './image/image.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./auth.service";
import {LoggedInGuardService} from "./logged-in-guard.service";
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductListComponent,
    ProductCreatorComponent,
    ProductComponent,
    EditProductComponent,
    ImageComponent,
    CustomerRegistrationComponent,
    LoginComponent,
    AboutComponent,
    AccountComponent,
    ProductDetailsComponent,
    CustomerInfoComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,
    CustomerService,
    UtilService,
    AuthService,
    LoggedInGuardService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
