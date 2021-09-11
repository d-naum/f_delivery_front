import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { CompanyService } from '../../../../services/company.service';
import { CompaniesTableComponent } from "src/app/tables/components/companies/companies.component";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  company: any = [];
  companyDeliveryTimes: any = []
  companyDeliveryPostcodes: any = []
  email = new FormControl(this.data.email, [Validators.required]);
  password = new FormControl("", [Validators.required]);
  name = new FormControl(this.data.name, [Validators.required]);
  imprint = new FormControl(this.data.imprint, [Validators.required]);
  minDeliveryAmount = new FormControl(this.data.minDeliveryAmount, [Validators.required]);
  status = new FormControl(this.data.status, [Validators.required]);
  //deliveryTimes
  deliveryTimes = {
    items: [
      {
        day: new FormControl("", [Validators.required]),
        startTime: new FormControl("", [Validators.required]),
        endTime: new FormControl("", [Validators.required])
      }
    ]
  };
  //deliveryPostcodes
  deliveryPostcodes = {
    items: [
      {
        number: new FormControl("", [Validators.required]),
        long: new FormControl("", [Validators.required]),
        lat: new FormControl("", [Validators.required])
      }
    ]
  };


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private companyService: CompanyService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<EditCompanyComponent>, public companiesTable: CompaniesTableComponent) { }

  ngOnInit() {

  }
  getErrorMessage() {
    if (this.name.hasError("required")) {
      return "Field is required!";
    }

    if (this.imprint.hasError("required")) {
      return "Field is required";
    }

    if (this.minDeliveryAmount.hasError("required")) {
      return "Field is required!";
    }

    if (this.status.hasError("required")) {
      return "Field is required!";
    }

    // if (this.day.hasError("required")) {
    //   return "Field is required!";
    // }

    // if (this.startTime.hasError("required")) {
    //   return "Field is required!";
    // }

    // if (this.endTime.hasError("required")) {
    //   return "Field is required!";
    // }

    // if (this.number.hasError("required")) {
    //   return "Field is required!";
    // }

    // if (this.long.hasError("required")) {
    //   return "Field is required!";
    // }

    // if (this.lat.hasError("required")) {
    //   return "Field is required!";
    // }

    return "";
  }

  addTiming() {
    this.deliveryTimes.items.push({
      day: new FormControl("", [Validators.required]),
      startTime: new FormControl("", [Validators.required]),
      endTime: new FormControl("", [Validators.required])
    })
  }
  addDelivery() {
    this.deliveryPostcodes.items.push({
      number: new FormControl("", [Validators.required]),
      long: new FormControl("", [Validators.required]),
      lat: new FormControl("", [Validators.required])
    })
  }

  updateCompany() {
    // Merge Delivery Times
    if (this.deliveryTimes.items[0].day != null && this.deliveryTimes.items[0].startTime != null && this.deliveryTimes.items[0].endTime != null) {
      this.deliveryTimes.items.forEach((item, index) => {
        if (item.day.value != '' && item.startTime.value != '' && item.endTime.value != '') {
          this.companyDeliveryTimes.push({
            day: item.day.value,
            startTime: item.startTime.value,
            endTime: item.endTime.value
          })
        }
      })
    }
    // Merge Delivery Postcodes
    if (this.deliveryPostcodes.items[0].number != null && this.deliveryPostcodes.items[0].long != null && this.deliveryPostcodes.items[0].lat != null) {
      this.deliveryPostcodes.items.forEach((item, index) => {
        if (item.number.value != '' && item.long.value != '' && item.lat.value != '') {
          this.companyDeliveryPostcodes.push({
            number: item.number.value,
            long: item.long.value,
            lat: item.lat.value
          })
        }
      })
    }
    this.company = {
      "name": this.name.value,
      "imprint": this.imprint.value,
      "minDeliveryAmount": this.minDeliveryAmount.value,
      "status": this.status.value,
      "deliveryTimes": this.companyDeliveryTimes, //Array
      "deliveryPoscodes": this.companyDeliveryPostcodes //Array
    }
    console.log(this.company)

    this.companyService.updateCompany(this.data.id, this.company).then((res) => {
      this.dialogRef.close();
      this.openSnackBar();
      this.companiesTable.getCompanies()
    })
  }

  openSnackBar() {
    this._snackBar.open('Company Added!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }
}
