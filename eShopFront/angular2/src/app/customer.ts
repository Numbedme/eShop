import {Product} from "./product";

export class Customer {

    public id:number;
    public products:Product[];
    public pic:string;

    constructor(public login:string,
                public password:string,
                public email:string){

    }
}
