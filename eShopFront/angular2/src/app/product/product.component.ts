import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() private product:Product;
  @Output() private delete:EventEmitter<number>;
  @Output() private edit:EventEmitter<number>;

  constructor() {
    this.delete = new EventEmitter<number>();
    this.edit = new EventEmitter<number>();
   }

  ngOnInit() {

  }

  deleteProduct():void{
    this.delete.emit(this.product.id);
  }

  editProduct():void{
    this.edit.emit(this.product.id);
  }

}
