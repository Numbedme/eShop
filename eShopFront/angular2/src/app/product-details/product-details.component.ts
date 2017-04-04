import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {AuthService} from "../auth.service";
import {CommentService} from "../comment.service";
import {Comment} from "../comment";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product:Product;
  private comments:Comment[];

  constructor(private route:ActivatedRoute,
              private service:ProductService,
              private auth:AuthService,
              private commentService:CommentService) { }

  ngOnInit() {
    this.route.params.map(params => +params['id'])
      .subscribe(id => this.service.getProduct(id)
        .subscribe((product:Product) => {
        this.product = product;
        this.getComments();
        }));
  }

  postComment(comment:Comment){
    this.commentService.postComment(comment)
      .subscribe((resp) => this.getComments(),
        (err) => console.log(err));
  }

  getComments(){
    this.commentService.getCommentsForProduct(this.product)
      .subscribe(comments => this.comments = comments,
        err => console.log(err));
  }



}
