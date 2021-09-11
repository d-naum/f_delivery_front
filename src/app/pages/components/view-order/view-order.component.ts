import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  id: any = 0;
  company: any = 0;
  order: any = null
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private route: ActivatedRoute, private ordersService: OrdersService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.company = params.get('company')
      this.ordersService.getOrderByCompanyOrderId(this.company, this.id).then(res => {
        this.order = res
      })
    })
  }

  cancelOrder(id: any = 0, status: any = null) {
    this.ordersService.updateOrderStatus(id, 'Cancelled').then(res => {
      this.openSnackBar('Order has been cancelled!', 'danger')
      this.getDetails()
    })
  }
  completeOrder(id: any = 0, status: any = null) {
    this.ordersService.updateOrderStatus(id, 'Completed').then(res => {
      this.openSnackBar('Order has been completed!', 'success')
      this.getDetails()
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
