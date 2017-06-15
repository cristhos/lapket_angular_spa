"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutComponent = (function () {
    function AboutComponent() {
        this.teams = [
            {
                full_name: "Lithos Cristal",
                fonction: "Co-fondateur & CEO",
                picture: "../../../assets/images/team/lithos.jpg",
                facebook: "https://web.facebook.com/LithosCristal",
                twitter: "https://twitter.com/LithosCristal",
            },
            {
                full_name: "Arsene Kalend",
                fonction: "Co-fondateur & RS",
                picture: "./../../assets/images/team/arsene.jpg",
                facebook: "https://web.facebook.com/arsene.kalend",
                twitter: "https://twitter.com/arsene_kalend",
            },
            {
                full_name: "Jonathan Kadiayi",
                fonction: "Man of Design",
                picture: "../../../assets/images/team/djo.jpg",
                facebook: "https://web.facebook.com/jonathan.kadiayi",
                twitter: "",
            }
        ];
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'site-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/683f4fe91d9f66fadea99cbaed40c64234d7c2db850eef6661fd458424a848b3.js.map