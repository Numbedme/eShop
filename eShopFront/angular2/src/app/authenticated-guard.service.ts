import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthenticatedGuardService implements CanActivate{

  constructor(private auth:AuthService,
              private router:Router) { }

  canActivate():boolean {
    let logged = this.auth.isLoggedIn();
    if (logged) this.router.navigate(['/login']);
    return !logged;
  }

}
