import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'all-category',
  templateUrl: './category-list.component.html',
  styles: [`
  .card-panel {
      padding: 5px;
}
  `],
})

export class CategoryListComponent {
  categories : Object;
  categories_loading: boolean;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categories_loading = true;
    let limit = 32;
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
