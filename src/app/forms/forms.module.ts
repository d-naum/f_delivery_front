import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddonComponent } from './components/addon/addon.component';
import { CategoryComponent } from './components/category/category.component';
import { ClientComponent } from './components/client/client.component';
import { CompanyComponent } from './components/company/company.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { ProductComponent } from './components/product/product.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgMaterialModule } from "../material";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';

@NgModule({
  declarations: [
    AddonComponent,
    CategoryComponent,
    ClientComponent,
    CompanyComponent,
    CouponComponent,
    ProductComponent,
    EditProductFormComponent,
    UpdateStockComponent,
    SettingsComponent,
    SettingsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SettingsFormComponent]
})
export class FormsModule { }
