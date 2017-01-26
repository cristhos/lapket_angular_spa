import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'menu-category',
  template: require('./category-menu.component.html'),
  styles: [`
  `],
})

export class CategoryMenuComponent {
  categories : Object;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }
}
