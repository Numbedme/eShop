import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import {Customer} from "./customer";

import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  private customer:Customer = null;

  private loginAnnouncedSource:Subject<boolean> = new Subject<boolean>();

  public loginAnnounced:Observable<boolean> = this.loginAnnouncedSource.asObservable();

  constructor() {
  }

  checkPasswords(encryptedPassword:string, password:string):boolean {
    return encryptedPassword === this.encrypt(password);
  }

  login(customer:Customer):void{
    this.customer = customer;
    let authKey = this.encrypt(this.encrypt(customer.login) + '??' + this.encrypt(customer.password));
    Cookie.set('authKey', authKey);
    this.loginAnnouncedSource.next(true);
  }

  isLoggedIn():boolean{
    return !(this.customer === null);
  }

  logOut():void{
    this.customer = null;
    Cookie.delete('authKey');
    this.loginAnnouncedSource.next(false);
  }

  encrypt(text:string):string{
    return btoa(text);
}

  decrypt(text:string):string{
    return atob(text);
  }

}
