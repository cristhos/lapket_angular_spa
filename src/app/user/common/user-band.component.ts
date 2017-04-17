import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

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
  constructor(
    private userService : UserService,
    private router: Router) {}

  postFollow(user_id: any){
    
     if(this.buttonGuard() == true){
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
            console.log("finish");
          }
       );
     }else{
       this.buttonGuardRedirect();
     }
  }
  removeFollow(user_id : any){

     if(this.buttonGuard() == true){
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
            console.log("finish");
          }
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
