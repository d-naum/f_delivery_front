import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateProductComponent } from '../../../dialogs/components/product/create-product/create-product.component';
import { EditProductComponent } from '../../../dialogs/components/product/edit-product/edit-product.component';
import { ViewProductComponent } from '../../../dialogs/components/product/view-product/view-product.component';
import { DeleteProductComponent } from '../../../dialogs/components/product/delete-product/delete-product.component';
import { CreateCategoryComponent } from '../../../dialogs/components/category/create-category/create-category.component';
import { CreateAddonComponent } from 'src/app/dialogs/components/product/create-addon/create-addon.component';
import { UpdateStockComponent } from 'src/app/dialogs/components/update-stock/update-stock.component';


export interface Data {
  id: number;
  title: string;
  price: number;
  outOfStock: boolean;
  company: [];
  category: [];
}

const ELEMENT_DATA: Data[] = [
];


@Component({
  selector: 'app-products-table',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: any[] = ['id', 'title', 'price', 'category', 'outOfStock', 'company', 'action'];
  resultsLength = 0;
  dataSource!: MatTableDataSource<Data>;
  categories: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private productService: ProductService, public dialog: MatDialog
  ) {

  }

  ngAfterViewInit() {
    this.getProducts();
    this.getCategories();
  }

  addProduct() {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  updateStockQuantity(productId = 0) {
    const dialogRef = this.dialog.open(UpdateStockComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

  getProducts() {
    this.productService.getProducts().then((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  getCategories() {
    this.productService.getCategories().then((res) => {
      this.categories = res
    })
  }

  // isOutOfstock
  updateStock(e: boolean, product = 0) {
    let status = {
      outOfStock: e
    }
    this.productService.updateProductStock(status, product).then(res => {
      this.getProducts();
    })
  }

  addCategory() {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addAddons() {
    const dialogRef = this.dialog.open(CreateAddonComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editProduct(id = 0) {
    this.productService.getProductById(id).then((res) => {
      // this.dataSource = res;
      const dialogRef = this.dialog.open(EditProductComponent, {
        data: res
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getProducts();
      });
    })

  }

  deleteProduct(id = 0, company = 0) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: { product: id, company: company },
      width: '25%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  viewProduct(id = 0) {
    this.productService.getProductById(id).then((res) => {
      const dialogRef = this.dialog.open(ViewProductComponent, {
        data: res
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
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

