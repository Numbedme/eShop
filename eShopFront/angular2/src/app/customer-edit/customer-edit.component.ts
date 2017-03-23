import {Component, OnInit, Input} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Input() private customer:Customer;

  constructor() { }

  ngOnInit() {
  }

}
