import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  cId:number;
  pName:string;
  product:Product;
  products:Product[];
  producty=new Product();
    constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService,private cartService:CartService) { }
  
    ngOnInit(): void {
    this.getByName(this.pName);
    }

    getByName(pName:string)
  {
    this.productService.getProductbyName(pName).subscribe(
      data=>{console.log(data),
      this.product=data;
    console.log(this.product);
 },
    error=>console.log(error));
  }

    addToCart(product: any)
{
  
  this.cartService.addProductToCart(product,this.cId).subscribe(data=>{console.log(data);},
   
  error=>console.log(error)
  );
  
}

}
