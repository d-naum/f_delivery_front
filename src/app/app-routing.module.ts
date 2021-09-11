import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { combineLatest } from "rxjs";
import { AppComponent } from "./app.component";
import { LayoutComponent } from './auth/components/layout/layout.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { PagesLayoutComponent } from './pages/components/pages-layout/pages-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: PagesLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "forms",
    component: PagesLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./forms/forms.module").then((m) => m.FormsModule),
  },
  {
    path: "login",
    component: SigninComponent,
  }
];

const authroutes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
