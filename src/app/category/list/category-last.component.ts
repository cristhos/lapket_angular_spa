import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'last-category',
  templateUrl: './category-last.component.html',
  styles: [`
  .card-panel {
      padding: 5px;
  }
  .card .card-image img {
    height:150px;
  }
  `],
})

export class CategoryLastComponent {
  categories : Object;
  categories_loading: boolean;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categories_loading = true;
    let limit = 4;
    this.categoryService.getCategory(limit).subscribe(
        data =>{
          this.categories = data._embedded.items;
          this.categories_loading = false;
        },
        error =>{
          console.log(error);
          this.categories_loading = false;
        },
        () =>{
          console.log("finish");
          this.categories_loading = false;
        } 
    );
  }
}
