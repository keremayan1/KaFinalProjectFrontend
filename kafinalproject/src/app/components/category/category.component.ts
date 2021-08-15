import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { CategoryResponseModel } from 'src/app/models/categoryResponseModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  apiURL = 'https://localhost:44383/api/categories/getall';
  categories: Category[] = [];
  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts(); 
  }
  getProducts() {
    this.HttpClient.get<CategoryResponseModel>(this.apiURL).subscribe(
      (response) => {
        this.categories = response.data;
      }
    );
  }
}
