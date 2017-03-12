import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-suggestion-common',
  templateUrl: './user-suggestion-common.component.html',
  styles : [`
    .collection-item{
      position: relative;
    }

  `]
})

export class UserSuggestionCommonComponent {
  @Input()
  suggestion ;

  loading: boolean;
  constructor(private userService : UserService) {
    this.loading = false;
  }

  postFollow(user_id: any){
    this.loading = true;
    this.userService.postFollow(user_id).subscribe(
        data =>{
          this.suggestion = data;
          this.suggestion.is_follow_it = true;
        },
        error => console.log(error),
        () =>{
          this.loading = false;
           console.log("finish");
        }
    );
  }
  removeFollow(user_id : any){
    this.loading = true;
    this.userService.removeFollow(user_id).subscribe(
        data =>{
          this.suggestion = data;
          this.suggestion.is_follow_it = false;
        } ,
        error => console.log(error),
        () =>{
          this.loading = false;
          console.log("finish");
        }
    );
  }
}
