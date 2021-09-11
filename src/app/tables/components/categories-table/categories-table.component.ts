import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CreateCategoryComponent } from 'src/app/dialogs/components/category/create-category/create-category.component';
import { DeleteCategoryComponent } from 'src/app/dialogs/components/category/delete-category/delete-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCategoryComponent } from 'src/app/dialogs/components/category/edit-category/edit-category.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Category {
  id: number,
  name: string
}

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})

export class CategoriesTableComponent implements OnInit {
  displayedColumns: any[] = ['id', 'name', 'action']
  dataSource!: MatTableDataSource<Category>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private productService: ProductService, private dialog: MatDialog) { }
  categories: any[] = [];

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.productService.getCategories().then((res) => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
