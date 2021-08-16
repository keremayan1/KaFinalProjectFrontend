import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todos';
import { Observable, Observer } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl="https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Todo[]>>{
      return this.httpClient.get<ListResponseModel<Todo[]>>(this.apiUrl);
  }
}
