import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'all-category',
  template: require('./category-list.component.html'),
  styles: [`
  `],
})

export class CategoryListComponent {
  categories : Object;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    let limit = 16;
    this.categoryService.getCategory(limit).subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }
}
