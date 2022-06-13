import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl="http://localhost:8089/api/cart/add";
  private baseUrl5="http://localhost:8089/api/cart";
  private baseUrl1="http://localhost:8089/api/cart/getProduct";
  private baseUrl2="http://localhost:8089/api/cart";
  private baseUrl4="http://localhost:8089/api/cart";


  constructor(private _http:HttpClient) { }

  addProductToCart(product:Product,cId:number):Observable<any>{
    return this._http.post<any>(`${this.baseUrl}/${cId}`,product);
  }

  // getCartList():Observable<Cart[]>{
  //   return this._http.get<Cart[]>(`${this.baseUrl5}`);
  // }

  getCartById(cId:number):Observable<Cart[]>{
    return this._http.get<Cart[]>(`${this.baseUrl1}/${cId}`);
  }

  updateCartBycartId(cartId:number,cart:Cart):Observable<Object>{
    return this._http.put(`${this.baseUrl2}/${cartId}`,cart);
  }

  deleteCartById(cartId:number):Observable<any>{
    return this._http.delete(`${this.baseUrl4}/${cartId}`);
  }
}
