"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_sharebuttons_1 = require("ng2-sharebuttons");
var core_component_1 = require("../core/core.component");
var user_component_1 = require("../user/user.component");
var category_component_1 = require("../category/category.component");
var product_component_1 = require("../product/product.component");
var search_component_1 = require("../search/search.component");
var country_component_1 = require("../country/country.component");
var city_component_1 = require("../city/city.component");
var image_resizer_service_1 = require("../utils/image-resizer.service");
var default_request_options_service_1 = require("../utils/default-request-options.service");
var angular2_moment_1 = require("angular2-moment");
var angular2_infinite_scroll_1 = require("angular2-infinite-scroll");
var angular2_materialize_1 = require("angular2-materialize");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng2_lazyload_image_1 = require("ng2-lazyload-image");
//import { MetadataModule, MetadataService, MetadataLoader } from 'ng2-metadata';
var ng2_img_cropper_1 = require("ng2-img-cropper");
//import { VirtualScrollModule } from 'angular2-virtual-scroll';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_moment_1.MomentModule,
            angular2_infinite_scroll_1.InfiniteScrollModule,
            ng2_lazyload_image_1.LazyLoadImageModule,
            router_1.RouterModule,
            ng2_file_upload_1.FileUploadModule,
            //MetadataModule,
            angular2_materialize_1.MaterializeModule,
            ng2_img_cropper_1.ImageCropperModule,
            //VirtualScrollModule,
            ng2_sharebuttons_1.ShareButtonsModule.forRoot(),
        ],
        declarations: [
            core_component_1.CoreDetailComponent,
            core_component_1.NavbarComponent,
            core_component_1.FooterComponent,
            core_component_1.PartainerComponent,
            core_component_1.SocialMediaComponent,
            core_component_1.PageNotFoundComponent,
            core_component_1.LoadingComponent,
            user_component_1.LoginFormComponent,
            user_component_1.RegisterFormComponent,
            user_component_1.RegisterSocialComponent,
            user_component_1.UserSuggestionComponent,
            user_component_1.UserSuggestionCommonComponent,
            user_component_1.UserMiniSuggestionComponent,
            category_component_1.CategoryListComponent,
            category_component_1.CategoryDescoveryComponent,
            category_component_1.CategorySuggestionComponent,
            category_component_1.CategoryLastComponent,
            category_component_1.CategoryMenuComponent,
            category_component_1.CategoryFollowComponent,
            category_component_1.CategoryItemComponent,
            product_component_1.ProductCommonComponent,
            product_component_1.ProductListComponent,
            product_component_1.ProductLastComponent,
            product_component_1.ProductFormComponent,
            product_component_1.ProductNullCommonComponent,
            search_component_1.SearchFormComponent,
            core_component_1.BlockLeftComponent,
            core_component_1.BlockRightComponent,
            city_component_1.CityCommonComponent,
            city_component_1.CityHomeComponent,
        ],
        exports: [
            core_component_1.CoreDetailComponent,
            core_component_1.NavbarComponent,
            core_component_1.FooterComponent,
            core_component_1.SocialMediaComponent,
            core_component_1.PartainerComponent,
            core_component_1.PageNotFoundComponent,
            core_component_1.LoadingComponent,
            user_component_1.LoginFormComponent,
            user_component_1.RegisterFormComponent,
            user_component_1.RegisterSocialComponent,
            user_component_1.UserSuggestionComponent,
            user_component_1.UserSuggestionCommonComponent,
            user_component_1.UserMiniSuggestionComponent,
            category_component_1.CategoryListComponent,
            category_component_1.CategoryDescoveryComponent,
            category_component_1.CategorySuggestionComponent,
            category_component_1.CategoryLastComponent,
            category_component_1.CategoryMenuComponent,
            category_component_1.CategoryFollowComponent,
            category_component_1.CategoryItemComponent,
            product_component_1.ProductCommonComponent,
            product_component_1.ProductListComponent,
            product_component_1.ProductLastComponent,
            product_component_1.ProductFormComponent,
            product_component_1.ProductNullCommonComponent,
            search_component_1.SearchFormComponent,
            core_component_1.BlockLeftComponent,
            core_component_1.BlockRightComponent,
            city_component_1.CityCommonComponent,
            city_component_1.CityHomeComponent,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule,
            angular2_moment_1.MomentModule,
            ng2_lazyload_image_1.LazyLoadImageModule,
            angular2_infinite_scroll_1.InfiniteScrollModule,
            ng2_file_upload_1.FileUploadModule,
            angular2_materialize_1.MaterializeModule,
            ng2_img_cropper_1.ImageCropperModule
        ],
        providers: [
            city_component_1.CityService,
            country_component_1.CountryService,
            image_resizer_service_1.ImageResizerService,
            category_component_1.CategoryService,
            user_component_1.UserService,
            product_component_1.ProductService,
            //MetadataService,
            user_component_1.CanActivateViaAuthGuard,
            default_request_options_service_1.requestOptionsProvider
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=/home/lithos/Data/Lab/codash/angularSpa/ts-node-94a6b447580330f9f2b609422537b04239ff3a39df9137e32efd559f1a2935cb/e9d97bad37419b7e16f68eb02b11d2aed62f50c86952f941b75664f4cc5053bb/e073f30a3324906f64aaea9681af51c4392dc495636fe7db4d8e84592527df23.js.map