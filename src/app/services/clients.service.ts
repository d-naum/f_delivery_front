import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getClients(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'client', header).toPromise()
  }

  getClient(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'client/' + id, header).toPromise()
  }

  createClient(client: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.post(environment.apiUrl + 'client', client, header).toPromise()
  }

  updateClient(client: any = [], id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(environment.apiUrl + 'client/' + id, client, header).toPromise()
  }

  deleteClient(id = 0, address = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.delete(environment.apiUrl + 'client/' + id + '/' + address, header).toPromise()
  }
}
