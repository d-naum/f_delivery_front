import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';

const routes: Routes = [
  {
    path: "addproduct",
    component: ProductComponent,
  },
  {
    path: "edit-product/:id",
    component: EditProductFormComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule { }
