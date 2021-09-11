import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteOrderComponent } from 'src/app/dialogs/components/orders/delete-order/delete-order.component';
import { EditOrderComponent } from 'src/app/dialogs/components/orders/edit-order/edit-order.component';
import { ViewOrderComponent } from 'src/app/dialogs/components/orders/view-order/view-order.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "company",
    "client",
    "count",
    "deliveryDate",
    "amount",
    "status",
    "action",
  ];
  dataSource = [];
  constructor(private ordersService: OrdersService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.ordersService.getOrders().then((res) => {
      this.dataSource = res;
      console.log(res)
    })
  }

  deleteOrder(id: any = 0) {
    const dialogRef = this.dialog.open(DeleteOrderComponent, {
      width: '35%'
    })
  }

  cancelOrder(id: any = 0, status: any = null) {
    this.ordersService.updateOrderStatus(id, 'Cancelled').then(res => {
      this.openSnackBar('Order has been cancelled!', 'danger')
      this.getOrders()
    })
  }
  completeOrder(id: any = 0, status: any = null) {
    this.ordersService.updateOrderStatus(id, 'Completed').then(res => {
      this.openSnackBar('Order has been completed!', 'success')
      this.getOrders()
    })
  }

  viewOrder(id: any = 0, company: any = 0) {
    const dialogRef = this.dialog.open(ViewOrderComponent, {
      width: '60%',
      data: {
        id: id,
        company: company
      }
    })
  }

  openSnackBar(message = 'null', type = '') {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [type + '-snackbar']
    });
  }

}
