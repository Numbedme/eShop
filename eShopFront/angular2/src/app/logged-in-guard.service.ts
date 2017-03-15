import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoggedInGuardService implements CanActivate{


  constructor(private auth:AuthService,
              private router:Router) { }

  canActivate():boolean {
    let val = this.auth.isLoggedIn();
    if (!val) this.router.navigate(['/login']);
    return val;
  }



}
