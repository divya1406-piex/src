import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  payId:number;
  payments:Payment;
  paymenty:Payment[];
  payment:Payment=new Payment();
  constructor(private route:ActivatedRoute,private router:Router,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.payId=this.route.snapshot.params[`payId`];
    this.paymentService.getPaymentById(this.payId).subscribe(
      data=>{console.log(data),
      this.payment=data;},
    error=>console.log(error)
    );
  }

  updateProductbyid(){
    this.paymentService.updatePayment(this.payId,this.payment).subscribe(
      data=>{console.log(data);
     this.router.navigate([`/directpay`]);
},
     error=>console.log(error)
    );
  
  }
  onClick(){
    this.updateProductbyid();
  }
}
