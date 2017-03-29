import { Injectable } from '@angular/core';
import {Product} from './product'
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {UtilService} from './util.service';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  private url: string;

  constructor(private http:Http,
              private util:UtilService) {
                this.url = util.url + '/products';
               }

  getProducts(pattern:string, page:number, amount:number):Observable<any>{
    let url:string = this.url + '?name=' + pattern + '&page=' + page + '&amount=' + amount;
    return this.http.get(url).map(res => res.json());
  }

  saveProduct(product:Product):Observable<any>{
    return this.http.post(this.url + '/', product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get(this.url + '/' + id).map(res => res.json());
  }

  updateProduct(product:Product):Observable<any>{
    return this.http.put(this.url + '/' + product.id, product);
  }

}
