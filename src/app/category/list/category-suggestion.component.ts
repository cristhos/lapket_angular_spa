import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'category-suggestion',
  template: require('./category-suggestion.component.html'),
  styles: [`
  `],
})

export class CategorySuggestionComponent {
  categories : Object;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    let limit = 21;
    this.categoryService.getCategory(limit).subscribe(
        data => this.categories = data,
        error => console.log(error),
        () => console.log("finish")
    );
  }
  refreshPage(){
    window.location.reload();
  }
}
