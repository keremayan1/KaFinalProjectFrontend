import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'https://localhost:44366/api/products/';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath=this.apiURL+'getall'
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiURL + "getbycategory?categoryId="+categoryId
    
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
   
  } 
}
