"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../service/user.service");
var RegisterSocialComponent = (function () {
    function RegisterSocialComponent(userService) {
        this.userService = userService;
        this.infos = {
            "google": {
                "clientId": "930057129388-e7uhda305urca6q607aqkj6jjlskqs3b.apps.googleusercontent.com"
            },
            "facebook": {
                "clientId": "1789365264721334",
                "apiVersion": "v2.4"
            }
        };
    }
    RegisterSocialComponent.prototype.ngOnInit = function () {
        this.initFacebookConnect(this.infos['facebook']);
        this.initGoogleConnect(this.infos['google']);
    };
    //recuperer les informations fourni par notre apps facebook
    //enregistrer si ce la premiere fois, connecter site ce la Neme fois
    RegisterSocialComponent.prototype.facebookConnect = function () {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                // connected
                alert('Already connected, redirect to login page to create token.');
                //document.location = "{{ url("hwi_oauth_service_redirect", {service: "facebook"}) }}";
            }
            else {
                // not_authorized
                FB.login(function (response) {
                    if (response.authResponse) {
                        alert('new connexion');
                        //document.location = "{{ url("hwi_oauth_service_redirect", {service: "facebook"}) }}";
                    }
                    else {
                        alert('Cancelled.');
                    }
                }, { scope: 'email' });
            }
        });
    };
    //recuperer les informations fourni par notre app google
    //enregistrer si ce la premiere fois, connecter site ce la Neme fois
    RegisterSocialComponent.prototype.googleConnect = function () {
        var _this = this;
        if (typeof (this.gauth) == "undefined") {
            this.gauth = gapi.auth2.getAuthInstance();
        }
        this.gauth.signIn().then(function () {
            var profile = _this.gauth.currentUser.get().getBasicProfile();
            var idToken = _this.gauth.currentUser.get().getAuthResponse().id_token;
            _this.user = {
                token: idToken,
                uid: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                image: profile.getImageUrl(),
                provider: "google"
            };
        });
    };
    //load facebooksdk and initialise facebook app
    RegisterSocialComponent.prototype.initFacebookConnect = function (info) {
        var d = document, fbJs, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById('facebook-jssdk') == null) {
            fbJs = d.createElement('script');
            fbJs.id = id;
            fbJs.async = true;
            fbJs.src = "//connect.facebook.net/en_US/sdk.js";
            fbJs.onload = function () {
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
    };
    //load google plateformjs initialise google app
    RegisterSocialComponent.prototype.initGoogleConnect = function (info) {
        var d = document, gJs, id = 'googleplatform', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById('googleplatform') == null) {
            gJs = d.createElement('script');
            gJs.id = id;
            gJs.async = true;
            gJs.src = "//apis.google.com/js/platform.js";
            gJs.onload = function () {
                gapi.load('auth2', function () {
                    gapi.auth2.init({
                        client_id: info["clientId"],
                        scope: 'email'
                    });
                });
            };
            ref.parentNode.insertBefore(gJs, ref);
        }
    };
    return RegisterSocialComponent;
}());
RegisterSocialComponent = __decorate([
    core_1.Component({
        selector: 'register-social',
        templateUrl: './register-social.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], RegisterSocialComponent);
exports.RegisterSocialComponent = RegisterSocialComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/8204c116793158c081f9cab04349e7b63c78d5eb4977c2aab4d3428c2b7351f0.js.map