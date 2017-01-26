import { Component,OnInit } from '@angular/core';

import { UserService } from '../service/user.service';

@Component({
  selector: 'user-sugestion',
  template: require('./user-suggestion.component.html'),
})
export class UserSuggestionComponent implements OnInit{
  suggestions: any = [];
  page : number;
  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.page = 1;
    this.nextSuggestions();
  }
  getUserSuggestion(page : number): void{
    this.userService.getUserSugestion(page).subscribe(
        data => this.suggestions = data._embedded.items,
        error => console.log(error),
        () => this.nextPage()
    );
  }
  nextSuggestions(): void{
      this.getUserSuggestion(this.page);
  }
  nextPage(): void{
    console.log('finish');
    this.page = this.page + 1;
  }

}
