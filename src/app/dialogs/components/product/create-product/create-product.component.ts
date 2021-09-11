import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
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
  constructor(private productService: ProductService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateProductComponent>) { }

  ngOnInit(): void {
    this.getCategories()
    this.getAddons()
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
      outOfStock: false,
      companyId: 1
    }
    console.log(this.product)
    this.productService.createProduct(this.product).then((res) => {
      this.dialogRef.close();
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
