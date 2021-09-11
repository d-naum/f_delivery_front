import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompaniesComponent } from "./components/companies/companies.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MenusComponent } from "./components/menus/menus.component";
import { CouponsComponent } from "./components/coupons/coupons.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AddonsComponent } from './components/addons/addons.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ViewPaymentComponent } from './components/view-payment/view-payment.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "companies",
    component: CompaniesComponent,
  },
  {
    path: "clients",
    component: CustomersComponent,
  },
  {
    path: "products",
    component: MenusComponent,
  },
  {
    path: "view-payment/:id",
    component: ViewPaymentComponent,
  },
  {
    path: "view-order/:company/:id",
    component: ViewOrderComponent,
  },
  {
    path: "product-addons",
    component: AddonsComponent,
  },
  {
    path: "product-categories",
    component: ProductCategoriesComponent,
  },
  {
    path: "coupons",
    component: CouponsComponent,
  },
  {
    path: "payments",
    component: PaymentsComponent,
  },
  {
    path: "orders",
    component: OrdersComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
