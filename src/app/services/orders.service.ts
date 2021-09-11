import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getOrders(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'orders', header).toPromise()
  }

  getOrderByCompanyOrderId(company = 0, order = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'orders/' + company + '/order/' + order, header).toPromise()
  }

  getOrdersByCompany(company = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'orders/company/' + company).toPromise()
  }

  getOrdersByClient(client = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'orders/client/' + client).toPromise()
  }

  updateOrderStatus(order = 0, status = 'null'): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set(
          'Authorization', `Bearer ` + this.authService.getToken()
        )
    }
    var data = {
      name: status
    }
    return this.httpClient.put(environment.apiUrl + 'orders/' + order + '/status/' + order, data, header).toPromise()
  }


}
