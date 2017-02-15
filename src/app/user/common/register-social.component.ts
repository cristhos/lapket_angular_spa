import { Component } from '@angular/core';
import {  UserService } from '../service/user.service';

declare let gapi: any;
declare let FB: any;

@Component({
  selector: 'register-social',
  template:require('./register-social.component.html')
})

export class RegisterSocialComponent {
  gauth: any;
  infos = {
    "google": {
      "clientId": "GOOGLE_CLIENT_ID"
    },
    "facebook": {
      "clientId": "FACEBOOK_CLIENT_ID",
      "apiVersion": "v2.4"
    }
  };

  constructor(private userService : UserService){}

  //recuperer les informations fourni par notre apps facebook
  //enregistrer si ce la premiere fois, connecter site ce la Neme fois
  facebookConnect(){
    this.initFacebookConnect(this.infos['facebook']);
    
    let user = [];
    
    this.userService.facebookConnect(user).subscribe(
        data =>{
          //connexion avec rapide avec facebook
        },
        error => console.log(error),
        () =>{
           console.log("finish");
        }
    );
  }
 
  //recuperer les informations fourni par notre app google
  //enregistrer si ce la premiere fois, connecter site ce la Neme fois
  googleConnect(){

    this.initGoogleConnect(this.infos['google']);
    
    let user = [];
    
    this.userService.googleConnect(user).subscribe(
        data =>{
          //connexion rapide avec google
        },
        error => console.log(error),
        () =>{
           console.log("finish");
        }
    );
  }

  initFacebookConnect(info){
    let d = document, fbJs, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    fbJs = d.createElement('script');
    fbJs.id = id;
    fbJs.async = true;
    fbJs.src = "//connect.facebook.net/en_US/sdk.js";

    fbJs.onload = function() {
      FB.init({
          appId: info["clientId"],
          status: true,
          cookie: true,
          xfbml: true,
          version: info["apiVersion"]
      });
    };
    ref.parentNode.insertBefore(fbJs, ref);
  }

  initGoogleConnect(info){
    let d = document, gJs, ref = d.getElementsByTagName('script')[0];
    gJs = d.createElement('script');
    gJs.async = true;
    gJs.src = "//apis.google.com/js/platform.js";

    gJs.onload = function() {
        gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: info["clientId"],
                scope: 'email'
            })
       })
    }

    ref.parentNode.insertBefore(gJs, ref);

  }
}
