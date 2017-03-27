import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';

import {Customer} from "./customer";

import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Observable} from "rxjs/Observable";
import {CustomerService} from "./customer.service";

class AuthCustomer {
  constructor(public login: string, public password: string) {

  }
}

@Injectable()
export class AuthService {
  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  private _customer: Customer = null;

  private loginAnnouncedSource: Subject<boolean> = new Subject<boolean>();

  public loginAnnounced: Observable<boolean> = this.loginAnnouncedSource.asObservable();

  constructor(private service: CustomerService) {
    this.checkCookie();
  }

  checkPasswords(encryptedPassword: string, password: string): boolean {
    return encryptedPassword === this.encrypt(password);
  }

  login(customer: Customer): void {
    this._customer = customer;
    this.loginAnnouncedSource.next(true);
  }

  public checkCookie():Observable<boolean>{
    let cookie: string = Cookie.get('authKey');
    let subj:Subject<boolean> =  new Subject<boolean>();
    if (this.isLoggedIn()){
      subj.next(true);
    } else {
      if (cookie) {
        let authCustomer: AuthCustomer = this.decryptCookie();
        this.service.getCustomer(authCustomer.login)
          .subscribe((customer: Customer) => {
            if (customer.password === authCustomer.password) {
              this.login(customer);
              subj.next(true);
            }
            else subj.next(false);
          });
      } else {
        subj.next(false);
      }
    }
    return subj.asObservable();
  }

  isLoggedIn(): boolean {
    return this._customer !== null;
  }

  logOut(): void {
    this._customer = null;
    Cookie.delete('authKey');
    this.loginAnnouncedSource.next(false);
  }

  encrypt(text: string): string {
    return text;
  }

  decrypt(text: string): string {
    return text;
  }

  addCustomerCookie() {
    let authKey = this.encryptCookie();
    Cookie.set('authKey', authKey);
  }

  encryptCookie(): string {
    return this.encrypt(this.encrypt(this.customer.login) + '??' + this.encrypt(this.customer.password))
  }

  decryptCookie(): AuthCustomer {
    let cookie: string = Cookie.get('authKey');
    let splitted: string[] = this.decrypt(cookie).split('??');
    let customer: AuthCustomer = new AuthCustomer(this.decrypt(splitted[0]), splitted[1]);
    return customer;
  }


}
