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
var http_1 = require("@angular/http");
var environment_1 = require("../../../environments/environment");
require("../../rxjs-operators");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.LAPKET_API_URL;
        //authentification_pro
        this.isLoggedIn = false; // L'utilisateur est-il connecté ?
        this.request = false; // avons nous verififier si l'utilisateur et connecté
        this.tokenUrl = this.baseUrl + "/api/oauth/v2/token";
        this.baseUrl = this.baseUrl + '/api/user';
        this.access_token = localStorage.getItem('access_token');
    }
    UserService.prototype.getClientId = function () {
        if (environment_1.environment.production) {
            this.client_id = "1_g1bs2j3lra0cs4goo4ss084wksskgk4gok8wsk48kkw48ksk4";
        }
        else {
            this.client_id = "1_3vze4od93m4g4k0coc48w4k0go4owcggs8kc4048w4sosoc4o4";
        }
        return this.client_id;
    };
    UserService.prototype.getClientSecret = function () {
        if (environment_1.environment.production) {
            this.client_secret = "47iyfy5o17gg0sso8og000wck4484swk8go0wos04ggc8s8ss0";
        }
        else {
            this.client_secret = "nvh0vprhc1wgssg08cks448w04g0o0owo8woc8ckw0ow048c4";
        }
        return this.client_secret;
    };
    UserService.prototype.login = function (user) {
        this.tokenUrl = this.tokenUrl
            + "?client_id=" + this.getClientId()
            + "&client_secret=" + this.getClientSecret()
            + "&username=" + user.username
            + "&password=" + user.password
            + '&grant_type=password';
        return this.http
            .get(this.tokenUrl)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.facebookConnect = function (user) {
        this.url = this.baseUrl + '/facebook/check-facebook.json';
        var body = JSON.stringify(user);
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.googleConnect = function (user) {
        this.url = this.baseUrl + '/google/check-google.json';
        var body = JSON.stringify(user);
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getRefreshToken = function () {
        this.tokenUrl = this.tokenUrl
            + "?client_id=" + this.getClientId()
            + "&client_secret=" + this.getClientSecret()
            + "&refresh_token=" + localStorage.getItem('refresh_token')
            + '&grant_type=refresh_token';
        return this.http
            .get(this.tokenUrl)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.register = function (user) {
        this.url = this.baseUrl + '/users.json';
        var body = JSON.stringify(user);
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.putUser = function (user) {
        this.url = this.baseUrl + '/user.json';
        var body = JSON.stringify(user);
        return this.http
            .put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.putPassword = function (model) {
        this.url = this.baseUrl + '/password?';
        var body = JSON.stringify(model);
        return this.http
            .put(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserSession = function () {
        this.url = this.baseUrl + '/user/status.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getPasswordRequestReset = function (email) {
        var host = window.location.origin + '/user/c/change-password';
        this.url = this.baseUrl + '/passwords/requests/reset.json?slug=' + email + '&host=' + host;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserMiniSugestion = function (page) {
        var limit = 3;
        this.url = this.baseUrl + '/user/sugestions.json?page=' + page + '&limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserSugestion = function (page) {
        var limit = 8;
        this.url = this.baseUrl + '/user/sugestions.json?page=' + page + '&limit=' + limit;
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (username) {
        this.url = this.baseUrl + '/users/' + username + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowerAuthor = function (username) {
        this.url = this.baseUrl + '/followers/' + username + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getFollowingAuthor = function (username) {
        this.url = this.baseUrl + '/followings/' + username + '.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.postFollow = function (user_id) {
        this.url = this.baseUrl + '/followers/' + user_id + '.json';
        var body = JSON.stringify({ user_id: user_id });
        return this.http
            .post(this.url, body)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.removeFollow = function (user_id) {
        this.url = this.baseUrl + '/followers/' + user_id + '/remove.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.logout = function () {
        this.url = this.baseUrl + '/user/logouts.json';
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/185c047ed0d80bf38a6e0532cfb653157621b54265a0a2b7b1fee176ca7d76fb.js.map