import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl1="http://localhost:8089/api/product/getProduct";
private baseUrl2="http://localhost:8089/api/product";
private baseUrl3="http://localhost:8089/api/product";
private baseUrl4="http://localhost:8089/api/product";
private baseUrl5="http://localhost:8089/api/product";
private baseUrl6="http://localhost:8089/api/product";

  constructor(private _http:HttpClient) { }

  getProductlist():Observable<Product[]>{
    return this._http.get<Product[]>(`${this.baseUrl5}`);
  }

  addProduct(product:Object):Observable<Object>{
    return this._http.post(`${this.baseUrl2}`,product);
  }

  getProductbyid(pId:number):Observable<Product>{
    return this._http.get<Product>(`${this.baseUrl1}/${pId}`);
  }

  updateProductbyid(pId:number,product:Product):Observable<Object>{
    return this._http.put(`${this.baseUrl3}/${pId}`,product);
  }

  deleteProductbyid(pId:number):Observable<any>{
    return this._http.delete(`${this.baseUrl4}/${pId}`);
  }

  getProductbyName(pName:String):Observable<Product>{
    return this._http.get<Product>(`${this.baseUrl6}/${pName}`);
  }

  

}
