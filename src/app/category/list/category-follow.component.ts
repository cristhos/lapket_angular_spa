import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'follow-category',
  templateUrl: './category-follow.component.html',
  styles: [`
  .card-panel {
      padding: 5px;
}
  `],
})

export class CategoryFollowComponent {
  categories : Object;
  categories_loading: boolean;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }
   getCategories(): void {
    this.categories_loading = true;
    this.categoryService.getCategoryFollow().subscribe(
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
