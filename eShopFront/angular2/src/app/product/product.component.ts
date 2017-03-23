import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() private product:Product;

  constructor() {

   }

  ngOnInit() {

  }

}
