import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
formdata: Product;
list: Product[];
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
}
