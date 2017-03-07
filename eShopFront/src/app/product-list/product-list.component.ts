import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product';

import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
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

  deleteProduct(id: number): void {
    this.service.deleteProduct(id)
      .subscribe(
      res => this.refreshProductList()
      );
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

  editProduct(id: number): void {
    this.router.navigate(['/edit', id]);
  }

}
