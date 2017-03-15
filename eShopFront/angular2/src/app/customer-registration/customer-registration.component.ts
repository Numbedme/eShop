import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {AuthService} from "../auth.service";

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

  private success:boolean = false;
  private fail:boolean = false;
  private failText:string;


  constructor(private service:CustomerService,
              private builder:FormBuilder,
              private auth:AuthService) {
  }

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

  onSubmit():void {
    if (this.password.value === this.confirm.value) {

      let pass:string = this.auth.encrypt(this.password.value);

      let customer:Customer = new Customer(this.login.value,
                                           pass,
                                           this.email.value);
      this.service.createCustomer(customer)
        .subscribe(
          (res) => {
            this.setSuccess();
          },
          (err) => {
            if (err.status == 406){
              this.setFail("User with login "+ customer.login + " already exist");
            } else console.log(err);
          }
        )

    } else {
      this.setFail("Password and confirmation doesn't match");
    }
  }

  setSuccess():void {
    this.success = true;
    this.fail = false;
  }

  setFail(text:string):void {
    this.success = false;
    this.fail = true;
    this.failText = text;
  }


}
