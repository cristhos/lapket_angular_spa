import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'home-category',
  templateUrl: './category-home.component.html',
  styles: [`
  `],
})

export class CategoryHomeComponent {
  categories : Object;
  categories_loading : boolean;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categories_loading = true;
    let page = 1;
    let limit = 8;
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
