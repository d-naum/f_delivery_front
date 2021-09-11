import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateClientComponent } from "src/app/dialogs/components/client/create-client/create-client.component";
import { ClientsComponent } from "src/app/tables/components/clients/clients.component";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],

})
export class CustomersComponent implements OnInit {
  @ViewChild(ClientsComponent)
  customerTable!: ClientsComponent;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }
  addClient() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: "40%",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.customerTable.getClients()
    });
  }
}
