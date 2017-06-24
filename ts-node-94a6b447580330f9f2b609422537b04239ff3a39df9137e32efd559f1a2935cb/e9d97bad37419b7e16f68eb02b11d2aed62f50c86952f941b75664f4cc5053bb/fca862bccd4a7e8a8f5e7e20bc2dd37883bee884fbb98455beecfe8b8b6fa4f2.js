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
var router_1 = require("@angular/router");
var user_service_1 = require("../service/user.service");
var UserFollowerComponent = (function () {
    function UserFollowerComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserFollowerComponent.prototype.ngOnInit = function () {
        this.getUserDetail();
    };
    UserFollowerComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserFollowerComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.userService.getUser(username).subscribe(function (data) { return _this.user_detail = data; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
            _this.getFollowerAuthor(username);
        });
    };
    UserFollowerComponent.prototype.getFollowerAuthor = function (username) {
        var _this = this;
        this.userService.getFollowerAuthor(username).subscribe(function (data) { return _this.follows = data._embedded.items; }, function (error) { return console.log(error); }, function () { return console.log("finish"); });
    };
    return UserFollowerComponent;
}());
UserFollowerComponent = __decorate([
    core_1.Component({
        selector: 'user-follower',
        templateUrl: './user-follower.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], UserFollowerComponent);
exports.UserFollowerComponent = UserFollowerComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/fca862bccd4a7e8a8f5e7e20bc2dd37883bee884fbb98455beecfe8b8b6fa4f2.js.map