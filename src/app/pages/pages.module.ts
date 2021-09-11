import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompaniesComponent } from "./components/companies/companies.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MenusComponent } from "./components/menus/menus.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { CouponsComponent } from "./components/coupons/coupons.component";
import { TablesModule } from "../tables/tables.module";
import { MatIconModule } from "@angular/material/icon";
import { PagesRoutingModule } from "./pages-routing.module";
import { NgMaterialModule } from "../material";
import { WidgetsModule } from "../widgets/widgets.module";
import { PaymentsComponent } from './components/payments/payments.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { PagesLayoutComponent } from './components/pages-layout/pages-layout.component';
import { AddonsComponent } from './components/addons/addons.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { DialogsModule } from '../dialogs/dialogs.module';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ViewPaymentComponent } from './components/view-payment/view-payment.component';
import { FormsModule } from 'src/app/forms/forms.module';
// import { ViewPaymentComponent } from './components/view-payment/view-payment.component';



@NgModule({
  declarations: [
    CompaniesComponent,
    CustomersComponent,
    DashboardComponent,
    MenusComponent,
    OrdersComponent,
    CouponsComponent,
    PaymentsComponent,
    SettingsComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PagesLayoutComponent,
    AddonsComponent,
    ProductCategoriesComponent,
    ViewProductComponent,
    ViewOrderComponent,
    ViewPaymentComponent
  ],
  imports: [
    CommonModule,
    TablesModule,
    NgMaterialModule,
    MatIconModule,
    PagesRoutingModule,
    WidgetsModule,
    DialogsModule,
    FormsModule
  ],
})
export class PagesModule { }
