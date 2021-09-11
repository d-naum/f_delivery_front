import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PaymentsService } from '../../../services/payments.service'

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})

export class ViewPaymentComponent implements OnInit {
  id: any = 0
  payment: any = []
  constructor(private route: ActivatedRoute, private paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
      this.paymentsService.getPayment(this.id).then((res) => {
        this.payment = res
      })
    })
  }

}
