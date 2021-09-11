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
  selector: 'app-create-addon',
  templateUrl: './create-addon.component.html',
  styleUrls: ['./create-addon.component.scss']
})
export class CreateAddonComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateAddonComponent>) { }

  ngOnInit(): void {
  }

  createAddon() {
    this.productService.addAddon(this.name.value, this.price.value).then((res) => {
      this.dialogRef.close();
      this.openSnackBar()
    })
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Name is required!';
    }
    if (this.price.hasError('required')) {
      return 'Price is required!';
    }

    return '';
  }

  openSnackBar() {
    this._snackBar.open('Addon Created!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
