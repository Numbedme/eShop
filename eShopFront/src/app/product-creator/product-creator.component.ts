import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {FormBuilder, AbstractControl, FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html',
  styleUrls: ['./product-creator.component.css'],
})
export class ProductCreatorComponent implements OnInit {

  private form: FormGroup;
  private name: AbstractControl;
  private desc: AbstractControl;
  private price: AbstractControl;
  private date: AbstractControl;
  private pic: string;

  constructor(private service:ProductService, private fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'desc': ['', Validators.required],
      'price': ['', Validators.required],
      'date': ['', Validators.required],
      'pic': '',
    });

    this.name = this.form.controls['name'];
    this.desc = this.form.controls['desc'];
    this.price = this.form.controls['price'];
    this.date = this.form.controls['date'];
   }

  ngOnInit() {
  }

  onChange(event){
    let file:File = event.target.files[0];
    let fr: FileReader = new FileReader();
    fr.onloadend = (e) => {
      this.pic = fr.result;
    }
    fr.readAsDataURL(file);
  }

  onSubmit(pic: any):void{
    let product: Product = new Product(this.name.value, this.desc.value, this.price.value, this.date.value, this.pic);
    console.log(product);
    this.service.saveProduct(product);
  }

}