import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);

  categories: any[] = [];
  addons: any[] = [];
  product: any = [];
  productAddons: any = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<EditProductComponent>
  ) { }

  ngOnInit(): void {
    this.getCategories()
    this.getAddons()
    this.title.setValue(this.data.title)
    this.description.setValue(this.data.info)
    this.price.setValue(this.data.price)
    this.category.setValue(this.data.categoryId)
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

  getAddons() {
    this.productService.getAddons().then((res) => {
      console.log(res)
      this.addons = res
    })
  }

  createProduct() {

    this.product = {
      title: this.title.value,
      info: this.description.value,
      price: this.price.value,
      categoryId: this.category.value,
      outOfStock: false,
      companyId: 1
    }

    this.productService.updateProduct(this.product, this.data.id).then((res) => {
      this.dialogRef.close();
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
