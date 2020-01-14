import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor( private service: ProductService,
    private toastr: ToastrService ) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pro: Product){
    this.service.formdata =  Object.assign({}, pro);
  }

  
  ondelete(ProductId: Number){
    if(confirm("Are you sure to delete this record?")){
    if (ProductId != null)
    this.deleteRecord(ProductId);
  }
}
  deleteRecord(Id: Number){
    this.service.deleteProduct(Id).subscribe(res =>{
      this.toastr.success("Deleted Successfully", 'Product Register');
    this.service.refreshList();
})
  }


}
