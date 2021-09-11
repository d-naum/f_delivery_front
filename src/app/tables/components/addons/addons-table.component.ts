import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { CreateAddonComponent } from 'src/app/dialogs/components/product/create-addon/create-addon.component';
import { DeleteAddonComponent } from 'src/app/dialogs/components/product/delete-addon/delete-addon.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditAddonComponent } from 'src/app/dialogs/components/product/edit-addon/edit-addon.component';

export interface Addons {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-addons-table',
  templateUrl: './addons-table.component.html',
  styleUrls: ['./addons-table.component.scss']
})
export class AddonsTableComponent implements AfterViewInit {
  displayedColumns: any[] = ['id', 'name', 'price', 'action']
  dataSource!: MatTableDataSource<Addons>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private productService: ProductService, private dialog: MatDialog) { }
  addons: any[] = [];

  ngAfterViewInit() {
    this.getAddons()
  }

  getAddons() {
    this.productService.getAddons().then((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator
    })
  }

  addAddon() {
    const dialogRef = this.dialog.open(CreateAddonComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAddons()
    });
  }

  deleteAddon(id = 0) {
    const dialogRef = this.dialog.open(DeleteAddonComponent, {
      width: "40%",
      data: { addon: id }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAddons()
    });
  }

  editAddon(id = 0) {
    this.productService.getAddon(id).then(res => {
      console.log(res)
      const dialogRef = this.dialog.open(EditAddonComponent, {
        width: '30%',
        data: res
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getAddons()
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
