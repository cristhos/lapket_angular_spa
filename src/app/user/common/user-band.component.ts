import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-band',
  providers: [UserService],
  templateUrl: './user-band.component.html',
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
    this.user_detail.is_follow_it = true;
    this.userService.postFollow(user_id).subscribe(
        data =>{
         //illusion optique
        },
        error =>{
          console.log(error);
          this.user_detail.is_follow_it = true;
        } ,
        () =>{
          this.loading = false;
           console.log("finish");
        }
    );
  }
  removeFollow(user_id : any){
    this.loading = true;
    this.user_detail.is_follow_it = false;
    this.userService.removeFollow(user_id).subscribe(
        data =>{
          //illusion optique
        },
        error =>{
          console.log(error);
          this.user_detail.is_follow_it = true;
        },
        () =>{
          this.loading = false;
          console.log("finish");
        }
    );
  }
}
