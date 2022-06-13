import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
pId:number;
product:Product=new Product();
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.pId=this.route.snapshot.params[`pId`];
    this.productService.getProductbyid(this.pId).subscribe(
      data=>{console.log(data),
      this.product=data;},
    error=>console.log(error)
    );
  }
 updateProductbyid(){
   this.productService.updateProductbyid(this.pId,this.product).subscribe(
     data=>{console.log(data),
    this.router.navigate([`/products`])},
    error=>console.log(error)
   );
 
 }
 onSubmit(){
 
   this.updateProductbyid();

 }
//  gotoList()
//  {
//    this.router.navigate([`/products`])
//  }
}
