import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<DeleteProductComponent>, private productService: ProductService) { }

  ngOnInit() {
  }

  confirmDeletion() {
    this.productService.deleteProduct(this.data.company, this.data.product).then((res) => {
      this.dialog.close()
      this.openSnackBar()
    })
  }

  decline() {
    this.dialog.close()
  }

  openSnackBar() {
    this._snackBar.open('Product Deleted!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
