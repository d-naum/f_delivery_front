import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSelectionListChange } from '@angular/material/list';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  outOfStock = new FormControl(false);
  company = new FormControl('');
  authUser: any = null;
  id: any = 0;
  categories: any[] = [];
  companies: any[] = [];
  addons: any[] = [];
  product: any = [];
  productAddons: any = [];
  selectedProductAddons: any = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private companyService: CompanyService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authUser = this.authService.isCompany();
    this.id = this.route.snapshot.paramMap.get('id')
    this.getCategories()
    this.getProduct(this.id)
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

  getProduct(id = 0) {

    this.productService.getProductById(id).then((res) => {
      this.title.setValue(res.title)
      this.description.setValue(res.info)
      this.price.setValue(res.price)
      this.category.setValue(res.category.id)
      this.outOfStock.setValue(res.outOfStock)
      this.company.setValue(res.company != null && res.company.id)
      if (res.addons.length > 0) {
        res.addons.forEach((item: any) => {
          this.selectedProductAddons.push(item.id)
        })
      }
    })
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

  updateProduct() {

    this.product = {
      title: this.title.value,
      info: this.description.value,
      price: this.price.value,
      categoryId: this.category.value,
      outOfStock: this.outOfStock.value,
      companyId: this.company.value
    }
    console.log(this.product)
    this.productService.updateProduct(this.product, this.id).then((res) => {
      this.openSnackBar()
    })
  }

  openSnackBar() {
    this._snackBar.open('Product Updated!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
