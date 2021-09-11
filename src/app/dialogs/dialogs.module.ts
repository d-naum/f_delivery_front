import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateClientComponent } from "./components/client/create-client/create-client.component";
import { NgMaterialModule } from "../material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateProductComponent } from "./components/product/create-product/create-product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CreateCompanyComponent } from './components/company/create-company/create-company.component';
import { CreateCouponComponent } from './components/coupons/create-coupon/create-coupon.component';
import { DeleteCouponComponent } from './components/coupons/delete-coupon/delete-coupon.component';
import { ViewOrderComponent } from './components/orders/view-order/view-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { DeleteOrderComponent } from './components/orders/delete-order/delete-order.component';
import { DeleteCompanyComponent } from './components/company/delete-company/delete-company.component';
import { EditCompanyComponent } from './components/company/edit-company/edit-company.component';
import { ViewCompanyComponent } from './components/company/view-company/view-company.component';
import { DeleteClientComponent } from './components/client/delete-client/delete-client.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/category/delete-category/delete-category.component';
import { DeleteAddonComponent } from './components/product/delete-addon/delete-addon.component';
import { EditAddonComponent } from './components/product/edit-addon/edit-addon.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
// import { CreateAddonComponent } from './components/product/create-addon/create-addon.component';

@NgModule({
  declarations: [CreateClientComponent, CreateProductComponent, CreateCompanyComponent, CreateCouponComponent, DeleteCouponComponent, ViewOrderComponent, EditOrderComponent, DeleteOrderComponent, DeleteCompanyComponent, EditCompanyComponent, ViewCompanyComponent, DeleteClientComponent, ViewClientComponent, EditClientComponent, EditCategoryComponent, DeleteCategoryComponent, DeleteAddonComponent, EditAddonComponent, UpdateStockComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgMaterialModule],
  exports: [
    CreateProductComponent
  ]
})
export class DialogsModule { }
