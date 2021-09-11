import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrderByCompanyOrderId(this.data.company, this.data.id).then((res) => {
      console.log(res)
    })
  }

}
