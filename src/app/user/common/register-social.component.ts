import { Component, OnInit } from '@angular/core';
import {  UserService } from '../service/user.service';

declare let gapi: any;
declare let FB: any;

@Component({
  selector: 'register-social',
  templateUrl: './register-social.component.html'
})

export class RegisterSocialComponent implements OnInit {
  user : any;
  gauth:any;
  infos = {
    "google": {
      "clientId": "930057129388-e7uhda305urca6q607aqkj6jjlskqs3b.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "1789365264721334",
      "apiVersion": "v2.4"
    }
  };

  constructor(private userService : UserService){}
  
  ngOnInit(){
    this.initFacebookConnect(this.infos['facebook']);
    this.initGoogleConnect(this.infos['google']);
  }
  //recuperer les informations fourni par notre apps facebook
  //enregistrer si ce la premiere fois, connecter site ce la Neme fois
  facebookConnect(){
    FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // connected
                    alert('Already connected, redirect to login page to create token.');
                    //document.location = "{{ url("hwi_oauth_service_redirect", {service: "facebook"}) }}";
                } else {
                    // not_authorized
                    FB.login(function(response) {
                        if (response.authResponse){
                            
                            alert('new connexion');
                            //document.location = "{{ url("hwi_oauth_service_redirect", {service: "facebook"}) }}";
                        } else {
                            alert('Cancelled.');
                        }
                    }, {scope: 'email'});
                }
    });

  }
 
  //recuperer les informations fourni par notre app google
  //enregistrer si ce la premiere fois, connecter site ce la Neme fois
  googleConnect(){
    if (typeof(this.gauth) == "undefined"){
        this.gauth = gapi.auth2.getAuthInstance();
    }
    this.gauth.signIn().then(() => {
        let profile = this.gauth.currentUser.get().getBasicProfile();
        let idToken = this.gauth.currentUser.get().getAuthResponse().id_token;
        this.user = {
                      token: idToken,
                      uid: profile.getId(),
                      name: profile.getName(),
                      email: profile.getEmail(),
                      image: profile.getImageUrl(),
                      provider: "google"
                    };                        
    })
    
  }

  //load facebooksdk and initialise facebook app
  initFacebookConnect(info){
    
    let d = document, fbJs, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];

    if(d.getElementById('facebook-jssdk') == null){
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
  }
  
  //load google plateformjs initialise google app
  initGoogleConnect(info){
    let d = document, gJs, id = 'googleplatform', ref = d.getElementsByTagName('script')[0];

    if(d.getElementById('googleplatform') == null){
      gJs = d.createElement('script');
      gJs.id = id;
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
}
