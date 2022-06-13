import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

product:Product=new Product();

constructor(private router:Router,private productService:ProductService) { }

ngOnInit(): void {
  
}

onSubmit(){
  this.saveProduct();
}

gotoList()
{
  this.router.navigate([`/products`]);
}

saveProduct()
{
  this.productService.addProduct(this.product).subscribe(data=>{console.log(data),
    this.gotoList();},
  error=>console.log(error)
  );
  
}
}
