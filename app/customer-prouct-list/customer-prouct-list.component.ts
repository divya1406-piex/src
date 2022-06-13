import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customer-prouct-list',
  templateUrl: './customer-prouct-list.component.html',
  styleUrls: ['./customer-prouct-list.component.css']
})
export class CustomerProuctListComponent implements OnInit {
 cId:number;

  product=new Product();
  products:Product[];
  constructor(private route:ActivatedRoute,private productService:ProductService,private router :Router,private cartService:CartService) { }

  ngOnInit():void  {
this.cId=this.route.snapshot.params[`cId`];
    this.getProductList();


  }
   
  private getProductList(){
    
    this.productService.getProductlist().subscribe(data=>{
    console.log(data),
    this.products=data;
    });
    
  }
  addToCart(product: any)
{
  
  this.cartService.addProductToCart(product,this.cId).subscribe(data=>{console.log("hello"+data);},
   
  error=>console.log(error)
  );
  
}

goToCart(){
  this.router.navigate([`cart`,this.cId])
}

getByName(pName:string)
  {
    this.router.navigate([`search`,pName]);
    
  }

}
