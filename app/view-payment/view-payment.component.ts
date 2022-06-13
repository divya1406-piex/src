import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  payments:Payment[];

  constructor(private router:Router,private paymentService:PaymentService) { }

  ngOnInit():void  {
    this.getPaymentList();
  }
   
  private getPaymentList(){
    
    this.paymentService.viewPayment().subscribe(data=>{
    console.log(data),
    this.payments=data;
    });
    
  }
}
