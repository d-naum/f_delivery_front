import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getSettings(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'settings/' + id, header).toPromise()
  }

  createSettings(settings: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.post(environment.apiUrl + 'settings', settings, header).toPromise()
  }

  updateSettings( id = 0,settings: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(environment.apiUrl + 'settings/' + id, settings, header).toPromise()
  }

}
