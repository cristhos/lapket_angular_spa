"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlockRightComponent = (function () {
    function BlockRightComponent() {
    }
    BlockRightComponent.prototype.ngOnInit = function () {
        this.checkAuthent();
    };
    BlockRightComponent.prototype.checkAuthent = function () {
        if (localStorage.getItem("access_token")) {
            this.authent = true;
        }
        else {
            this.authent = false;
        }
    };
    return BlockRightComponent;
}());
BlockRightComponent = __decorate([
    core_1.Component({
        selector: 'core-block-right',
        templateUrl: './block-right.component.html',
        styles: ["\n\n  "],
    })
], BlockRightComponent);
exports.BlockRightComponent = BlockRightComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/8a77a2762e15b91cf606bcb70be0ca6c6a5ad2c2e07d224fd5a45fd927963468.js.map