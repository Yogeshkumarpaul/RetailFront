import { Component, OnInit, ViewChild } from '@angular/core';
import { LargeTextCellEditor } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';

import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  //@ViewChild('agGrid') agGrid: AgGridAngular;

  readonly rootUrl = "https://localhost:44368/api";
  rowData: any;
  list: Product[];

  constructor(public service : ProductService,
    public toastr: ToastrService, public http:HttpClient)  {

  }

  
  resetForm(form?:NgForm){
    if (form != null)
      form.resetForm();

    this.service.formdata = {
      ProductId: null,
      ProductName: '',
      ProductTypeId: null,
      PRate: 0,
      MarginPer: 0,
      MarginAmount: 0,
      SRate: 0,
      InitStock: 0,
      MagUnitID: null, 
      ColorId: null,
      ManufacturerId: null,
      SupplierID: null,
      SizeId : null
    }
  }

  ngOnInit() {
    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    this.rowData = this.http.get(this.rootUrl+'/Products');
    //.toPromise().then(res=> this.list = res as Product[]);

    this.resetForm();
    this.service.refreshList();
  }


  columnDefs = [
    {headerName: 'ProductId', field: 'ProductId', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'ProductName', field: 'ProductName', sortable: true, filter: true},
    {headerName: 'ProductTypeId', field: 'ProductTypeId', sortable: true, filter: true},
    {headerName: 'PRate', field: 'PRate', sortable: true, filter: true},
    {headerName: 'MarginPer', field: 'MarginPer', sortable: true, filter: true},
    {headerName: 'MarginAmount', field: 'MarginAmount', sortable: true, filter: true},
    {headerName: 'SRate', field: 'SRate', sortable: true, filter: true},
    {headerName: 'InitStock', field: 'InitStock', sortable: true, filter: true},
    {headerName: 'MagUnitID', field: 'MagUnitID', sortable: true, filter: true},
    {headerName: 'ColorId', field: 'ColorId', sortable: true, filter: true},
    {headerName: 'ManufacturerId', field: 'ManufacturerId', sortable: true, filter: true},
    {headerName: 'SupplierID', field: 'SupplierID', sortable: true, filter: true},
    {headerName: 'SizeID', field: 'SizeID', sortable: true, filter: true},

];

// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

}
