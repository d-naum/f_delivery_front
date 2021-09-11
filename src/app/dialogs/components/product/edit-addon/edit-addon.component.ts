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
  selector: 'app-edit-addon',
  templateUrl: './edit-addon.component.html',
  styleUrls: ['./edit-addon.component.scss']
})
export class EditAddonComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<EditAddonComponent>) { }

  name = new FormControl(this.data.name, [Validators.required]);
  price = new FormControl(this.data.price, [Validators.required]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  ngOnInit(): void {
  }

  updateAddon() {
    this.productService.updateAddon(this.name.value, this.price.value, this.data.id).then((res) => {
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
    this._snackBar.open('Addon Updated', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }


}
