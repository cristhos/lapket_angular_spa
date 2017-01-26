import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'follow-category',
  template: require('./category-follow.component.html'),
  styles: [`
  `],
})

export class CategoryFollowComponent {
  categories : Object;
  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategoryFollow().subscribe(
        data => this.categories = data._embedded.items,
        error => console.log(error),
        () => console.log("finish")
    );
  }
}
