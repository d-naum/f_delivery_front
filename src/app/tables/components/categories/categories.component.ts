import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CreateCategoryComponent } from 'src/app/dialogs/components/category/create-category/create-category.component';
import { DeleteCategoryComponent } from 'src/app/dialogs/components/category/delete-category/delete-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCategoryComponent } from 'src/app/dialogs/components/category/edit-category/edit-category.component';
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private productService: ProductService, private dialog: MatDialog) { }
  categories: any[] = [];

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.productService.getCategories().then((res) => {
      this.categories = res;
    })
  }

  addCategory() {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCategories()
    });
  }

  deleteCategory(id = 0) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      width: "40%",
      data: { category: id }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getCategories()
    });
  }

  editCategory(id = 0) {
    this.productService.getCategory(id).then(res => {
      console.log(res)
      const dialogRef = this.dialog.open(EditCategoryComponent, {
        width: '30%',
        data: res
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getCategories()
      });
    })
  }

}
