import { Renderer2, Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var paypal: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AR7AEhR3wj_BVTF-CfFk6aSmDcYz0K-0-C0yYDHIR02VrudoqOEa9i3dxENnFAeO8ZjMqv6LiJcHWnie`;

    this._renderer2.appendChild(this._document.body, script);
    setTimeout(() => {
      // this.renderPayPay()
    }, 2000);
  }

  renderPayPay() {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
