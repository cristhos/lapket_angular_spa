import { Component,OnInit } from '@angular/core';

import { UserService } from '../service/user.service';

@Component({
  selector: 'user-sugestion',
  templateUrl: './user-suggestion.component.html',
})
export class UserSuggestionComponent implements OnInit{
  suggestions: any = [];
  page : number;
  suggestions_loading : boolean;

  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.page = 1;
    this.nextSuggestions();
  }
  getUserSuggestion(page : number): void{
    this.suggestions_loading = true;
    this.userService.getUserSugestion(page).subscribe(
        data =>{
           this.suggestions = data._embedded.items;
           this.suggestions_loading = false;
        },
        error =>{
           console.log(error)
           this.suggestions_loading = false;
        },
        () =>{
           this.nextPage();
           this.suggestions_loading = false;
        } 
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
