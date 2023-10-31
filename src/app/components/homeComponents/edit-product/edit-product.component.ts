import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public product: Product = new Product();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<EditProductComponent>
  ) { }

  ngOnInit(): void {
    this.product = this.data;
  }

  public editProduct() {

    this.apiService.updateProduct(this.product).subscribe({

      next: () => this.dialogRef.close(true),
      error: (error) => alert(error)
    });
  }

  public closeDialog() {
    this.dialogRef.close(false);
  }

}
