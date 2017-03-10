import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UtilService {

  public url:string  = "http://localhost:8080/eShopBack";

  constructor(private http:Http) { }

  

}
