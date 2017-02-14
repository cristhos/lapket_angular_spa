import { Component } from '@angular/core';
import {  UserService } from '../service/user.service';

@Component({
  selector: 'register-social',
  template:require('./register-social.component.html')
})

export class RegisterSocialComponent {

  constructor(private userService : UserService){}

  facebookConnect(){
    this.userService.facebookConnect().subscribe(
        data =>{
          //connexion avec rapide avec facebook
        },
        error => console.log(error),
        () =>{
           console.log("finish");
        }
    );
  }
 
  googleConnect(){
    this.userService.googleConnect().subscribe(
        data =>{
          //connexion rapide avec google
        },
        error => console.log(error),
        () =>{
           console.log("finish");
        }
    );
  }
}
