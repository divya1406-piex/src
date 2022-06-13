import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

pId:number;
product:Product;

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.pId=this.route.snapshot.params[`pId`];
    this.product=new Product();
    this.productService.getProductbyid(this.pId).subscribe(
      data=>{console.log(data),
      this.product=data;
    console.log(this.product);
 },
    error=>console.log(error));
  }

  cart(){
    this.router.navigate([`/products`]);
  }

}
