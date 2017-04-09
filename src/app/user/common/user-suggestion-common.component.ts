import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-suggestion-common',
  templateUrl: './user-suggestion-common.component.html',
  styleUrls : ['./user-suggestion-common.component.css']
})

export class UserSuggestionCommonComponent {
  @Input()
  suggestion ;

  loading: boolean;
  constructor(private userService : UserService) {
    this.loading = false;
  }

  postFollow(user_id: any){
    this.suggestion.is_follow_it = true;
    this.userService.postFollow(user_id).subscribe(
        data =>{
          //illusion optique
        },
        error =>{
          console.log(error);
          this.suggestion.is_follow_it = false;
        } ,
        () =>{
           console.log("finish");
        }
    );
  }
  removeFollow(user_id : any){
    this.suggestion.is_follow_it = false;
    this.userService.removeFollow(user_id).subscribe(
        data =>{
          //illusion optique
        },
        error =>{
          console.log(error);
          this.suggestion.is_follow_it = true;
        },
        () =>{
          console.log("finish");
        }
    );
  }
}
