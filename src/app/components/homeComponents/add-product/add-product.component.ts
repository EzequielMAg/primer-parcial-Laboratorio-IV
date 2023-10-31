import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  @Output()
  public productToCreate: EventEmitter<Product> = new EventEmitter();

  public newProduct: Product = new Product();

  public createProduct(): void {

    if(this.newProduct.description.length <= 1) return;
    if(this.newProduct.price.length === 0) return;
    if(this.newProduct.stock.length === 0) return;


    this.productToCreate.emit(this.newProduct);
    this.restartProduct();
  }


  public restartProduct():void {
    this.newProduct = {
      id: null,
      description: "",
      price: "",
      stock: "",
    }
  }

}
