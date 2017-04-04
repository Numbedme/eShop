import {Customer} from "./customer";
import {Product} from "./product";
export class Comment {

  public id:number;
  public customer:Customer;
  public product:Product;
  public text:string;
  public date:Date;

  constructor(){

  }
}
