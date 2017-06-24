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
                picture: "../../../assets/images/partenair/wazatech.jpg"
            },
            {
                name: "tutorielpro",
                url: "http://www.tutorielpro.com",
                picture: "./../../assets/images/partenair/tutorielpro.png"
            },
            {
                name: "asky tech",
                url: "http://askytech.com/",
                picture: "./../../assets/images/partenair/asky.jpg"
            }
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
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/c53f46ed2ca3148cd6e4ede839398d12f6ff2f1afe4b201935c093fcdedbf8c8.js.map