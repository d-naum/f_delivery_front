import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientsComponent } from "./components/clients/clients.component";
import { CompaniesTableComponent } from "./components/companies/companies.component";
import { CouponsComponent } from "./components/coupons/coupons.component";
import { ProductsComponent } from "./components/products/products.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgMaterialModule } from "../material";
import { PaymentsComponent } from './components/payments/payments.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RouterModule } from '@angular/router';
import { AddonsTableComponent } from "src/app/tables/components/addons/addons-table.component";
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { CouponsTableComponent } from './components/coupons-table/coupons-table.component';

@NgModule({
  declarations: [
    AddonsTableComponent,
    ClientsComponent,
    CompaniesTableComponent,
    CouponsComponent,
    ProductsComponent,
    PaymentsComponent,
    OrdersComponent,
    CategoriesTableComponent,
    CouponsTableComponent,
  ],
  imports: [CommonModule, NgMaterialModule, MatPaginatorModule, RouterModule],
  exports: [CouponsTableComponent, CategoriesTableComponent, AddonsTableComponent, OrdersComponent, ClientsComponent, ProductsComponent, CompaniesTableComponent, PaymentsComponent],
  providers: [CompaniesTableComponent]
})
export class TablesModule { }
