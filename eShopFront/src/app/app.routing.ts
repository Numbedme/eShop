import {Routes} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ProductCreatorComponent} from './product-creator/product-creator.component';

export const appRoutes: Routes = [
    {
        path:'',
        component: ProductListComponent
    },
    {
        path:'create',
        component: ProductCreatorComponent
    },
    {
        path: 'edit/:id',
        component: EditProductComponent
    }
];