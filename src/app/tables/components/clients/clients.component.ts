import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateClientComponent } from "src/app/dialogs/components/client/create-client/create-client.component";
import { ClientsService } from "src/app/services/clients.service";
import { DeleteClientComponent } from 'src/app/dialogs/components/client/delete-client/delete-client.component';
import { EditClientComponent } from 'src/app/dialogs/components/client/edit-client/edit-client.component';
import { ViewClientComponent } from 'src/app/dialogs/components/client/view-client/view-client.component';

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements AfterViewInit {
  constructor(private clientsService: ClientsService, private dialog: MatDialog) { }
  displayedColumns: string[] = [
    "id",
    "Name",
    "email",
    "phone",
    "company",
    "postCode",
    "city",
    "action",
  ];
  dataSource = Element_Data;
  ngAfterViewInit() {
    this.getClients()
  }

  getClients() {
    this.clientsService.getClients().then((res) => {
      this.dataSource = res
    })
  }

  deleteClient(id = 0, address = 0) {
    const dialogRef = this.dialog.open(DeleteClientComponent, {
      data: { client: id, address: address },
      width: '25%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }

  editClient(id = 0) {
    this.clientsService.getClient(id).then(res => {
      const dialogRef = this.dialog.open(EditClientComponent, {
        data: res,
        width: '40%',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.getClients();
      });
    })
  }

  viewClient(id = 0) {
    this.clientsService.getClient(id).then(res => {
      const dialogRef = this.dialog.open(ViewClientComponent, {
        data: res,
        width: '25%',
      });
    })
  }

}
export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  note?: string;
  preferredDeliveryTime?: string;
  clientAddress: ClientAddress;
}
export interface ClientAddress {
  street?: string;
  streetNo?: number;
  city: string;
  postCode: number;
  floor?: string;
}
const Element_Data: Client[] = [];
