import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];
  private pattern: string;
  private search: boolean;

  constructor(private service: ProductService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pattern = params['pattern']
      if (this.pattern) {
        this.search = true;
      }
      this.refreshProductList();
    });
  }

  refreshProductList(): void {
    if (this.search) {
      this.route.params
        .switchMap((params) => this.service.getProductsByName(this.pattern))
        .subscribe((products: Product[]) => {
          this.products = products;
        })
    } else {
      this.service.getProducts().subscribe(
        products => {
          this.products = products;
        }
      );
    }
  }
}
