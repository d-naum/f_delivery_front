import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CouponService } from 'src/app/services/coupon.service';
import { ClientsService } from 'src/app/services/clients.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent implements OnInit {
  code = new FormControl('', [Validators.required]);
  client = new FormControl('', [Validators.required]);
  price = new FormControl();
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  clients: any[] = [];

  constructor(private clientsServie: ClientsService, private couponService: CouponService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateCouponComponent>) { }

  ngOnInit(): void {
    this.getClients()
  }

  createCoupon() {
    this.couponService.createCoupon(this.code.value, this.client.value).then((res) => {
      this.dialogRef.close();
      this.openSnackBar()
    }, reason => {
      console.error(reason); // Error!
    })

  }

  getClients() {
    this.clientsServie.getClients().then((res => {
      this.clients = res
    }))
  }

  getErrorMessage() {
    if (this.code.hasError('required')) {
      return 'Code is required!';
    }

    return '';
  }

  openSnackBar() {
    this._snackBar.open('Coupon Created!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
