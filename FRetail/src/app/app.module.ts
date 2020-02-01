import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './shared/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './shared/product.model';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';

import { fakeBackendProvider } from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    CompanyComponent,
    CustomerComponent,
    RoutingComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProductService,
    fakeBackendProvider
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
