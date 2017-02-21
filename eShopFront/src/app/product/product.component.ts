import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() private product:Product;

  constructor(private sanitiser:DomSanitizer) {
    
   }

  ngOnInit() {
  }

}
