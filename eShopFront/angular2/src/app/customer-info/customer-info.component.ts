import {Component, OnInit, Input} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  @Input() private customer:Customer;

  constructor() { }

  ngOnInit() {
  }

}
