import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<EditCategoryComponent>) { }

  name = new FormControl(this.data.name, [Validators.required]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  ngOnInit(): void {
  }

  updateCategory() {
    this.productService.updateCategory(this.name.value, this.data.id).then((res) => {
      this.dialogRef.close();
      this.openSnackBar()
    })
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Name is required!';
    }

    return '';
  }

  openSnackBar() {
    this._snackBar.open('Category Updated', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
