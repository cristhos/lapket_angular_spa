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
            {
                name: "asky",
                url: "http://www.asky.com",
                picture: "./../../assets/images/partenair/asky.jpg"
            },
            {
                name: "asky",
                url: "http://www.asky.com",
                picture: "./../../assets/images/partenair/asky.jpg"
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
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/31abc0cdc0f7295dd8d2e58c2202c955d5c873c1f7c71958b473e2c2d4164529.js.map