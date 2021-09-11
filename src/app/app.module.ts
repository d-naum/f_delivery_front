import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// Material Component
import { NgMaterialModule } from "./material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RevenueComponent } from "./widgets/components/dashboard/revenue/revenue.component";
import { RecentOrdersComponent } from "./widgets/components/dashboard/recent-orders/recent-orders.component";
import { OrderListsComponent } from "./widgets/components/lists/order-lists/order-lists.component";
import { MenuListsComponent } from "./widgets/components/lists/menu-lists/menu-lists.component";
import { CompanyListsComponent } from "./widgets/components/lists/company-lists/company-lists.component";
import { CustomerListsComponent } from "./widgets/components/lists/customer-lists/customer-lists.component";
import { CategoriesComponent } from "./widgets/components/cards/categories/categories.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditProductComponent } from "./dialogs/components/product/edit-product/edit-product.component";
import { DeleteProductComponent } from "./dialogs/components/product/delete-product/delete-product.component";
import { ViewProductComponent } from "./dialogs/components/product/view-product/view-product.component";
import { CreateCategoryComponent } from "./dialogs/components/category/create-category/create-category.component";
import { CreateAddonComponent } from "./dialogs/components/product/create-addon/create-addon.component";
import { PagesModule } from "./pages/pages.module"
import { AuthModule } from "./auth/auth.module"
import { CreateCouponComponent } from './dialog/components/coupons/create-coupon/create-coupon.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { EditProductFormComponent } from './edit-product-form/edit-product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RevenueComponent,
    RecentOrdersComponent,
    OrderListsComponent,
    MenuListsComponent,
    CompanyListsComponent,
    CustomerListsComponent,
    CategoriesComponent,
    EditProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    CreateCategoryComponent,
    CreateAddonComponent,
    CreateCouponComponent,
    SigninComponent,
    EditProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // DialogsModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
