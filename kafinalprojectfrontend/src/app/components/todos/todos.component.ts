import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todosService:TodosService) {}

  ngOnInit(): void {
this.getProducts();
  }
  getProducts(){
    this.todosService.getProducts().subscribe(response=>{
    this.todos = response
    })
  }
}
