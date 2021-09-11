import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<DeleteClientComponent>, private clientsServie: ClientsService) { }

  ngOnInit() {
  }

  confirmDeletion() {
    this.clientsServie.deleteClient(this.data.client, this.data.address).then((res) => {
      this.dialog.close()
      this.openSnackBar()
    })
  }

  decline() {
    this.dialog.close()
  }

  openSnackBar() {
    this._snackBar.open('Client Deleted!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
