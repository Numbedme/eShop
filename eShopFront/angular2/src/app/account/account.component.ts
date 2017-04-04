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
  private page = 1;
  private amount = 10;
  private totalPages;


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
    this.productService.getProducts("", this.page, this.amount, this.customer.login)
      .subscribe(response => {
        this.totalPages = response.pages;
        this.customer.products = response.products;
      });
  }

  previousPage(): void {
    if (this.page>1){
      this.page--;
      this.updateCustomersProducts();
    }

  }

  nextPage():void {
    if (this.page<this.totalPages){
      this.page++;
      this.updateCustomersProducts();
    }

  }

}
