import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-band',
  providers: [UserService],
  template:require('./user-band.component.html'),
  styles : [`
    .card-action, card-content{
       padding: 0px;
    }
    #band-drop {
      min-width: 160px;
    }
  `]
})

export class UserBandComponent {
  @Input()
  user_detail ;

  loading: boolean;
  constructor(private userService : UserService) {
    this.loading = false;
  }

  postFollow(user_id: any){
    this.loading = true;
    this.userService.postFollow(user_id).subscribe(
        data =>{
          this.user_detail = data;
          this.user_detail.is_follow_it = true;
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
          this.user_detail = data;
          this.user_detail.is_follow_it = false;
        },
        error => console.log(error),
        () =>{
          this.loading = false;
          console.log("finish");
        }
    );
  }
}
