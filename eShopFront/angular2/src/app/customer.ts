import {Product} from "./product";

export class Customer {

    public id:number;
    public products:Product[];

    constructor(public login:string,
                public password:string,
                public email:string){

    }
}
