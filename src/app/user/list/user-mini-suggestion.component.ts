import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-mini-sugestion',
  templateUrl: './user-mini-suggestion.component.html',
  styles: [`
  `],

})

export class UserMiniSuggestionComponent {
  suggestions : Object;
  page: number;
  pages : number;
  suggestions_loading:boolean;

  constructor(private userService : UserService) {
    this.page = 1;
    this.nextSuggestions();
  }
  getUserSuggestion(page: number){
    this.suggestions_loading = true;
    this.userService.getUserMiniSugestion(page).subscribe(
        data =>{
          this.refreshData(data);
          this.suggestions_loading = false;
        }, 
        error =>{
          console.log(error);
          this.suggestions_loading = false;
        },
        () =>{
          this.nextPage();
          this.suggestions_loading = false;
        } 
    );
  }
  nextSuggestions(){
      this.getUserSuggestion(this.page);
  }
  nextPage(){
    console.log('finish');
    if(this.pages != null){
      if(this.page >= this.pages){
        this.page = 1;
      }else {
        this.page = this.page + 1;
      }
    }
  }
  refreshData(data : any){
    this.suggestions = data._embedded.items;
    this.pages = data.pages;
  }
}
