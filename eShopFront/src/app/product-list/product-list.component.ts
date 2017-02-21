import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

import {ProductService} from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(service:ProductService) {
    service.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
  }

  ngOnInit() {
  }

  fileChange(event){
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("file", file);
      
      console.log(formData);
    }
  }

}
