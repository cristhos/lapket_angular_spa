import { Component, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'category-common',
  template: require('./category-common.component.html'),
  styles: [`
    .fa{
      color:#4db6ac;
    }
    .btn i{
      color:white;
    }
    a{
      color:black;
    }
  `],
})

export class CategoryCommonComponent {
  @Input()
  category : any;

  constructor(private categoryService : CategoryService) {}

  postCategoryFollow(category_id: any){
  this.categoryService.postCategoryFollow(category_id).subscribe(
      data => {
        this.category = data;
        //resoud le problème de mise en cache http
        this.category.is_follow = true;
      },
      error => console.log(error),
      () => console.log("finish")
  );
  }
  removeCategoryFollow(category_id: any){
    this.categoryService.deleteCategoryFollow(category_id).subscribe(
        data => {
          this.category = data;
            //resoud le problème de mise en cache http
          this.category.is_follow = false;
        },
        error => console.log(error),
        () => console.log("finish")
    );
  }

}
