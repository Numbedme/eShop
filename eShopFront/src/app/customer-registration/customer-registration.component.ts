import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  private form:FormGroup;

  private login:AbstractControl;
  private password:AbstractControl;
  private confirm:AbstractControl;
  private email:AbstractControl;


  constructor(private service: CustomerService,
              private builder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.login = this.form.controls['login'];
    this.password = this.form.controls['password'];
    this.confirm = this.form.controls['confirm'];
    this.email = this.form.controls['email'];
  }

  onSubmit():void{
    if (this.password.value === this.confirm.value){
      let customer:Customer = new Customer(this.login.value,
                                           this.password.value,
                                           this.email.value);
    this.service.createCustomer(customer)
      .subscribe((customer:Customer) => {

      });
    }else{

    }
  }

}
