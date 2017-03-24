import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from './user/service/user.service';
import './rxjs-operators';
import	{Observable}	from	'rxjs/Observable';



@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls : ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
   user ;
   timerSub ;
   request : boolean;
   public constructor(private titleService: Title, private userService : UserService, public router: Router ) {}

  ngOnInit(){
      this.request = false;
      this.setTitle("Lapket");
      this.getInitialUser();
  }

    public setTitle( newTitle: string) {
      this.titleService.setTitle(newTitle);
    }

    public getInitialUser(){

        if(localStorage.getItem("new_token")){
          this.refreshToken();   
        }else{
          this.userService.getUserSession().subscribe(
            data =>{
              this.user = data;
              if(this.user.compte_state == false) this.router.navigate(['/user/r/step2']);
              this.request = true;
              localStorage.setItem("request","true");
              localStorage.setItem('user_id',this.user.id);
              this.subscribeToData();
            },
            error => {
                  this.request = true;
                  localStorage.setItem("request","true");
                   switch (error.status) {
                     case 401:
                           console.log('token expired')
                           this.refreshToken();
                       break;
                     case 403: 
                        console.log("Visiteur");  
                       break;
                     case 0 :
                        if(window.confirm('Aucune Connexion avec le serveur de resource! Voulez-vous actualiser')){
                            window.location.reload();
                        }
                       break;
                     default:
                        localStorage.clear();
                        localStorage.setItem("authent" , "N");
                       break;
                   }
                   
            },
            () =>{
              this.request = true;
              localStorage.setItem("request","true");
              console.log("finish");
            } 
        );

        }
        
  }

  //verify user session very time
  private subscribeToData(): void {
      if(localStorage.getItem("authent") == "O")
      {
          this.timerSub = Observable.timer(10000).subscribe(
            () => {
              this.getInitialUser();
            }
          );

      }
  }
 
  //refreshToken and reaload page
  public refreshToken()
  {
    this.request = true;
    localStorage.setItem('new_token','true');
    this.userService.getRefreshToken().subscribe(
        data => {
          
          localStorage.setItem("authent" , "O");
          localStorage.setItem("access_token" , data.access_token);
          localStorage.setItem("expires_in" , data.expires_in);
          localStorage.setItem("token_type" , data.token_type);
          localStorage.setItem("refresh_token" , data.refresh_token);
          localStorage.removeItem("new_token");

          this.userService.isLoggedIn = true;
          if (this.userService.isLoggedIn) {
             let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/';
             this.router.navigate([redirect]);
           }
          window.location.reload();
          
        },
        error =>{
          localStorage.clear();
          window.location.reload();
          console.log(error);
        },
        () => console.log("finish")
    );
  }
}
