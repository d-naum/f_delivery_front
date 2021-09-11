import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getCompanies(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'company', header).toPromise()
  }

  createCompany(company: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.post(environment.apiUrl + 'company', company, header).toPromise()
  }

  getCompany(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'company/' + id, header).toPromise()
  }

  getCompanyPostCodes(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'company/' + id + '/postcodes', header).toPromise()
  }

  getCompanyStatus(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'company/' + id + '/status', header).toPromise()
  }

  updateCompany(id = 0, company: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(environment.apiUrl + 'company/' + id, company, header).toPromise()
  }

  deleteCompany(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.delete(environment.apiUrl + 'company/' + id, header).toPromise()
  }

  updateCompanyStatus(id = 0, status: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(environment.apiUrl + 'company/' + id, status, header).toPromise()
  }
}
