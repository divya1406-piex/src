import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl1="http://localhost:8089/api/payment";
  private baseUrl2="http://localhost:8089/api/payment";
  private baseUrl3="http://localhost:8089/api/payment";
  private baseUrl4="http://localhost:8089/api/payment/getPayment";
  private baseUrl5="http://localhost:8089/api/payment";

  constructor(private _http:HttpClient) { }

  viewPayment():Observable<Payment[]>{
    return this._http.get<Payment[]>(`${this.baseUrl1}`);
  }

  
    // makePayment(payment:Object,cId:number):Observable<Object>{
    //   return this._http.post(`${this.baseUrl2}/${cId}`,payment);
    // }
    makePayment(payment:Payment,cId:number):Observable<any>{
      return this._http.post<any>(`${this.baseUrl2}/${cId}`,payment);
    }


    getPaymentById(payId:number):Observable<Payment>{
      return this._http.get<Payment>(`${this.baseUrl4}/${payId}`);
    }

    updatePayment(payId:number,payment:Payment):Observable<Object>{
      return this._http.put(`${this.baseUrl5}/${payId}`,payment);
    }
  
    deletePayment(payId:number):Observable<any>{
      return this._http.delete(`${this.baseUrl3}/${payId}`);
    }
  
}
