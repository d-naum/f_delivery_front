import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsComponent } from "./components/dashboard/cards/cards.component";
import { DailyTrendingComponent } from "./components/dashboard/daily-trending/daily-trending.component";
import { OrderSummaryComponent } from "./components/dashboard/order-summary/order-summary.component";
import { NgMaterialModule } from "../material";

@NgModule({
  declarations: [CardsComponent, DailyTrendingComponent, OrderSummaryComponent],
  imports: [CommonModule, NgMaterialModule],
  exports: [CardsComponent, DailyTrendingComponent, OrderSummaryComponent],
})
export class WidgetsModule {}
