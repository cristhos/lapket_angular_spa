import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'category-suggestion',
  templateUrl: './category-suggestion.component.html',
  styles: [`
  .card-panel {
      padding: 5px;
}
  `],
})

export class CategorySuggestionComponent {
  categories : Object;
  categories_loading:boolean;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categories_loading = true;
    let limit = 21;
    this.categoryService.getCategory(limit).subscribe(
        data =>{
          this.categories = data;
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
  refreshPage(){
    window.location.reload();
  }
}
