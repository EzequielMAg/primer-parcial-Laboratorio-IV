import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts(): Promise<void> {
    try {
      let resApi = this.apiService.getProducts();
      const data = await lastValueFrom(resApi);

      this.products = data.map((productData: any) => new Product(productData));
    } catch (error) {
      console.log(error);
    }
  }

  public deleteProduct(id: number): void {
    this.apiService.deleteProduct(id).subscribe({

      next: () => {
        alert("Producto eliminado exitosamente");
        this.getProducts();
      },
      error: () => alert("No se ha podido eliminar el producto!")
    });
  }

  public createProduct(product: Product): void {
    this.apiService.addProduct(product).subscribe({

      next: () => {
        this.getProducts();
        alert("Producto creado exitosamente!");
      },

      error: () => alert("No se pudo crear el producto")
    })
  }

  public editProduct(product: Product): void {

    //! Uso el spred operator para no pasarle la referencia del objeto y crear una copia con otra referencia
    const dialogRef = this.dialog.open(EditProductComponent, { data: {...product}, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe( result => {

      this.getProducts();
    });
  }


}
