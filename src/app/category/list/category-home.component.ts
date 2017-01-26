import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'home-category',
  template: require('./category-home.component.html'),
  styles: [`
  `],
})

export class CategoryHomeComponent {
  categories : Object;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    let page = 1;
    let limit = 8;
    this.categoryService.getCategory(limit).subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }
}
