import { Injectable } from '@angular/core';
import {Product} from './product'
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  url: string = "http://localhost:8080/eShop/product";

  constructor(private http:Http) { }

  getProducts():Observable<Product[]>{
    return this.http.get(this.url).map(res => res.json());
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
    return this.http.put(this.url + '/', product);
  }

  getProductsByPattern(pattern: string):Observable<Product[]>{
    return this.http.get(this.url + '?name=' + pattern).map((res) => res.json());
  }

}
