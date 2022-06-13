import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registor',
  templateUrl: './customer-registor.component.html',
  styleUrls: ['./customer-registor.component.css']
})
export class CustomerRegistorComponent implements OnInit {
  customer=new Customer();
  message=""
    constructor(private customerService:CustomerService,private router:Router) { }
  
    ngOnInit(): void {
    }
    customerRegister()
  {
  this.customerService.customerRegisterService(this.customer).subscribe(
    data =>{console.log("Registered Succesfully"),
    this.router.navigate(['\customerlogin']);},
    error =>{console.log("Register  failed"),
    this.message="Register failed"}
  )
  }
}
