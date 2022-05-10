import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/home/home.component";
import {FoodMenuComponent} from "./ui/food-menu/food-menu.component";
import {AboutComponent} from "./ui/about/about.component";
import {TestimonialComponent} from "./ui/testimonial/testimonial.component";
import {OrdersComponent} from "./ui/orders/orders.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'foodMenu', component: FoodMenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'testimonial', component: TestimonialComponent},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
