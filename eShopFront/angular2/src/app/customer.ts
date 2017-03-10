import {Order} from './order'

export class Customer {

    public id:number;
    public orders:Order[];

    constructor(public login:string,
                public password:string,
                public email:string){

    }
}
