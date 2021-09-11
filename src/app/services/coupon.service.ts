import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  apiUrl: null

  constructor(private httpClient: HttpClient) { }

  getCoupons(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    return this.httpClient.get(environment.apiUrl + 'coupons', header).toPromise()
  }
  createCoupon(code = 0, client = 0, status = "unused"): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    var data = {
      number: code,
      status: status,
      clientId: client
    }
    return this.httpClient.post(environment.apiUrl + 'coupons', data, header).toPromise()
  }

}
