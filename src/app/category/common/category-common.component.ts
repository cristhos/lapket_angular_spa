import { Component, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'category-common',
  templateUrl: './category-common.component.html',
  styleUrls : ['./category-common.component.css']
})

export class CategoryCommonComponent {
  @Input()
  category : any;

  constructor(private categoryService : CategoryService,
              private router: Router) {}

  postCategoryFollow(category_id: any){
    
    if(this.buttonGuard() == true){
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
    }else{
       this.buttonGuardRedirect();
    }

  }
  
  removeCategoryFollow(category_id: any){
    if(this.buttonGuard() == true){
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
    }else{
       this.buttonGuardRedirect();
    }
    
  }

  buttonGuard(){
    if(localStorage.getItem("access_token")){
      return true;
    }else{
      return false;
    }
  }
 
 buttonGuardRedirect(){
   if(window.confirm('Voulez-vous vous connecter pour effectuer cette action ?'))
    {
      this.router.navigateByUrl('/login');
    }
 }

}
