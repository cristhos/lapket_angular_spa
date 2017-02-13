import { Component } from '@angular/core';
import {  UserService } from '../service/user.service';

@Component({
  selector: 'register-social',
  template:require('./register-social.component.html')
})

export class RegisterSocialComponent {

  constructor(private userService : UserService){}

  //besoin de contacter notre app facebook 
  //après validation redirection sur notre page d'aceuiil
  facebookConnect(){
    alert("facebook rapide");
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
  //besoin de contacter notre app google
  //après validation redirection sur notre page d'acceuil
  googleConnect(){
     alert("google rapide");
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
