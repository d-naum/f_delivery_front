import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ClientsService } from '../../../../services/clients.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: "app-create-client",
  templateUrl: "./create-client.component.html",
  styleUrls: ["./create-client.component.scss"],
})
export class CreateClientComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  client: any = [];
  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);
  phone = new FormControl("", [Validators.required]);
  company = new FormControl("", [Validators.required]);
  note = new FormControl("", [Validators.required]);
  prferredDeliveryTime = new FormControl("", [Validators.required]);
  street = new FormControl("", [Validators.required]);
  streetNo = new FormControl("", [Validators.required]);
  city = new FormControl("", [Validators.required]);
  postCode = new FormControl("", [Validators.required]);
  floor = new FormControl("", [Validators.required]);
  constructor(private clientService: ClientsService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateClientComponent>) { }

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


  createClient() {
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
    this.clientService.createClient(this.client).then((res) => {
      this.dialogRef.close();
      this.openSnackBar()
    })
  }

  openSnackBar() {
    this._snackBar.open('Client Added!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
