import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-mini-sugestion',
  template: require('./user-mini-suggestion.component.html'),
  styles: [`
  `],

})

export class UserMiniSuggestionComponent {
  suggestions : Object;
  page: number;
  pages : number;
  constructor(private userService : UserService) {
    this.page = 1;
    this.nextSuggestions();
  }
  getUserSuggestion(page: number){
    this.userService.getUserMiniSugestion(page).subscribe(
        data => this.refreshData(data),
        error => console.log(error),
        () => this.nextPage()
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
