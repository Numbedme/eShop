import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Comment} from './comment';
import {Observable} from "rxjs";
import {UtilService} from "./util.service";
import {Product} from "./product";

@Injectable()
export class CommentService {

  private url: string;

  constructor(private http:Http,
              private util:UtilService) {
    this.url = util.url + '/comments';
  }

  postComment(comment:Comment):Observable<any>{
    return this.http.post(this.url, comment);
  }

  getCommentsForProduct(product: Product):Observable<Comment[]> {
    return this.http.get(this.url + '/product/' + product.id).map(res => res.json());
  }
}
