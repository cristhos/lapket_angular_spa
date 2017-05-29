"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var DefaultRequestOptions = (function (_super) {
    __extends(DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.set('Content-Type', 'application/json');
        _this.headers.set('Accept', 'application/json');
        _this.addToken();
        return _this;
    }
    DefaultRequestOptions.prototype.addToken = function () {
        if (localStorage.getItem("new_token")) {
            console.log('refresh token');
        }
        else {
            if (localStorage.getItem("access_token"))
                this.headers.set('Authorization', "Bearer " + localStorage.getItem('access_token'));
        }
    };
    return DefaultRequestOptions;
}(http_1.BaseRequestOptions));
DefaultRequestOptions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DefaultRequestOptions);
exports.DefaultRequestOptions = DefaultRequestOptions;
exports.requestOptionsProvider = { provide: http_1.RequestOptions, useClass: DefaultRequestOptions };
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/835fae08de10b79ad7d0f9024141ed7f6b2bb7961ffa1fe4cec5ac2eed450135.js.map