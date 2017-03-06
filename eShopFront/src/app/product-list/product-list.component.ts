import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product';

import {Router, ActivatedRoute} from '@angular/router';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService, private router:Router) {
    
  }

  ngOnInit() {
    this.refreshProductList();
  }

  deleteProduct(id: number): void {
    this.service.deleteProduct(id)
      .subscribe(
        res => this.refreshProductList()
      );
  }

  refreshProductList():void {
    this.service.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(products);
      }
    );
  }

  editProduct(id:number):void {
    this.router.navigate(['/edit', id]);
  }

}
