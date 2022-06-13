import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  cId:number;
  userName:string;
  customer=new Customer();
  message=""
    constructor(private route:ActivatedRoute,private customerService:CustomerService,private routes:Router) { }
  
    ngOnInit(): void {
      // this.userName=this.route.snapshot.params[`userName`];

    }
    customerLogin()
  {
  this.customerService.customerLoginService(this.customer).subscribe(
    data =>{console.log("Logined Succesfully",this.customer),this.cId=data.cId,
    alert("Successfully logined"),
  this.routes.navigate([`/cplist`,this.cId])},
   error =>{console.log("Login  failed ",this.customer),
    this.message="login failed. enter valid email and password"}
  )
  }
  onClick()
  {
    this.routes.navigate([`reset`,this.userName]);
  }
}
