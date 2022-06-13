import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[];
  constructor(private productService:ProductService,private router :Router) { }

  ngOnInit():void  {
    this.getProductList();
  }
   
  private getProductList(){
    
    this.productService.getProductlist().subscribe(data=>{
    console.log(data),
    this.products=data;
    });
    
  }
    
  deleteProductbyid(pId:number){
    this.productService.deleteProductbyid(pId).subscribe(
      data=>{console.log(data),
        this.getProductList();
      },
      error=>console.log("error")
    );
  }
  
  getProductbyid(pId:number)
  {
    this.router.navigate([`details`,pId]);
  }
  updateProductbyid(pId:number)
  {
    this.router.navigate([`update`,pId]);
  }
}

