import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private customer:Customer;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.customer = this.auth.customer;
  }

}
