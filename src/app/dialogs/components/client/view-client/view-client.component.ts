import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<ViewClientComponent>) { }

  ngOnInit() {
  }

}
