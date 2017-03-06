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
  categories_loading : boolean;

  constructor(private categoryService : CategoryService) {
    this.getCategories();
  }

  getCategories(): void {
    this.categories_loading = true;
    this.categoryService.getCategory().subscribe(
        data =>{
          this.categories = data._embedded.items,
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
