import {Customer} from "./customer";
export class Product {
public id:number;
public customer:Customer;

    constructor(public name:string, public description:string, public price:Number, public startDate:Date, public picture: string){

    }
}
