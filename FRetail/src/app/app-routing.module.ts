import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path:"Company", component:CompanyComponent}, 
  {path:"Customer", component:CustomerComponent}, 
  {path:"Product", component:ProductComponent},
  {path:"Products", component:ProductsComponent},
  {path:"ProductList", component:ProductListComponent},
  {path:"Sale", component:SaleComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [CompanyComponent,CustomerComponent,ProductComponent,ProductListComponent,ProductsComponent, SaleComponent];