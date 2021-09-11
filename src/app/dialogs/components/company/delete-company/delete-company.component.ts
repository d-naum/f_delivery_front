import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from 'src/app/services/company.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.scss']
})
export class DeleteCompanyComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private companyService: CompanyService, private dialog: MatDialogRef<DeleteCompanyComponent>) { }

  ngOnInit() {
  }

  confirmDeletion() {
    this.companyService.deleteCompany(this.data.company).then(res => {
      this.dialog.close()
    })
  }

  decline() {
    this.dialog.close()
  }

  openSnackBar() {
    this._snackBar.open('Company Deleted!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }
}
