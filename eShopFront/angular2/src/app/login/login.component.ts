import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterStateSnapshot, Router} from '@angular/router'
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: AbstractControl;
  private password:AbstractControl;
  private form: FormGroup;

  private fail:boolean = false;
  private success:boolean = false;
  private failText:string;
  private successText:string;

  constructor(private router: Router,
              private service: CustomerService,
              private auth: AuthService,
              private builder:FormBuilder) { }

  ngOnInit() {
      this.form = this.builder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      });
    this.login = this.form.controls['login'];
    this.password = this.form.controls['password'];
  }

  onSubmit():void{
    this.service.getCustomer(this.login.value)
      .subscribe(
        (customer:Customer)=> {
          if (this.auth.checkPasswords(customer.password, this.password.value)){
            this.auth.login(customer);
            this.setSuccess("Logged in as " + customer.login)
            setTimeout((res) => this.router.navigate(['/home']),3000)
          } else {
            this.setFail('Unable to login')
          }
        },
        (err) => {
          console.log(err);
          this.setFail(err);
        }
      )
  }

  setFail(text:string):void{
    this.fail = true;
    this.success = true;
    this.failText = text;
  }

  setSuccess(text:string):void{
    this.fail = false;
    this.success = true;
    this.successText = text;
  }

}
