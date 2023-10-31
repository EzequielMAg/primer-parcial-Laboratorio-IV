import { IProduct, IUser } from "./Interface";

export class Product implements IProduct {
  id: number | null = null;
  description: string = '';
  price: string = '';
  stock: string = '';

  constructor(product?:any){

    this.id = product == undefined ? null : product.id;
    this.description =  product == undefined ? '' : product.description;
    this.price =  product == undefined ? '' : product.price;
    this.stock =  product == undefined ? '' :product.stock;
  }
}

export class User implements IUser{
  id: number | null = null;
  email: string = '';
  password: string = '';

  constructor(user?:any){
    this.id =  user == undefined ? null : user.id;
    this.email = user == undefined ? '' : user.email;
    this.password = user == undefined ? '' : user.password;
  }
}
