import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl1="http://localhost:8089/api/customer/get";
  private baseUrl3="http://localhost:8089/api/customer";
  private baseUrl2="http://localhost:8089/api/customer/g";
  private baseUrl4="http://localhost:8089/api/customer/up";

  constructor(private _http:HttpClient) { }
  public customerRegisterService(customer:Customer):Observable<any>
  {
    return this._http.post<any>("http://localhost:8089/api/customer",customer)
  }
  public customerLoginService(customer:Customer):Observable<any>
  {
    return this._http.post<any>("http://localhost:8089/api/customer/login",customer)
  }
  getCustomerByIds(cId:number):Observable<Customer>{
    return this._http.get<Customer>(`${this.baseUrl1}/${cId}`);
  }

  updateCustomers(cId:number,customer:Customer):Observable<Object>{
    return this._http.put(`${this.baseUrl3}/${cId}`,customer);
  }
  getCustomerByUserName(userName:string):Observable<Customer>{
    return this._http.get<Customer>(`${this.baseUrl2}/${userName}`);
  }

  updateCustomerByUserName(userName:string,customer:Customer):Observable<Object>{
    return this._http.put(`${this.baseUrl4}/${userName}`,customer);
  }
}
