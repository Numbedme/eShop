import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product:Product;

  constructor(private route:ActivatedRoute,
              private service:ProductService) { }

  ngOnInit() {
    this.route.params.map(params => +params['id'])
      .subscribe(id => this.service.getProduct(id)
        .subscribe((product:Product) => {
        this.product = product;
        }));
  }

}
