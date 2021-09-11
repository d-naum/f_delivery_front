import { Component, OnInit } from "@angular/core";
import { CompanyService } from '../../../services/company.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteCompanyComponent } from '../../../dialogs/components/company/delete-company/delete-company.component';
import { EditCompanyComponent } from '../../../dialogs/components/company/edit-company/edit-company.component';
import { ViewCompanyComponent } from '../../../dialogs/components/company/view-company/view-company.component';

@Component({
  selector: "app-companies-table",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"],
})
export class CompaniesTableComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  displayedColumns: string[] = [
    "id",
    "name",
    "imprint",
    "minDeliveryAmount",
    "status",
    "action",
  ];
  dataSource = Element_Data;
  constructor(private companyService: CompanyService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCompanies()
  }

  onChangeToggle(id = 0, event: MatSlideToggleChange) {
    let status = {
      status: event.checked ? 'Active' : 'Inactive'
    }
    this.companyService.updateCompanyStatus(id, status).then(response => {
      this.openSnackBar()
    })
  }

  getCompanies() {
    this.companyService.getCompanies().then((res) => {
      this.dataSource = res;
    })
  }

  viewCompany(id = 0) {
    this.companyService.getCompany(id).then(res => {
      const dialogRef = this.dialog.open(ViewCompanyComponent, {
        width: '40%',
        data: res
      })
    })
  }
  editCompany(id = 0) {
    this.companyService.getCompany(id).then(res => {
      const dialogRef = this.dialog.open(EditCompanyComponent, {
        width: '40%',
        data: res
      })
    })
  }
  deleteCompany(id = 0) {
    const dialogRef = this.dialog.open(DeleteCompanyComponent, {
      data: { company: id },
      width: '25%'
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getCompanies()
    })
  }

  openSnackBar() {
    this._snackBar.open('Company Status Updated!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }
}
export interface Company {
  id: number;
  name: string;
  imprint: string;
  status: string;
  minDeliveryAmount: string;
  deliveryTimes: DeliveryTimes[];
  deliveryPoscodes: DeliveryPoscodes[];
}
export interface DeliveryTimes {
  day: string;
  startTime: string;
  endTime: string;
}
export interface DeliveryPoscodes {
  number: string;
  long: string;
  lat: string;
}
let Element_Data: Company[] = [];
