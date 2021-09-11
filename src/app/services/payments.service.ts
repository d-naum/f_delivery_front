import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private httpClient: HttpClient) { }

  getPayments(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    return this.httpClient.get(environment.apiUrl + 'payments', header).toPromise()
  }

  getPayment(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    return this.httpClient.get(environment.apiUrl + 'payments/' + id, header).toPromise()
  }

  getCompanyPayments(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    return this.httpClient.get(environment.apiUrl + 'payments/company/' + id, header).toPromise()
  }

  getClientPayemnts(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJoYXNSb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjY1MTM2ODcsImV4cCI6MTY1ODA0OTY4N30.7DqmyhBtTULRRcpTkTJjkr2rbyOToa3AuXmpZrMKRJM`)
    }
    return this.httpClient.get(environment.apiUrl + 'payments/client/' + id, header).toPromise()
  }

}
