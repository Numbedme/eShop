import {Order} from './order'

export class Customer {

    public id:number;
    public orders:Order[];

    constructor(private login:string,
                private password:string,
                private email:string){

    }
}
