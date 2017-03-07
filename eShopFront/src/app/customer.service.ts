import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {Customer} from './customer';
import {UtilService} from './util.service';



@Injectable()
export class CustomerService {

  private url:string;

  constructor(private http:Http,
              private util:UtilService) {
                this.url = util.url + '/customer';
               }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.url, customer);
  }

  getCustomer(login:string):Observable<Customer>{
    return this.http.get(this.url + '/' + login).map(res => res.json());
  }

}
