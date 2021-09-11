import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: null

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getProducts(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products', header).toPromise()
  }

  getAddons(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products/addons', header).toPromise()
  }



  getAddon(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products/addon/' + id, header).toPromise()
  }

  getCategories(): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products/Categories', header).toPromise()
  }

  getCategory(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products/category/' + id, header).toPromise()
  }

  getProductById(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.get(environment.apiUrl + 'products/' + id, header).toPromise()
  }

  addCategory(name = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    var data = {
      name: name
    }
    return this.httpClient.post(
      environment.apiUrl + 'products/Categories',
      data,
      header).toPromise()
  }

  updateCategory(name = null, id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    var data = {
      name: name
    }
    return this.httpClient.put(
      environment.apiUrl + 'products/Categories/' + id,
      data,
      header).toPromise()
  }

  addAddon(name = 0, price = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    var data = {
      name: name,
      price: price
    }
    return this.httpClient.post(
      environment.apiUrl + 'products/1/addons',
      data,
      header).toPromise()
  }

  updateAddon(name = 0, price = 0, id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    var data = {
      name: name,
      price: price
    }
    return this.httpClient.put(
      environment.apiUrl + 'products/addons/' + id,
      data,
      header).toPromise()
  }

  deleteAddon(id = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.delete(
      environment.apiUrl + 'products/addons/delete/' + id,
      header).toPromise()
  }

  createProduct(product: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.post(
      environment.apiUrl + 'products/company/1',
      product,
      header).toPromise()
  }

  storeProductAddons(productId: any = 0, addons: any = []): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.post(
      environment.apiUrl + 'products/addons/' + productId,
      addons,
      header).toPromise()
  }

  updateProduct(product: any = [], productId = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(
      environment.apiUrl + 'products/' + productId,
      product,
      header).toPromise()
  }



  updateProductStock(product: any = [], productId = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.put(
      environment.apiUrl + 'products/stock/' + productId,
      product,
      header).toPromise()
  }



  deleteProduct(company = 0, product = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.delete(
      environment.apiUrl + 'products/' + company + '/product/' + product,
      header).toPromise()
  }

  deleteProductCategory(category = 0): Promise<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ` + this.authService.getToken())
    }
    return this.httpClient.delete(
      environment.apiUrl + 'products/category/' + category,
      header).toPromise()
  }


}
