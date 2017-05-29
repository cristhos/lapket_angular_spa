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
var UserSuggestionComponent = (function () {
    function UserSuggestionComponent(userService) {
        this.userService = userService;
        this.suggestions = [];
    }
    UserSuggestionComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.nextSuggestions();
    };
    UserSuggestionComponent.prototype.getUserSuggestion = function (page) {
        var _this = this;
        this.suggestions_loading = true;
        this.userService.getUserSugestion(page).subscribe(function (data) {
            _this.suggestions = data._embedded.items;
            _this.suggestions_loading = false;
        }, function (error) {
            console.log(error);
            _this.suggestions_loading = false;
        }, function () {
            _this.nextPage();
            _this.suggestions_loading = false;
        });
    };
    UserSuggestionComponent.prototype.nextSuggestions = function () {
        this.getUserSuggestion(this.page);
    };
    UserSuggestionComponent.prototype.nextPage = function () {
        console.log('finish');
        this.page = this.page + 1;
    };
    return UserSuggestionComponent;
}());
UserSuggestionComponent = __decorate([
    core_1.Component({
        selector: 'user-sugestion',
        templateUrl: './user-suggestion.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserSuggestionComponent);
exports.UserSuggestionComponent = UserSuggestionComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/7d2c1347f110c505e2bda5ed917dfd27dda5e0764660f0fe0168c8d2f57192d5.js.map