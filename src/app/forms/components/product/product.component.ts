import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CompanyService } from '../../../services/company.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSelectionListChange } from '@angular/material/list';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  outOfStock = new FormControl(false);
  company = new FormControl('');
  authUser: any = null;
  categories: any[] = [];
  companies: any[] = [];
  addons: any[] = [];
  product: any = [];
  productAddons: any = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private companyService: CompanyService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authUser = this.authService.isCompany();
    this.getCategories()
    this.getAddons()
    this.getCompanies()
  }

  getErrorMessage() {
    if (this.title.hasError('required')) {
      return 'Product title is required!';
    }
    if (this.description.hasError('required')) {
      return 'Description is required!';
    }
    if (this.price.hasError('required')) {
      return 'Price is required!';
    }
    if (this.category.hasError('required')) {
      return 'Category is required!';
    }

    return '';
  }

  getCategories() {
    this.productService.getCategories().then((res) => {
      this.categories = res
    })
  }

  getCompanies() {
    this.companyService.getCompanies().then((res) => {
      this.companies = res
    })
  }

  getAddons() {
    this.productService.getAddons().then((res) => {
      console.log(res)
      this.addons = res
    })
  }

  onChange(change: MatSelectionListChange) {
    console.log(change.option.value, change.option.selected);
    if (change.option.selected)
      this.productAddons.push(change.option.value)
    else
      this.productAddons.splice(this.productAddons.indexOf(change.option.value), 1)
  }

  createProduct() {

    this.product = {
      title: this.title.value,
      info: this.description.value,
      price: this.price.value,
      categoryId: this.category.value,
      outOfStock: this.outOfStock.value,
      companyId: this.company.value
    }
    this.productService.createProduct(this.product).then((res) => {
      console.log(res)
      this.openSnackBar()
    })
  }

  openSnackBar() {
    this._snackBar.open('Product Created!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
