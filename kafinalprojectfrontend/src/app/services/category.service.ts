import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiURL = 'https://localhost:44366/api/categories/';
  constructor(private httpClient: HttpClient) {}
  getCategories(): Observable<ListResponseModel<Category>> {
    let newPath = this.apiURL + 'getall';
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}
