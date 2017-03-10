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

  getProducts():Observable<Product[]>{
    return this.http.get(this.url).map(res => res.json());
  }

  saveProduct(product:Product):Observable<any>{
    return this.http.post(this.url + '/' + product.id, product);
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

  getProductsByName(pattern: string):Observable<Product[]>{
    return this.http.get(this.url + '?name=' + pattern).map((res) => res.json());
  }

}
