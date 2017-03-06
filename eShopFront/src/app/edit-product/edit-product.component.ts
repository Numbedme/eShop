import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private product: Product;


  constructor(private router: Router,
              private service: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .switchMap((params) => this.service.getProduct(+params['id']))
    .subscribe((product: Product) => {
      this.product = product;
    });
  }

}
