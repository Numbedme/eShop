import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

import {ActivatedRoute, Router} from '@angular/router';

import {ProductService} from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Product[];

  private pattern: string;
  private _currentPage: number;
  private _pageSize: number = 10;
  private amountOfPages: number;


  constructor(private service: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

      this.route.queryParams.subscribe(params => {
        this._currentPage = +params['page'] || 1;
        this.pattern = params['search'] || "";
        this.refreshProductList();
      })
  }

  refreshProductList(): void {
    this.service.getProducts(this.pattern, this._currentPage, this._pageSize, "").subscribe(
      productDTO => {
        this.products = productDTO.products;
        this.amountOfPages = productDTO.pages;
      }
    );
  }

  previousPage(): number {
    if (this._currentPage>1){
      this._currentPage--;
    }
    return this._currentPage;
  }

  nextPage():number{
    if (this._currentPage<this.amountOfPages){
      this._currentPage++;
    }
    return this._currentPage;
  }

  isFirstPage():boolean{
    return (this._currentPage === 1);
  }

  isLastPage():boolean{
    return (this._currentPage === this.amountOfPages);
  }
}
