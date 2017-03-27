import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private logged:boolean;

  constructor(private router:Router,
              private auth:AuthService) { }

  ngOnInit() {
    this.auth.loginAnnounced.subscribe((logged:boolean) => {
      this.logged = logged
    });
  }

  onSubmit(search:string):void{
    this.router.navigate(['search', search]);
  }

  logout():void{
    this.auth.logOut();
  }

}
