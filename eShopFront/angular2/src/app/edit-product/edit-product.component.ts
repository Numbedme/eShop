import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms'
import {isUndefined} from "util";
import {Customer} from "../customer";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private product: Product;
  private customer:Customer;

  private form: FormGroup;
  private name: AbstractControl;
  private desc: AbstractControl;
  private price: AbstractControl;
  private date: AbstractControl;
  private pic: string;
  private edit:boolean;


  constructor(private router: Router,
    private service: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.edit = !isUndefined(id);
        console.log(typeof id);
        console.log(this.edit);
        if (this.edit){
          this.initEdit(id);
        } else {
          this.initCreate();
        }
      });
  }

  onChange(event) {
    let file: File = event.target.files[0];
    console.log(file.type);
    if (file && file.type.startsWith("image")) {
      let fr: FileReader = new FileReader();
      fr.onloadend = (e) => {
        this.pic = fr.result;
      }
      fr.readAsDataURL(file);
    }
  }

  deletePic(): void {
    this.pic = null;
  }

  onSubmit(): void {
    let product:Product;
    if (this.pic === null){
      product = new Product(this.name.value, this.desc.value, this.price.value, this.date.value, null);
    } else if (this.pic.startsWith("data:image")) {
      product = new Product(this.name.value, this.desc.value, this.price.value, this.date.value, this.pic);
    }
    if (this.edit){
      product.id = this.product.id;
      this.service.updateProduct(product).subscribe(
        res => console.log(res)
      );
    } else {
      this.service.saveProduct(product).subscribe(
        res => console.log(res)
      )
    }

  }

  initEdit(id:number):void{
    this.service.getProduct(id)
      .subscribe((product:Product)=> {
        this.product = product;
        this.form = this.fb.group({
          'name': [product.name, Validators.required],
          'desc': [product.description, Validators.required],
          'price': [product.price, Validators.required],
          'date': [product.startDate, Validators.required],
          'pic': '',
        });
        this.name = this.form.controls['name'];
        this.desc = this.form.controls['desc'];
        this.price = this.form.controls['price'];
        this.date = this.form.controls['date'];
        this.pic = product.picture;
      });
  }

  initCreate():void{
    this.form = this.fb.group({
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
    this.pic = null;
  }

}
