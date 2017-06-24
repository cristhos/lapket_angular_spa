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
var UserMiniSuggestionComponent = (function () {
    function UserMiniSuggestionComponent(userService) {
        this.userService = userService;
        this.page = 1;
        this.nextSuggestions();
    }
    UserMiniSuggestionComponent.prototype.getUserSuggestion = function (page) {
        var _this = this;
        this.suggestions_loading = true;
        this.userService.getUserMiniSugestion(page).subscribe(function (data) {
            _this.refreshData(data);
            _this.suggestions_loading = false;
        }, function (error) {
            console.log(error);
            _this.suggestions_loading = false;
        }, function () {
            _this.nextPage();
            _this.suggestions_loading = false;
        });
    };
    UserMiniSuggestionComponent.prototype.nextSuggestions = function () {
        this.getUserSuggestion(this.page);
    };
    UserMiniSuggestionComponent.prototype.nextPage = function () {
        console.log('finish');
        if (this.pages != null) {
            if (this.page >= this.pages) {
                this.page = 1;
            }
            else {
                this.page = this.page + 1;
            }
        }
    };
    UserMiniSuggestionComponent.prototype.refreshData = function (data) {
        this.suggestions = data._embedded.items;
        this.pages = data.pages;
    };
    return UserMiniSuggestionComponent;
}());
UserMiniSuggestionComponent = __decorate([
    core_1.Component({
        selector: 'user-mini-sugestion',
        templateUrl: './user-mini-suggestion.component.html',
        styles: ["\n  "],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserMiniSuggestionComponent);
exports.UserMiniSuggestionComponent = UserMiniSuggestionComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/b4803f82caa86ecff84506bdc9c5a94ba7dfbafe1cbfca3fd7afa18b06a84d2e.js.map