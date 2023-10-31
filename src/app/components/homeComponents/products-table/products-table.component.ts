import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {

  @Input()
  public inputProducts: Product[] = [];

  @Output()
  public productToDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public productToEdit: EventEmitter<Product> = new EventEmitter();


  public deleteProduct(id: number) {
    this.productToDelete.emit(id);
  }

  public editProduct(product: Product) {
    this.productToEdit.emit(product);
  }


}
