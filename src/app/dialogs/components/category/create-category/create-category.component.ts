import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateCategoryComponent>) { }

  ngOnInit(): void {
  }

  createCategory() {
    this.productService.addCategory(this.name.value).then((res) => {
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
    this._snackBar.open('Category Added', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
