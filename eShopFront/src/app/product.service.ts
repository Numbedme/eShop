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

  saveProduct(product:Product):void{
    this.http.post(this.url, product).subscribe(
      data => console.log("Product saved"),
      err => console.log(err) 
    );
  }

}
