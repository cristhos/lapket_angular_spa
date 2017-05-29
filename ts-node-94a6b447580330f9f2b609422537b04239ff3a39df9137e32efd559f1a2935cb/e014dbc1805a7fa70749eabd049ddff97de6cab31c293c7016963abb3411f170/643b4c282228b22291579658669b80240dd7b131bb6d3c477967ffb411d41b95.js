"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var core_component_1 = require("./core/core.component");
var appRoutes = [
    { path: '', loadChildren: "./core/core.module#CoreModule" },
    { path: 'user', loadChildren: "./user/user.module#UserModule" },
    { path: 'product', loadChildren: "./product/product.module#ProductModule" },
    { path: 'deal', loadChildren: "./deal/deal.module#DealModule", canActivate: [user_component_1.CanActivateViaAuthGuard] },
    { path: 'category', loadChildren: "./category/category.module#CategoryModule" },
    { path: 'notification', loadChildren: "./notification/notification.module#NotificationModule", canActivate: [user_component_1.CanActivateViaAuthGuard] },
    { path: 'search', loadChildren: "./search/search.module#SearchModule" },
    { path: '**', component: core_component_1.PageNotFoundComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e014dbc1805a7fa70749eabd049ddff97de6cab31c293c7016963abb3411f170/643b4c282228b22291579658669b80240dd7b131bb6d3c477967ffb411d41b95.js.map