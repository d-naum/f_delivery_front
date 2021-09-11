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
  selector: 'app-delete-addon',
  templateUrl: './delete-addon.component.html',
  styleUrls: ['./delete-addon.component.scss']
})
export class DeleteAddonComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<DeleteAddonComponent>, private productService: ProductService) { }

  ngOnInit() {
  }

  confirmDeletion() {
    this.productService.deleteAddon(this.data.addon).then((res) => {
      this.dialog.close()
      this.openSnackBar()
    })
  }

  decline() {
    this.dialog.close()
  }

  openSnackBar() {
    this._snackBar.open('Addon Deleted!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
