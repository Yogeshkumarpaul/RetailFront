import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"Company", component:CompanyComponent}, 
  {path:"Customer", component:CustomerComponent}, 
  {path:"Product", component:ProductsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [CompanyComponent,CustomerComponent,ProductsComponent];