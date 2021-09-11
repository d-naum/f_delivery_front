import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent implements OnInit {

  available = new FormControl(0, Validators.required);
  newStock = new FormControl(0, Validators.required)

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.available.hasError('required')) {
      return 'Product title is required!';
    }
    if (this.newStock.hasError('required')) {
      return 'Description is required!';
    }

    return '';
  }
}
