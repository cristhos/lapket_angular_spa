"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var core_component_1 = require("./core/core.component");
var appRoutes = [
    { path: '', loadChildren: "./core/core.module#CoreModule" },
    { path: 'user', loadChildren: "./user/user.module#UserModule" },
    { path: 'product', loadChildren: "./product/product.module#ProductModule" },
    { path: 'category', loadChildren: "./category/category.module#CategoryModule" },
    { path: 'notification', loadChildren: "./notification/notification.module#NotificationModule", canActivate: [user_component_1.CanActivateViaAuthGuard] },
    { path: 'search', loadChildren: "./search/search.module#SearchModule" },
    { path: '**', component: core_component_1.PageNotFoundComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/d3e27bfe51aea66a52b66f03f6ab10277b7cce60278332573a1495c184e03846/c6abb772280107601655bfe5febf4c1609c358bceb1cc5bdd8ed959da63c1c8d.js.map