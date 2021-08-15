import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todos';
import { Observable, Observer } from 'rxjs';
import { TodosResponseModel } from '../models/todosResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl="https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Todo[]>{
      return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}
