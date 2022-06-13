import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
cId:number;
cartId:number;
carts:Cart[];
a:number;
i:number;
cart:Cart=new Cart();
c:Cart=new Cart();
payments:Payment=new Payment();

constructor(private route:ActivatedRoute,private router:Router,private cartService:CartService,private paymentService:PaymentService) { }

ngOnInit(): void {
  this.cId=this.route.snapshot.params[`cId`];
  // this.getCartList();
  this.getCartProductByCustomerID();
  this.cartId=this.route.snapshot.params[`cartId`];

}

getCartProductByCustomerID(){
  this.cartService.getCartById(this.cId).subscribe(
    data=>{console.log(data),
    this.carts=data;},
  error=>console.log(error),
  );
 
}
// private getCartList(){
    
//   this.cartService.getCartList().subscribe(data=>{
//  // console.log(data),
//   this.carts=data;
  
//   });
// console.log("the length of the array is: "+this.carts.length);
  
// }
deleteProductbyid(cartId:number){
  
  this.cartService.deleteCartById(cartId).subscribe(
    data=>{console.log(data),
      this.getCartProductByCustomerID();
    },
    error=>console.log("error")
  );
}

// addToCart(product: any)
// {
//   console.log("cart"+this.cart);
//   this.cartService.addProductToCart(this.cart,this.cId).subscribe(data=>{console.log(data);},
   
//   error=>console.log(error)
//   );
  
// }

updateProductbyid(){
  this.cartService.updateCartBycartId(this.cartId,this.cart).subscribe(
    data=>{console.log(data);},
   error=>console.log(error)
  );

}

backToList(){
 
  this.router.navigate([`/cplist`,this.cId]);
 
}
payment()
{
this.router.navigate([`payment`,this.cId]);
 
// this.a=this.carts.length;
// while(this.a>0)
// {
//   this.i=0;
// this.c=this.carts[this.i];
// this.deleteProductbyid(this.c.cartId);
// this.i++;
// this.a--;
// }
}
}
