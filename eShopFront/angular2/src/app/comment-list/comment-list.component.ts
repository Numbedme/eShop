import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Comment} from '../comment';
import {Product} from "../product";
import {AuthService} from "../auth.service";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments:Comment[];
  @Input() product:Product;
  @Output() onComment:EventEmitter<Comment> = new EventEmitter();

  constructor(private auth:AuthService,
              private service:CommentService) { }

  ngOnInit() {
  }

  onSubmit(text:string):void{
    let comment:Comment = new Comment();
    comment.date = new Date();
    comment.customer = this.auth.customer;
    comment.product = this.product;
    comment.text = text;
    this.onComment.emit(comment);
  }

}
