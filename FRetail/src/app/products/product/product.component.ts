import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service : ProductService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
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
      MagUnitID: null 
    }
  }
  
  onSubmit(form: NgForm){
    if (form.value.ProductId ==null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
    
  }

  
  insertRecord(form:NgForm){
    this.service.postProduct(form.value).subscribe(res =>{
    this.toastr.success("Inserted Successfully", 'Product Register');
    this.resetForm(form);
    this.service.refreshList();
})
  }

  updateRecord(form:NgForm){
    this.service.putProduct(form.value).subscribe(res =>{
    this.toastr.success("Updated Successfully", 'Product Register');
    this.resetForm(form);
    this.service.refreshList();
    })
  }

  clearform(form: NgForm){
    form.reset();
  }

}
