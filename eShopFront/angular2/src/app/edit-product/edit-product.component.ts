import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private product: Product;

  private form: FormGroup;
  private name: AbstractControl;
  private desc: AbstractControl;
  private price: AbstractControl;
  private date: AbstractControl;
  private pic: string;


  constructor(private router: Router,
    private service: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params) => this.service.getProduct(+params['id']))
      .subscribe((product: Product) => {
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

  onChange(event) {
    let file: File = event.target.files[0];
    if (file) {
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
    if (this.pic.startsWith("data:image")) {
      let product: Product = new Product(this.name.value, this.desc.value, this.price.value, this.date.value, this.pic);
      product.id = this.product.id;
      this.service.updateProduct(product).subscribe(
        res => console.log(res)
      );
    }

  }

}
