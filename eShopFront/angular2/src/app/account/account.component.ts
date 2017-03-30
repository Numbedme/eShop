import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Customer} from "../customer";
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private customer: Customer;


  constructor(private auth: AuthService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.customer = this.auth.customer;
    this.updateCustomersProducts();
  }

  deleteProduct(product: Product): void {
    console.log(product);
    this.productService.deleteProduct(product.id)
      .subscribe(() => {
        this.updateCustomersProducts();
      }, (err) => console.log(err));

  }

  updateCustomersProducts(): void {
    this.productService.getProductsForCustomer(this.customer)
      .subscribe((products: Product[]) => {
        this.customer.products = products;
      });
  }

}
