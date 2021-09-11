import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private productService: ProductService, private dialog: MatDialogRef<DeleteCategoryComponent>) { }

  ngOnInit() {
  }

  confirmDeletion() {
    this.productService.deleteProductCategory(this.data.category).then(res => {
      this.dialog.close()
    })
  }

  decline() {
    this.dialog.close()
  }

  openSnackBar() {
    this._snackBar.open('Company Deleted!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
