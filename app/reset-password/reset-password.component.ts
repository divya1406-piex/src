import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userName:string;
customer:Customer=new Customer();
  constructor(private route:ActivatedRoute,private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.userName=this.route.snapshot.params[`userName`];
    this.customerService.getCustomerByUserName(this.userName).subscribe(
      data=>{console.log(data),
      this.customer=data;},
    error=>console.log(error)
    );
  }
  updateCustomer(){
   this.customerService.updateCustomerByUserName(this.userName,this.customer).subscribe(
     data=>{console.log(data),
    this.router.navigate([`/customerlogin`])},
    error=>console.log(error)
   );
 
 }
 onSubmit(){
 
   this.updateCustomer();

 }
}
