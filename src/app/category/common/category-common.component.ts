import { Component, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'category-common',
  templateUrl: './category-common.component.html',
  styleUrls : ['./category-common.component.css']
})

export class CategoryCommonComponent {
  @Input()
  category : any;

  constructor(private categoryService : CategoryService) {}

  postCategoryFollow(category_id: any){
    this.category.is_follow = true;
    this.categoryService.postCategoryFollow(category_id).subscribe(
        data => {
          //illusion optiques
        },
        error =>{
          console.log(error);
          this.category.is_follow = false;
        },
        () => console.log("finish")
    );
  }
  
  removeCategoryFollow(category_id: any){
    this.category.is_follow = false;
    this.categoryService.deleteCategoryFollow(category_id).subscribe(
        data => {
          //illusion optique
        },
        error =>{
           console.log(error)
          this.category.is_follow = true;
        },
        () => console.log("finish")
    );
  }

}
