import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-my-payment',
  templateUrl: './my-payment.component.html',
  styleUrls: ['./my-payment.component.css']
})
export class MyPaymentComponent implements OnInit {
  payId:number;
  cId:number;
  payment:Payment=new Payment();
  paymentType='';
  constructor(private route:ActivatedRoute,private router:Router,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.cId=this.route.snapshot.params[`cId`];
    console.log("*****************************************************"+this.cId);
    this.cId=this.route.snapshot.params[`payId`];
  }
form(){
  console.log("##################"+this.cId);
this.paymentService.makePayment(this.payment,this.cId).subscribe(data=>{
  console.log(this.payment),this.payId=data.payId,
  this.sample();
},error=>console.log("error")
);

}
sample()
{
  if(this.payment.paymentType=="Debit Card"){
    this.goToCard();
  }
  else
  {
    this.goToDirectPay();
  }
}
  goToCard()
  {
    this.router.navigate([`card`,this.payId]);
  }
  goToDirectPay()
  {
    this.router.navigate([`directpay`]);
  }
}
