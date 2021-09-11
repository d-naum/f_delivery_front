import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CouponService } from '../../../services/coupon.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateCouponComponent } from 'src/app/dialogs/components/coupons/create-coupon/create-coupon.component';

export interface Coupon {
  id: number,
  number: number,
  status: string,
  client: []
}

@Component({
  selector: 'app-coupons-table',
  templateUrl: './coupons-table.component.html',
  styleUrls: ['./coupons-table.component.scss']
})
export class CouponsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<Coupon>
  displayedColumns: any = ['id', 'number', 'status', 'client', 'clientEmail']
  constructor(private couponService: CouponService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCoupons()
  }

  addCoupon() {
    const dialogRef = this.dialog.open(CreateCouponComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCoupons()
    });
  }

  getCoupons() {
    this.couponService.getCoupons().then((res) => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator

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
