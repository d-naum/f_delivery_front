import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ClientsService } from '../../../../services/clients.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientsService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<EditClientComponent>) { }
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  client: any = [];
  firstName = new FormControl(this.data.firstName, [Validators.required]);
  lastName = new FormControl(this.data.lastName, [Validators.required]);
  email = new FormControl(this.data.email, [Validators.required]);
  password = new FormControl(this.data.password, [Validators.required]);
  phone = new FormControl(this.data.phone, [Validators.required]);
  company = new FormControl(this.data.company, [Validators.required]);
  note = new FormControl(this.data.note, [Validators.required]);
  prferredDeliveryTime = new FormControl(this.data.preferredDeliveryTime, [Validators.required]);
  street = new FormControl(this.data.clientAddress.street, [Validators.required]);
  streetNo = new FormControl(this.data.clientAddress.streetNo, [Validators.required]);
  city = new FormControl(this.data.clientAddress.city, [Validators.required]);
  postCode = new FormControl(this.data.clientAddress.postCode, [Validators.required]);
  floor = new FormControl(this.data.clientAddress.floor, [Validators.required]);

  ngOnInit(): void { }
  getErrorMessage() {

    if (this.firstName.hasError("required")) {
      return "first name is required!";
    }
    if (this.lastName.hasError("required")) {
      return "last name is required";
    }
    if (this.email.hasError("required")) {
      return "email is required!";
    }
    if (this.phone.hasError("required")) {
      return "phone is required!";
    }
    if (this.company.hasError("required")) {
      return "company is required!";
    }
    if (this.note.hasError("required")) {
      return "note is required!";
    }
    if (this.prferredDeliveryTime.hasError("required")) {
      return "Preferred delivery time is required!";
    }
    if (this.street.hasError("required")) {
      return "street is required!";
    }
    if (this.city.hasError("required")) {
      return "city is required!";
    }
    if (this.streetNo.hasError("required")) {
      return "street no is required!";
    }
    if (this.postCode.hasError("required")) {
      return "post code is required!";
    }
    if (this.floor.hasError("required")) {
      return "floor is required!";
    }

    return "";
  }


  updateClient() {
    this.client = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
      company: this.company.value,
      note: this.note.value,
      preferredDeliveryTime: this.prferredDeliveryTime.value,
      street: this.street.value,
      streetNo: this.streetNo.value,
      city: this.city.value,
      postCode: this.postCode.value,
      floor: this.floor.value
    }
    this.clientService.updateClient(this.client, this.data.id).then((res) => {
      this.dialogRef.close();
      this.openSnackBar()
    })
  }

  openSnackBar() {
    this._snackBar.open('Client Updated!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
