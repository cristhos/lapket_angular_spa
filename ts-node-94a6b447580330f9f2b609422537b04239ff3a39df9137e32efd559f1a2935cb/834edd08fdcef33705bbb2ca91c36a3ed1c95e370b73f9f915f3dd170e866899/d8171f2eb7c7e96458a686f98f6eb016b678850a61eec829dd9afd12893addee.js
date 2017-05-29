"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PartainerComponent = (function () {
    function PartainerComponent() {
        this.partainers = [
            {
                name: "waza-tech",
                url: "http://www.waza-tech.com",
                picture: "../../../assets/images/wazatech.jpg"
            },
            {
                name: "tutorielpro",
                url: "http://www.tutorielpro.com",
                picture: "./../../assets/images/tutorielpro.png"
            },
        ];
    }
    return PartainerComponent;
}());
PartainerComponent = __decorate([
    core_1.Component({
        selector: 'site-partainer',
        templateUrl: './partainer.component.html',
        styleUrls: ['./partainer.component.css']
    })
], PartainerComponent);
exports.PartainerComponent = PartainerComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/834edd08fdcef33705bbb2ca91c36a3ed1c95e370b73f9f915f3dd170e866899/d8171f2eb7c7e96458a686f98f6eb016b678850a61eec829dd9afd12893addee.js.map