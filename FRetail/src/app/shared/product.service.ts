import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Typedetails } from './typedetails.model';

let users = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', username: 'test', password: 'test' }];



@Injectable({
  providedIn: 'root'
})
export class ProductService {
formdata: Product;
list: Product[];
typelist: Typedetails[];
readonly rootUrl = "https://localhost:44368/api";
//>readonly rootUrl = "http://localhost/RetailApi";

constructor(private http: HttpClient) { }

  postProduct(formdata:Product){
    formdata.ProductId =  Number(formdata.ProductId) 
  return  this.http.post(this.rootUrl+'/Products',formdata);
  }

  putProduct(formdata:Product){
    return  this.http.put(this.rootUrl+'/Products/'+ formdata.ProductId ,formdata);
    }

  deleteProduct(Id: Number){
      return  this.http.delete(this.rootUrl+'/Products/'+ Id);
      }
    
  refreshList(){
    this.http.get(this.rootUrl+'/Products')
    .toPromise().then(res=> this.list = res as Product[]);

    }

    colorList(){
      this.http.get(this.rootUrl+'/TypeDetails')
      .toPromise().then(res=> this.typelist = res as Typedetails[]);
  
      }

}
