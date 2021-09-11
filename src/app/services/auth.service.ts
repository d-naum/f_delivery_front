import { Injectable } from '@angular/core';
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Compiler } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessible = ['SuperAdmin', 'Agent', 'Manager', 'Company'];
  public role = null;
  //Only for demo purpose
  authenticated = false;

  constructor(
    private httpClient: HttpClient,
    private store: LocalStoreService,
    private _compiler: Compiler,
    private router: Router) {
    this.checkAuth();
  }

  getToken() {
    if (this.checkAuth()) {
      let token = this.store.getItem('jwt_token');
      return token.token;
    }
    else
      return null
  }

  checkAuth() {
    const helper = new JwtHelperService();
    const token = this.store.getItem('jwt_token');
    if (token) {
      const decodedToken = helper.decodeToken(token.token);
      const expirationDate = helper.getTokenExpirationDate(token.token);
      const isExpired = helper.isTokenExpired(token.token);
      this.authenticated = !isExpired;
    }
    else {
      this.authenticated = false
    }
    return this.authenticated
  }

  isAdmin() {
    const helper = new JwtHelperService();
    const token = this.store.getItem('jwt_token');
    const decodedToken = helper.decodeToken(token.token);
    this.role = decodedToken.hasRole
    if (decodedToken.hasRole == 'admin')
      return true
    else
      return false
  }

  isCompany() {
    const helper = new JwtHelperService();
    const token = this.store.getItem('jwt_token');
    const decodedToken = helper.decodeToken(token.token);
    this.role = decodedToken.hasRole
    if (decodedToken.hasRole == 'company')

      return { isCompany: true, id: decodedToken.id, companyId: decodedToken.companyId }
    else
      return { isCompany: false, id: null }
  }

  isClient() {
    const helper = new JwtHelperService();
    const token = this.store.getItem('jwt_token');
    const decodedToken = helper.decodeToken(token.token);
    this.role = decodedToken.hasRole
    if (decodedToken.hasRole == 'client')
      return true
    else
      return false
  }

  signin(credentials: any = []) {
    this._compiler.clearCache();
    return this.httpClient.post(environment.apiUrl + 'user/login', credentials).toPromise()
  }
}
