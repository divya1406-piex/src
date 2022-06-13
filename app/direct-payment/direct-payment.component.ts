import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direct-payment',
  templateUrl: './direct-payment.component.html',
  styleUrls: ['./direct-payment.component.css']
})
export class DirectPaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate([``]);
  }

}
