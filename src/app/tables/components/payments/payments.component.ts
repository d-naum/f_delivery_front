import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../../services/payments.service';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "client",
    "company",
    "coupon",
    "status",
    "action",
  ];
  dataSource = [];
  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.getPayments()
  }

  getPayments() {
    this.paymentsService.getPayments().then((res) => {
      this.dataSource = res;
      console.log(res)
    })
  }

}

export interface Payments {
  id: number,
  name: string,
  clientId: number,
  companyId: number,
  couponId: number,
  orderId: number,
  links: [],
  paymentStatus: string
}

let Element_Data: any[] = [];