"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlockLeftComponent = (function () {
    function BlockLeftComponent() {
    }
    BlockLeftComponent.prototype.ngOnInit = function () {
        this.checkAuthent();
    };
    BlockLeftComponent.prototype.checkAuthent = function () {
        if (localStorage.getItem("access_token")) {
            this.authent = true;
        }
        else {
            this.authent = false;
        }
    };
    return BlockLeftComponent;
}());
BlockLeftComponent = __decorate([
    core_1.Component({
        selector: 'core-block-left',
        templateUrl: './block-left.component.html',
        styles: ["\n\n  "],
    })
], BlockLeftComponent);
exports.BlockLeftComponent = BlockLeftComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/273fbab79c306fc660474491e7894f898aa10b960baaa9cc9a62c5c84ee89d5f.js.map