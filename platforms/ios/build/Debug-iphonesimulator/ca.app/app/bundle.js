require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ca\",\"scripts\":{\"clean\":\"npx rimraf hooks node_modules package-lock.json platforms\",\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"android\":\"tns run android --no-hmr\",\"ios\":\"tns run ios --no-hmr\",\"mobile\":\"tns run\",\"preview\":\"tns preview\",\"ngcc\":\"ngcc --properties es2015 module main --first-only\",\"postinstall\":\"npm run ngcc\"},\"dependencies\":{\"@angular/animations\":\"~10.0.0\",\"@angular/cdk\":\"^10.1.3\",\"@angular/common\":\"~10.0.0\",\"@angular/compiler\":\"~10.0.0\",\"@angular/core\":\"~10.0.0\",\"@angular/forms\":\"~10.0.0\",\"@angular/http\":\"~8.0.0-beta.10\",\"@angular/material\":\"^10.1.3\",\"@angular/platform-browser\":\"~10.0.0\",\"@angular/platform-browser-dynamic\":\"~10.0.0\",\"@angular/router\":\"~10.0.0\",\"@auth0/angular-jwt\":\"^5.0.1\",\"@covalent/core\":\"^3.0.1\",\"@nativescript/angular\":\"~10.0.0\",\"@nativescript/core\":\"7.0.0\",\"@nativescript/theme\":\"~2.2.1\",\"core-js\":\"^2.6.9\",\"fsevents\":\"^2.1.3\",\"nativescript-ui-sidedrawer\":\"^9.0.3\",\"reflect-metadata\":\"~0.1.12\",\"rxjs\":\"~6.5.5\",\"tns-ios\":\"^6.5.2\",\"tslib\":\"1.10.0\",\"zone.js\":\"~0.10.2\",\"@nativescript/webpack\":\"3.0.0\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1000.2\",\"@angular/cli\":\"~10.0.0\",\"@angular/compiler-cli\":\"~10.0.0\",\"@nativescript/ios\":\"7.0.0\",\"@nativescript/schematics\":\"~10.0.2\",\"@nativescript/tslint-rules\":\"~0.0.5\",\"@ngtools/webpack\":\"~10.0.0\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^5.1.2\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.4.1\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"node-sass\":\"^4.7.1\",\"protractor\":\"~5.4.3\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.9.0\"},\"main\":\"main.tns.js\"}");

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/blue.css'"}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app.common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_MODULES", function() { return SHARED_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_COMPONENTS", function() { return SHARED_COMPONENTS; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/common/index.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.routes.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/index.ts");



const SHARED_MODULES = [
    _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
    _common__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
    _common__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__["routes"])
];
const SHARED_COMPONENTS = [];


/***/ }),

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");



class AppComponent {
    closeDrawer() {
        const sideDrawer = _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    }
    isComponentSelected(url) { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 0, vars: 0, template: function AppComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/fesm2015/nativescript-ui-sidedrawer-angular.js");
/* harmony import */ var _src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/material.module.ts");
/* harmony import */ var _app_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.common.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/news/news.component.ts");
/* harmony import */ var _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/news-story-view/news-story-view.component.ts");
/* harmony import */ var _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/services/news.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/shared/shared.module.ts");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/@nativescript/angular/router/router.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());










// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript/angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { AuthService } from '@src/app/services/auth.service';
// import { LoggerService } from '@src/app/services/logger.service';
// import { CommonService } from '@src/app/services/common.service';
// import { SessionDataService } from '@src/app/services/session-data.service';
// import { UserService } from '@src/app/services/user.service';
// import { ErrorService } from '@src/app/services/error.service';
// import { CookieService } from '@src/app/services/cookie.service';




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // AuthService,
        // LoggerService,
        // CommonService,
        // SessionDataService,
        // UserService,
        // ErrorService,
        // CookieService,
        _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_9__["NewsService"]
    ], imports: [[
            ..._app_common__WEBPACK_IMPORTED_MODULE_4__["SHARED_MODULES"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
            nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
            _src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
        _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_8__["NewsStoryViewComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], !(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/@nativescript/angular/router/router.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/@nativescript/angular/router/router.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
        nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
        _src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
                    _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_8__["NewsStoryViewComponent"]
                ],
                imports: [
                    ..._app_common__WEBPACK_IMPORTED_MODULE_4__["SHARED_MODULES"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
                    nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                    _src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                ],
                providers: [
                    // AuthService,
                    // LoggerService,
                    // CommonService,
                    // SessionDataService,
                    // UserService,
                    // ErrorService,
                    // CookieService,
                    _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_9__["NewsService"]
                ],
                bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/news-story-view/news-story-view.component.ts");


const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home/story', component: _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_1__["NewsStoryViewComponent"] },
    { path: "information", loadChildren: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./app/information/information.module.ts")).then(m => m.InformationModule) }
];


/***/ }),

/***/ "./app/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/common/router-module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _router_module__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router_module__WEBPACK_IMPORTED_MODULE_0__["Router"]; });




/***/ }),

/***/ "./app/common/router-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@nativescript/angular/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@nativescript/angular/router'");
throw new Error("Cannot find module '@nativescript/angular/router'");



/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/news/news.component.ts");






class HomeComponent {
    constructor(lg$) {
        this.lg$ = lg$;
        this.componentName = 'HomeComponent';
        this.logdepth = 1;
        this.loggedIn = '';
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }
    ngOnInit() {
    }
    onDrawerButtonTap() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[0, "ios", "visibility", "collapsed", "icon", "res://menu", 3, "tap"], ["icon", "res://menu", 0, "android", "visibility", "collapsed", "ios.position", "left", 3, "tap"], ["text", "Avenue United FC"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "NavigationButton", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function HomeComponent_Template_NavigationButton_tap_1_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ActionItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function HomeComponent_Template_ActionItem_tap_2_listener() { return ctx.onDrawerButtonTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "news");
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NavigationButtonDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ActionItemDirective"], _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]], styles: ["ActionBar[_ngcontent-%COMP%] { background-color: red; }\nActionBar[_ngcontent-%COMP%]   Label[_ngcontent-%COMP%] { font-size: 30em; font-weight: 900; }\n\n.bigText[_ngcontent-%COMP%] { font-size: 30em;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/@angular/material/fesm2015/button.js");













//import { DatepickerLocale, APP_DATE_FORMATS } from './date-picker/datepicker-local.component';
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: AppDateAdapter
    // },
    // { 
    //     provide: MAT_DATE_FORMATS, 
    //     useValue: APP_DATE_FORMATS 
    // },
    // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
    ], imports: [[
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]], exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
                ],
                exports: [
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
                ],
                providers: [
                // {
                //   provide: DateAdapter,
                //   useClass: AppDateAdapter
                // },
                // { 
                //     provide: MAT_DATE_FORMATS, 
                //     useValue: APP_DATE_FORMATS 
                // },
                // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/model/media.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
class Media {
}


/***/ }),

/***/ "./app/model/member.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
class Member {
    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.phone = '';
        this.phone2 = '';
        this.email = '';
        this.dob = '';
        this.amount = '0';
        this.paydate = '';
        this.receiptid = '';
        this.team = 0;
        this.team2 = 0;
        this.team3 = 0;
        this.position = 0;
        this.position2 = 0;
        this.position3 = 0;
        this.lid = 0;
        this.favteam = '';
        this.favplayer = '';
        this.sappears = 0;
        this.sassists = 0;
        this.sgoals = 0;
        this.photo = '';
        this.achievements = '';
        this.status = '';
        this.academyinfo = '';
    }
}


/***/ }),

/***/ "./app/model/server-mode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMode", function() { return ServerMode; });
class ServerMode {
    constructor() {
        this.modes = { LOCAL: 0, REMOTE: 1 };
        /*if( process.env.NODE_ENV === 'development' )
        {
            this.currentMode = this.modes.REMOTE;
        }
        else
        {*/
        this.currentMode = this.modes.REMOTE;
        /*}*/
    }
    getServerMode() {
        return this.currentMode;
    }
}


/***/ }),

/***/ "./app/model/site-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    //roles   : ArrayLike<string>;
    // authorities:ArrayLike<string>;
    // permissions:MyTeams;
    constructor() {
        this.userId = 0;
        this.name = '';
        this.password = '';
        this.address = '';
        this.email = '';
        this.phone = '';
        this.dob = '';
        this.role = '';
        this.avatar = '';
        this.enabled = false;
        //this.roles    = [];
        //this.authorities = [];
    }
}


/***/ }),

/***/ "./app/model/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
class Team {
    getTeamName() {
        return this.name;
    }
}


/***/ }),

/***/ "./app/news-story-view/news-story-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsStoryViewComponent", function() { return NewsStoryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/news.service.ts");








class NewsStoryViewComponent {
    constructor(lg$, news$, com$) {
        this.lg$ = lg$;
        this.news$ = news$;
        this.com$ = com$;
        this.componentName = 'NewsStoryViewComponent';
        this.logdepth = 2;
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.serverUrl = this.com$.getHome();
        this.story = this.news$.currentStory;
        this.lg$.log("Story set to : " + this.story.title);
    }
}
NewsStoryViewComponent.ɵfac = function NewsStoryViewComponent_Factory(t) { return new (t || NewsStoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
NewsStoryViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsStoryViewComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], decls: 7, vars: 5, consts: [["orientation", "vertical"], ["columns", "*", "rows", "auto,auto,auto,auto"], ["row", "0", "col", "0", "textWrap", "true", 1, "news-title", 3, "text"], ["row", "1", "col", "0", "stretch", "aspectFill", 3, "src"], ["row", "2", "col", "0", "textWrap", "true", 1, "news-description", 3, "text"], ["row", "3", "col", "0", "textWrap", "true", 1, "news-story", 3, "text"]], template: function NewsStoryViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ScrollView", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "GridLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Image", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx.story.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.serverUrl, "", ctx.story.image, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx.story.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx.story.story);
    } }, styles: [".news-title[_ngcontent-%COMP%] {\n    color: #333f4a;\n    background-color: white;\n    font-size: 24;\n    font-weight: bold;\n    padding-left: 15;\n}\n.news-description[_ngcontent-%COMP%] {\n    color: white;\n    background-color: gray;\n    font-size: 24pc;\n    font-weight: bold;\n    padding-left: 15;\n}\n.news-story[_ngcontent-%COMP%] {\n    color: black;\n    background-color: white;\n    font-size: 18pc;\n    padding: 15 15 15 15;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsStoryViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './news-story-view.component.html',
                styleUrls: ['./news-story-view.component.css'],
                providers: [_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]]
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/news.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");











function NewsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "GridLayout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "GridLayout", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Image", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "GridLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "StackLayout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "StackLayout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "Label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.serverUrl, "", item_r1.image, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", item_r1.description);
} }
class NewsComponent {
    constructor(lg$, common$, news$, router) {
        this.lg$ = lg$;
        this.common$ = common$;
        this.news$ = news$;
        this.router = router;
        this.componentName = 'NewsComponent';
        this.logdepth = 2;
    }
    ngOnInit() {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        var subscriber = this.news$.loadNewsStories();
        subscriber.subscribe((data) => this.news$.setNews(data), error => { this.lg$.error("===> Error getting news from server: " + JSON.stringify(error)); this.createNews(); }, () => this.lg$.log(" <=== Received news from server. <===="));
        this.serverUrl = this.common$.getHome();
        this.lg$.log("ngOnInit() - serverUrl set to: " + this.serverUrl);
    }
    onItemTap(args) {
        this.lg$.log("Story was clicked in position: " + args.index);
        this.news$.currentStory = this.news$.NewsStories[args.index];
        this.router.navigate(["home/story"]);
    }
    createNews() {
        this.lg$.log("=> this.createNews()...");
        this.theNews =
            [
                {
                    "nsid": 1,
                    "category": "G",
                    "title": "200 Club",
                    "description": "July draw results",
                    "story": "The Winner of the July 200 Club Draw 1st Prize €750 was Ursula OReilly. The €50 Runners Up were John OMalley, Gary Seery and Decky Ryan. Congrats to all.",
                    "image": "assets/img/news/and-the-winner-is.jpg",
                    "thumb": null
                },
                {
                    "nsid": 2,
                    "category": "G",
                    "title": "The Avenue Academy is back !!!",
                    "description": "Starting on Sept 14th - register now",
                    "story": "Dear Parent/Guardian,\r\n\r\nCoaching  takes place from 9.30 – 10.30 each Saturday morning on the Astroturf Pitch at Lees Road. NB Weather Permitting.        \r\n\r\nTo book a place in the Academy for season 2019 – 2020 please download ClubZap app and pay your 2019 Avenue Utd. membership online to secure your child’ s place.\r\n\r\n",
                    "image": "assets/img/news/academy.png",
                    "thumb": null
                },
                {
                    "nsid": 3,
                    "category": "G",
                    "title": "How to install ClubZap on your phone",
                    "description": "Easy to follow steps",
                    "story": "Follow the 4 steps on the image opposite. Then, select  “My Club” option at bottom right hand corner of the screen. There you will be presented with tile to pay club membership online.",
                    "image": "assets/img/news/ClubZap.png",
                    "thumb": null
                },
                {
                    "nsid": 4,
                    "category": "",
                    "title": " Euronics O'Flaherty Electric Sponsorship",
                    "description": "A big thank you",
                    "story": "A big thank you to Euronics O'Flaherty Electric on their sponsorship of the Avenue A team jersey. ",
                    "image": "assets/img/news/JuniorA-2019.jpg",
                    "thumb": null
                },
                {
                    "nsid": 11,
                    "category": "G",
                    "title": "New!",
                    "description": "Avenue United Enamel Badge",
                    "story": "The club are selling enamel badges for €5. If anyone is interested drop us a message, email or call us.",
                    "image": "assets/img/news/badge.png",
                    "thumb": null
                },
                {
                    "nsid": 12,
                    "category": "G",
                    "title": "Tierney's Costcutter sponsor U14s",
                    "description": "Many thanks to John and his staff",
                    "story": "The club would like to thank John and his staff at Tierney's Costcutter on the the Tulla Road for their kind sponsorship of a set of jerseys for our U14 team. We would ask our members to return the favour by supporting our sponsors whenever possible.",
                    "image": "assets/img/news/costcutter.jpg",
                    "thumb": null
                },
                {
                    "nsid": 13,
                    "category": "G",
                    "title": "Rochfords Pharmacy sponsor 2008 teams",
                    "description": "Big thanks to Brendan and Audrey!",
                    "story": "A sincere thank you to Audrey and Brendan Rochford of Rochfords Pharmacy for kindly sponsoring sets of jerseys for our 2008s teams.",
                    "image": "assets/img/news/2018-2.jpg",
                    "thumb": null
                },
                {
                    "nsid": 14,
                    "category": "G",
                    "title": "McDonalds of Ennis sponor U13s",
                    "description": "Looking good!",
                    "story": "The club would like to thank Kieran, Niamh and the staff at McDonald's Ennis and Shannon for kindly sponsoring a set of jerseys for our U13 team.",
                    "image": "assets/img/news/mcd.jpg",
                    "thumb": null
                }
            ];
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["news"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], decls: 2, vars: 1, consts: [["marginRight", "-2", 1, "list-group", 3, "items", "itemTap"], ["tkListItemTemplate", ""], [1, "list-group-item"], ["rows", "*", "backgroundColor", "White"], ["rows", "*", "columns", "*"], ["stretch", "aspectFill", "height", "200", 3, "src"], ["verticalAlignment", "top"], ["backgroundColor", "#bc3b4e77"], [1, "news-source", 3, "text"], ["paddingTop", "15", "paddingBottom", "20", "paddingLeft", "15", "paddingRight", "15", "backgroundColor", "White"], ["textWrap", "true", 1, "news-title", 3, "text"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ListView", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemTap", function NewsComponent_Template_ListView_itemTap_0_listener($event) { return ctx.onItemTap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_ng_template_1_Template, 9, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.news$.NewsStories);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_5__["ListViewComponent"]], styles: [".bigText[_ngcontent-%COMP%] { font-size: 30em; color: rgb(180, 52, 5);}\n\n.news-title[_ngcontent-%COMP%] {\n    color: #333f4a;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    font-size: 24;\n}\n\n.news-source[_ngcontent-%COMP%] {\n    color: White;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    text-transform: uppercase;\n    font-size: 20;\n    padding: 8 0 3 10;\n}\n.news-source-web[_ngcontent-%COMP%]\n{\n    background-color: darkgrey;\n}\n.news-spacer-web[_ngcontent-%COMP%] {\n    height: 2px;\n    background-color: black;\n    border-top: 5px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n    background-color: #f0f0f0;\n    font-family: 'Opinion Pro ExtraCondensed', 'Mint_Type_-_Opinion_Pro_ExtraCondensed_Light';\n    font-size: 24;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css'],
                providers: [_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]]
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/common.service.ts");









const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
class AuthService {
    constructor(lg$, com$, http) {
        this.lg$ = lg$;
        this.com$ = com$;
        this.http = http;
        this.logdepth = 3;
        this.serviceName = 'AuthService';
        // set token if saved in local storage
        try {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        catch (ex) { }
        this.token = currentUser && currentUser.token;
    }
    /**********************************************************
     * Name:		authenticate()
     * Description:	Authenticates the user with the server
     * Scope:		Internal
     * Params in:
     * Return:
     **********************************************************/
    authenticate(username, password) {
        let home = this.com$.getHome();
        let url = home + "backend/login";
        let params = 'username=' + username + '&password=' + password;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Access-Control-Allow-Credentials' : true
        });
        console.log("Calling http POST to " + url);
        return this.http.post(url, params, { headers: headers, withCredentials: true });
    }
    logout() {
        let home = this.com$.getHome();
        let url = home + "backend/logout";
        return this.http.get(url, { withCredentials: true });
    }
    isLoggedIn() {
        let token = localStorage.getItem('id_token');
        if (!token)
            return false;
        let expirationDate = jwtHelper.getTokenExpirationDate(token);
        let isExpired = jwtHelper.isTokenExpired(token);
        // console.log( "Token expiration date: " + expirationDate );
        // console.log( "Token is expired: " + isExpired );
        return !isExpired;
    }
    isAllowed(requiredRole, requiredPermission) {
        let token = localStorage.getItem('id_token');
        let allowed = false;
        console.log("authService-->isAllowed(" + requiredRole + ")");
        if (!token)
            return false;
        let decodedToken = jwtHelper.decodeToken(token);
        let definedRoles = decodedToken.roles.split(","); // convert string to array
        for (let i = 0; i < definedRoles.length; i++) {
            if (definedRoles[i] === requiredRole) {
                allowed = true;
                break;
            }
        }
        // console.log("Decoded token is: [" + decodedToken.roles + "]");
        // console.log("           <--isAllowed(" + allowed + ")");
        return allowed;
    }
    getCurrentUser() {
        let token = localStorage.getItem('id_token');
        if (!token)
            return null;
        return jwtHelper.decodeToken(token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/services/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./environments/environment.ts");
/* harmony import */ var _src_app_model_server_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/model/server-mode.ts");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/logger.service.ts");




class CommonService {
    constructor() {
        this.modes = { LOCAL: 0, REMOTE: 1 };
        this.logdepth = 3;
        this.loghdr = "";
        this.serviceName = 'CommonService';
        var svr = new _src_app_model_server_mode__WEBPACK_IMPORTED_MODULE_2__["ServerMode"]();
        this.CurrentServerMode = this.modes.REMOTE;
        this.lg$ = new _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]();
        this.lg$.setLogHdr(this.logdepth, this.serviceName);
    }
    /**********************************************************
     * Name       : getHome()
     * Description: Returns the _home URL so that it can be used
     * 				as a local or remote app.
     * Scope    : Externally accessible
     * Params in: none
     * Return   : _home URL
     **********************************************************/
    getHome() {
        var _home;
        this.lg$.log("-> getHome()");
        if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production === false) {
            this.lg$.log("   |- environment.production is false, returning localhost");
            //_home = 'http://localhost:8080/';
            //  _home = 'http://127.0.0.1:8080/';
            _home = 'http://avenueunited.ie.mocha6004.mochahost.com/';
        }
        else if (this.CurrentServerMode === this.modes.REMOTE) {
            // _home = 'http://www.avenueunited.ie/';
            _home = 'http://avenueunited.ie.mocha6004.mochahost.com/';
        }
        this.lg$.log("<- getHome(" + _home + ")");
        return _home;
    }
    /**********************************************************
   * Name       : getGalleryHome()
   * Description: Returns the _home URL so that it can be used
   * 				as a local or remote app.
   * Scope    : Externally accessible
   * Params in: none
   * Return   : _home URL
   **********************************************************/
    getGalleryHome() {
        var _home;
        // if ( environment.production === false )
        // {
        // 	 _home = 'http://localhost:8080/';
        // } else
        // {
        //     _home = 'http://www.avenueunited.ie/';
        // }
        _home = 'http://www.avenueunited.ie/';
        return _home;
    }
    /**********************************************************
     * Name       : isValidName()
     * Description: Checks that there are one or more words in
     * 				the name
     * Params in: The name entered
     * Return   : true or false
     **********************************************************/
    isValidName(name) {
        //this.lg$.log("----> checkName(" + name + ")");
        if ((name !== undefined) && (name !== '')) {
            return /^\w+/.test(name);
        }
        else {
            //this.lg$.log("----> checkName(" + name + ") undefined or blank!");
            return false;
        }
    }
    /**********************************************************
     * Name       : isValidEmail()
     * Description: Checks that the entered text matches the
     * 				basic rules to be an email address.
     * Params in: The email entered
     * Return   : true or false
     **********************************************************/
    isValidEmail(email) {
        //this.lg$.log("----> checkEmail(" + email + ")");
        console.log("----> checkEmail(" + email + ")");
        if ((email !== undefined) && (email !== '')) {
            return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email);
        }
        else {
            console.log("----> checkEmail(" + email + ") undefined or blank!");
            return false;
        }
    }
    /**********************************************************
     * Name       : isValidPhone()
     * Description: Checks that the entered text matches the
     * 				basic rules to be an Irish phone number.
     * Params in: The email entered
     * Return   : true or false
     **********************************************************/
    isValidPhone(phone) {
        console.log("----> checkPh(" + phone + ")");
        console.log("== " + /^\d{10}$/.test(phone));
        console.log("== " + /^\+\d{12}$/.test(phone));
        if ((phone !== undefined) && (phone !== '')) {
            if ((/^\d{10}$/.test(phone)) || (/^\+\d{12}$/.test(phone))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            //this.lg$.log("----> checkPh(" + phone + ") undefined or blank!");
            return false;
        }
    }
    /**********************************************************
   * Name       : isValidDob()
   * Description: Checks that the dob is not empty
   * Params in  : The name entered
   * Return     : true or false
   **********************************************************/
    isValidDob(name) {
        //this.lg$.log("----> checkName(" + name + ")");
        if ((name !== undefined) && (name !== '')) {
            return /^\w+/.test(name);
        }
        else {
            //this.lg$.log("----> checkName(" + name + ") undefined or blank!");
            return false;
        }
    }
    /**********************************************************
     * Name       : isEmpty()
     * Description: Checks if a field is empty empty
     * Params in  : The field entered
     * Return     : true or false
     **********************************************************/
    isEmpty(field) {
        if ((field === undefined) || (field === '')) {
            return false;
        }
        else {
            return true;
        }
    }
    /**********************************************************
     * Name       : clearArray()
     * Description: Clears the contents of the array passed in.
     * Scope      : Externally accessible
     * Params in  : The array to clear
     * Return     : none
     **********************************************************/
    clearArray(array, lg$) {
        lg$.trace("-> clearArray()");
        while (array.length) {
            lg$.trace("....sending array value to trash");
            array.pop();
        }
    }
    /**********************************************************
     * Name       : setupHeaders()
     * Description: Set the JWT in the header so we can access
     *              secure content from the server.
     * Scope    : Externally accessible
     * Params in: None
     * Return   : The headers struct
     **********************************************************/
    setupHeaders() {
        //this.lg$.log("setupHeaders()")
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // this.lg$.log("Token read from storage: " + localStorage.getItem('id_token') );
        // this.lg$.log("Auth Hdr: " + headers.get('Authorization'));
        return headers;
    }
    /**********************************************************
     * Name       : calculateCurrentSeason()
     * Description: Depending on the current month, this returns
     *              the current season. Used by UI pages.
     * Scope    : Externally accessible
     * Params in: None
     * Return   : The current season, e.g. "2018/2019"
     **********************************************************/
    calculateCurrentSeason() {
        var season = "";
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth(); // Remember this is 0 for Jan etc.
        if (month > 6 && month <= 11) // First period
            season = year + "/" + (year + 1);
        else
            season = (year - 1) + "/" + year; // Second term
        return season;
    }
    /**********************************************************
     * Name       : getLogDepth()
     * Description: Convert a number to that number of spaces.
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : The log depth as spaces.
     **********************************************************/
    getLogDepth(depth) {
        let prefix = '';
        for (let i = 0; i < depth; i++) {
            prefix.concat(' ');
        }
        return prefix;
    }
}


/***/ }),

/***/ "./app/services/cookie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _session_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/session-data.service.ts");








var ReturnStatus;
(function (ReturnStatus) {
    ReturnStatus[ReturnStatus["PRESENT"] = 0] = "PRESENT";
    ReturnStatus[ReturnStatus["NOT_PRESENT"] = 1] = "NOT_PRESENT";
    ReturnStatus[ReturnStatus["OK"] = 2] = "OK";
    ReturnStatus[ReturnStatus["NOT_OK"] = 3] = "NOT_OK";
})(ReturnStatus || (ReturnStatus = {}));
;
class CookieService {
    constructor(lg$, d$, com$) {
        this.lg$ = lg$;
        this.d$ = d$;
        this.com$ = com$;
        this.logdepth = 3;
        this.loghdr = "";
        this.serviceName = 'CookieService';
        this.VisitorCookie = "clubAppVisitor=1";
        this.PermissionCookie = "cookiesAllowed";
        this.CookieExpiry = 86400 / 4; // 86400 is one day so this is 6hrs
        this.lg$.setLogHdr(this.logdepth, this.serviceName);
    }
    /**********************************************************
     * Name       : saveVisitorCookie()
     * Description: Writes a cookie to say this user has visited
     *              the site, it expires after a period. This
     *              way we only increase the visitor count after
     *              a period of time for the same user.
     * Scope    : External
     * Params in: None
     * Return   : None
     **********************************************************/
    saveVisitorCookie() {
        let expires = new Date(Date.now() + this.CookieExpiry); // 1 day
        document.cookie = this.VisitorCookie + ";expires=" + expires + ";path=/;";
        this.lg$.trace("-> saveVisitorCookie() : Cookies: " + document.cookie);
    }
    /**********************************************************
     * Name       : savePermissionCookie()
     * Description: Writes a cookie to store the user's choice
     *              on whether it's ok to save cookies or not.
     * Scope    : External
     * Params in: None
     * Return   : None
     **********************************************************/
    savePermissionCookie() {
        let expires = new Date(Date.now() + (86400 * 100)); // 100 days
        document.cookie = this.PermissionCookie + "=" + this.d$.dsCookiesUserChoice + ";expires=" + expires + ";path=/;";
        this.lg$.trace("-> savePermissionCookie() : Cookies: " + document.cookie);
    }
    /**********************************************************
     * Name       : isVisitorCookiePresent()
     * Description: Reads the cookies and parses the string to
     *              see if we have a visitor cookie. If we have
     *              then return true, otherwise false.
     * Scope    : External
     * Params in: None
     * Return   : true if cookie exists, false otherwise
     **********************************************************/
    isVisitorCookiePresent() {
        let fullcookie = document.cookie;
        let visitorPresent = fullcookie.includes(this.VisitorCookie);
        this.lg$.trace("-> isVisitorCookiePresent() : Retrieved visitor cookie: " + visitorPresent);
        return visitorPresent;
    }
    /**********************************************************
     * Name       : isCookiePermissionGranted()
     * Description: Reads the cookies and parses the string to
     *              see if we have a cookie indicating that the
     *              user has said it's ok to store cookies.
     * Scope    : External
     * Params in: None
     * Return   : true if cookie exists, false otherwise
     **********************************************************/
    isCookiePermissionGranted() {
        let status;
        let fullcookie = document.cookie;
        let permissionPresent = fullcookie.includes(this.PermissionCookie);
        this.lg$.trace("Cookie String: [" + fullcookie + "]");
        if (permissionPresent) {
            // (1) Split the string into individual cookies
            let cookies = fullcookie.split(';', 100);
            // (2) Find the permission cookie
            for (let i = 0; i < cookies.length; i++) {
                this.lg$.trace("Checking cookie: [" + cookies[i] + "]");
                if (cookies[i].includes(this.PermissionCookie)) {
                    this.lg$.trace("Found permission cookie: " + cookies[i] + "]");
                    let parts = cookies[i].split('=', 2);
                    if (parts[1] === "true") {
                        this.lg$.trace("Returning true");
                        status = ReturnStatus.OK;
                    }
                    else {
                        this.lg$.trace("Returning false");
                        status = ReturnStatus.NOT_OK;
                    }
                }
            }
        }
        else
            status = ReturnStatus.NOT_PRESENT;
        return status;
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_data_service__WEBPACK_IMPORTED_MODULE_3__["SessionDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }, { type: _session_data_service__WEBPACK_IMPORTED_MODULE_3__["SessionDataService"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./app/services/error.service.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/logger.service.ts");




class ErrorService {
    constructor() {
        this.logdepth = 3;
        this.serviceName = 'ErrorService';
        this.msgDuration = 5000; // 5 seconds
        this.lg$ = new _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]();
        this.lg$.setLogHdr(this.logdepth, this.serviceName);
    }
    /**********************************************************
     * Name:		openAlert()
     * Description:
     * Params in:
     * Return:
     **********************************************************/
    openAlert(msg) {
        this.lg$.log("########## INSIDE OPEN ALERT!!");
        console.log(msg);
    }
    /**********************************************************
     * Name       : handleHttpError()
     * Description: Called when there's an error on a http call
     * Scope    : Externally accessible
     * Params in: Date
     * Return   : None.
     **********************************************************/
    handleError(error) {
        let msg = 'You do not have permissions to perform this action!';
        switch (error.status) {
            case 400:
                this.lg$.error("BAD REQUEST!");
                console.log("You have sent a bad request to the server!", 'Error');
                break;
            case 403:
                this.lg$.error("You do not have permissions to perform this action!");
                console.log("You do not have permissions to perform this action!", 'Error');
                break;
            case 404:
                this.lg$.error("Requested data not found!");
                console.log("The data you requested was not found by the server!", 'Error');
                break;
            default:
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                this.lg$.error(`Backend returned code ${error.status}, ` +
                    `body was: ${error.body}`);
                break;
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
    ;
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return LogType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
var LogType;
(function (LogType) {
    LogType[LogType["function"] = 0] = "function";
    LogType[LogType["message"] = 1] = "message";
})(LogType || (LogType = {}));
//@Injectable()
class LoggerService {
    constructor() {
        this.loghdr = ''; // The header for this instance, to be used in each log message
        this.functionPrefix = "|->";
        this.messagePrefix = "   |- ";
        this.moduleSpace = 25;
    }
    //trace(msg: any, type?:string) { /*if(process.env.DEBUG)*/ console.log( this.loghdr + msg); }
    log(msg, prefix) { console.log(this.loghdr + msg); }
    error(msg, prefix) { console.error(this.loghdr + msg); }
    warn(msg, prefix) { console.warn(this.loghdr + msg); }
    trace(msg, type) {
        switch (type) {
            case LogType.function: // function call
                console.log(this.loghdr + this.functionPrefix + msg);
                break;
            case LogType.message: // function call
                console.log(this.loghdr + this.messagePrefix + msg);
                break;
            default:
                console.warn(this.loghdr + msg);
                break;
        }
    }
    /**********************************************************
     * Name       : setLogHdr()
     * Description: Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope    : Internal
     * Params in:
     * Return   :
     **********************************************************/
    setLogHdr(logdepth, moduleName) {
        const indent = this.generateIndent(logdepth);
        console.log(indent + '--> Setting log header for [' + moduleName + ']');
        let i = 0;
        const depth = logdepth * 4;
        let hdr = ' ' + moduleName;
        if (moduleName.length > this.moduleSpace) {
            hdr = hdr.slice(0, this.moduleSpace - 1);
        }
        else if (moduleName.length < this.moduleSpace) {
            let diff = this.moduleSpace - moduleName.length;
            for (let i = 0; i < diff; i++) {
                hdr += ' ';
            }
        }
        // Make sure the field width is the standard, pad if necessary
        // (1) Set the indentation according to the depth
        for (i = 0; i < depth; i++) {
            hdr += ' ';
        }
        // (2) Add on call stack indicator
        // hdr += ' |-';
        this.loghdr = hdr;
    }
    generateIndent(spaces) {
        let sIndent = ''; // Initialise the logging indent
        for (let i = 0; i < spaces; i++) {
            sIndent += '    ';
        }
        return sIndent;
    }
}


/***/ }),

/***/ "./app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/logger.service.ts");








class NewsService {
    constructor(com$, lg$, http$) {
        this.com$ = com$;
        this.lg$ = lg$;
        this.http$ = http$;
        this.NewsStories = new Array();
    }
    /**********************************************************
     * Name       : loadNewsStories()
     * Description: Retrieves a list of Newws from the server
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : Observable
     **********************************************************/
    loadNewsStories(type) {
        this.lg$.log('-->' + 'loadNewsStories()..');
        const url = this.com$.getHome();
        // If it's the Academy asking for news....
        // if( type === 'A'){
        //   return this.http$.get( url + 'public/stories/A' );
        // }
        // Else...
        this.lg$.log("===>>> Hitting endpoing: " + url + 'backend/public/stories');
        return this.http$.get(url + 'backend/public/stories');
    }
    /**********************************************************
     * Name       : setNews()
     * Description: Setter for array of news stories
     * Scope      : Externally accessible
     * Params in  : Array of news stories
     * Return     : None
     **********************************************************/
    setNews(data) {
        this.lg$.log('->' + 'setNews()...recieved news stories');
        this.NewsStories = data;
        this.currentStory = this.NewsStories[0];
        this.lg$.log('<- setNews(): set current story to: ' + this.currentStory.title);
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/services/session-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDataService", function() { return SessionDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _model_site_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/model/site-user.ts");
/* harmony import */ var _model_server_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/model/server-mode.ts");
/* harmony import */ var _model_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/model/team.ts");
/* harmony import */ var _model_member__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/model/member.ts");
/* harmony import */ var _model_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/model/media.ts");




//import { ToolBox } from '../utilities/toolbox';









class SessionDataService {
    constructor(com$, lg$, http$) {
        this.com$ = com$;
        this.lg$ = lg$;
        this.http$ = http$;
        this.modes = { LOCAL: 0, REMOTE: 1 };
        this.dsTeamMembers = [];
        this.showTeamArray = [];
        this.dsVisitorCount = 0;
        this.dsCookiesUserChoice = false;
        this.logdepth = 3;
        this.loghdr = "";
        this.serviceName = 'SessionDataService';
        this.displayMember = false;
        this.gAuthenticated = false;
        this.loghdr = this.setLogHdr(this.logdepth, this.serviceName);
        var svr = new _model_server_mode__WEBPACK_IMPORTED_MODULE_5__["ServerMode"]();
        this.CurrentServerMode = svr.getServerMode();
        this.dsAuthenticated = false;
        this.dsPosition = ['Manager',
            'Goalkeeper',
            'Full Back',
            'Center Half',
            'Mid Field',
            'CAM',
            'Winger',
            'Striker',
            'Chairman',
            'Secretary',
            'Treasurer',
            'PRO',
            'Committee'];
        this.dsCurrentUser = new _model_site_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.dsCurrentTeam = new _model_team__WEBPACK_IMPORTED_MODULE_6__["Team"]();
        this.dsCurrentMember = new _model_member__WEBPACK_IMPORTED_MODULE_7__["Member"]();
        this.dsTeams = new Array();
        //this.dsTeamMembers = new Array(500);
        this.dsCurrentUser = new _model_site_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.dsAllMembers = new Array();
        this.dsSponsors = new Array();
        this.aAlbum = new Array();
        for (let i = 0; i < this.showTeamArray.length; i++) {
            this.showTeamArray[i] = false;
        }
    }
    /**********************************************************
     * Name       : setCurrentMember()
     * Description: Set the current member to the one passed in
     * Scope      : Externally accessible
     * Params in  : member: the member in question
     * Return     :
     **********************************************************/
    setCurrentMember(member) {
        console.log("-->" + "setCurrentMember()");
        this.dsCurrentMember = member;
        this.displayMember = true;
    }
    /**********************************************************
     * Name       : difference()
     * Description: Checeks to see if there is a difference
     *              between two objects
     * Scope    : Internal
     * Params in: None
     * Return   :
     **********************************************************/
    difference(m1, m2) {
        var diff = false;
        Object.getOwnPropertyNames(m1).forEach(function (val, idx, array) {
            if (m1[val] !== m2[val]) {
                diff = true;
            }
        });
        return diff;
    }
    /**********************************************************
     * Name       : applyMemberChange()
     * Description: Applies a change to the local data so the
     *              user sees the change on the view.
     * Scope    : Internal
     * Params in: None
     * Return   :
     **********************************************************/
    applyMemberChange(members, member) {
        var index = SessionDataService.findMemberIndex(members, member);
        if (index === -1) {
            return;
        }
        members[index].name = member.name;
        members[index].address = member.address;
        members[index].phone = member.phone;
        members[index].dob = member.dob;
        members[index].email = member.email;
        members[index].amount = member.amount;
        members[index].team = member.team;
        members[index].position = member.position;
        members[index].lid = member.lid;
        members[index].favteam = member.favteam;
        members[index].favplayer = member.favplayer;
        members[index].sappears = member.sappears;
        members[index].sassists = member.sassists;
        members[index].sgoals = member.sgoals;
        members[index].photo = member.photo;
        members[index].achievements = member.achievements;
    }
    /**********************************************************
     * Name       : applyTeamChange()
     * Description: Applies a change to the local data so the
     *              user sees the change on the view.
     * Scope    : Internal
     * Params in: None
     * Return   :
     **********************************************************/
    applyTeamChange(teams, thisTeam) {
        var index = -1;
        if (this.dsTeams.length === 0) {
            this.dsGetTeams();
        }
        for (var i = 0; i < this.dsTeams.length; i++) {
            if (this.dsTeams[i].id === thisTeam.id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            //log.debug(loghdr + "###### ERROR: applyTeamChange - team not found!");
        }
        else if (index > -1) {
            this.dsTeams[index] = thisTeam;
            //log.debug(loghdr + " -> applyTeamChange - team updated: " + thisTeam.name );
        }
    }
    /**********************************************************
     * Name       : findMemberIndex()
     * Description: Find a members index/position in the array
     *              of members
     * Scope    : Internal
     * Params in: None
     * Return   : The index value
     **********************************************************/
    static findMemberIndex(members, member) {
        var index = -1;
        if (typeof members !== undefined) {
            for (var i = 0; i < members.length; i++) {
                if (members[i].id === member.id) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    /**********************************************************
     * Name       : convertPosToInt()
     * Description: Converts the position name to the integer
     *              value
     * Scope    : Internal
     * Params in: None
     * Return   : The position integer value
     **********************************************************/
    convertPosToInt(sPos) {
        return this.dsPosition.indexOf(sPos);
    }
    /**********************************************************
     * Name       : convertTeamToInt()
     * Description: Converts the team name to the integer value
     * Scope      : Internal
     * Params in  : None
     * Return     : The team integer value
     **********************************************************/
    convertTeamToInt(sTeam) {
        for (var i = 0; i < this.dsTeams.length; i++) {
            if (this.dsTeams[i].name === sTeam) {
                return this.dsTeams[i].id;
            }
        }
        return 0;
    }
    /**********************************************************
     * Name       : setCurrentTeamByName()
     * Description: Set the current team in memory
     * Scope      : Internal
     * Params in  : Team name as a string
     * Return     : None
     **********************************************************/
    setCurrentTeamByName(teamName) {
        console.log("-->" + "setCurrentTeamByName(" + teamName + ")");
        // Ensure the teams information has been loaded
        if (this.dsTeams.length < 1) {
            this.dsGetTeams();
        }
        // Pick out this team and set it as the current one
        for (var team of this.dsTeams) {
            if (team.name === teamName) {
                this.dsCurrentTeam = team;
                console.log("-->" + "setCurrentTeamByName(): Team set to " + teamName);
                break;
            }
        }
    }
    /**********************************************************
     * Name       : dsGetTeams()
     * Description: Retrieves a list of teams from the server
     * Scope      : Internal
     * Params in  : None
     * Return     : Sets dsNewsStories
     **********************************************************/
    dsGetTeams() {
        console.log("-->" + " dsGetTeams()..");
        var url = this.com$.getHome();
        console.log("-->" + " dsGetTeams() - home is (" + url + ")");
        /*this.dsTeams = [ {'id':0, 'name': "Junior A", 'lrcode':0, 'lrFixturesCode':0, 'lrResultsCode':0, 'noticeboard':"No info"},
                         {'id':0, 'name': "Junior B", 'lrcode':0, 'lrFixturesCode':0, 'lrResultsCode':0, 'noticeboard':"No info"},
                         {'id':0, 'name': "Youths", 'lrcode':0, 'lrFixturesCode':0, 'lrResultsCode':0, 'noticeboard':"No info"},
                       ];*/
        this.lg$.log("===>>> Hitting endpoing: " + url + 'backend/public/teams');
        return this.http$.get(url + 'backend/public/teams')
            .subscribe((data) => this.dsSetTeams(data), err => console.error("DataService: ERROR reading teams from server!"), () => console.log(" <== Teams received from server <=="));
    }
    /**********************************************************
     * Name       : dsSetTeams()
     * Description: Set the current member to the one passed in
     * Scope      : Externally accessible
     * Params in  : member: the member in question
     * Return     :
     **********************************************************/
    dsSetTeams(data) {
        console.log("-->" + "dsSetTeams()");
        this.dsTeams = data;
    }
    /**********************************************************
     * Name       : loadTeamDetailsByName()
     * Description: Load the current team's details
     * Scope    : Externally accessible
     * Params in: teamName: the name of the team in question
     * Return   :
     **********************************************************/
    loadTeamDetailsByName(teamName) {
        console.log("-->" + "loadTeamDetailsByName(" + teamName + ")");
        // Clear out the TeamMembers array first
        this.dsCurrentTeam = null;
        var url = this.com$.getHome();
        this.http$.get(url + 'backend/public/team/' + teamName)
            .subscribe((data) => this.dsCurrentTeam = data, error => console.log("ERROR: Reading team details from server, team: " + teamName), () => console.log("Team details read successfully for team: " + teamName));
    }
    /**********************************************************
     * Name       : loadTeamMembersByIdByObservable()
     * Description: Load the current team's details, return an
     * 				observable to the caller
     * Scope    : Externally accessible
     * Params in: team the id of the team in question
     * Return   : An observable
     **********************************************************/
    loadTeamMembersByIdByObservable(team) {
        let url = this.com$.getHome();
        console.log("loadTeamMembersByIdByObservable -> [" + url + 'backend/public/teammembers/' + team + "]");
        return this.http$.get(url + 'backend/public/teammembers/' + team);
    }
    /**********************************************************
     * Name       : loadTeamDetailsByNameByObservable()
     * Description: Load the current team's details, return an
     * 				observable to the caller
     * Scope    : Externally accessible
     * Params in: teamName: the name of the team in question
     * Return   : An observable
     **********************************************************/
    loadTeamDetailsByNameByObservable(teamName, indent) {
        var prefix = '';
        let teamId;
        for (var i = 0; i < (indent + 4); i++) {
            prefix += ' ';
        }
        console.log(prefix + "|-->" + "loadTeamDetailsByNameByObservable(" + teamName + ")");
        // Clear out the TeamMembers array first
        //this.dsCurrentTeam = null;
        var url = this.com$.getHome();
        console.log("loadTeamDetailsByNameByObservable -> [" + url + 'backend/public/team' + teamName + "]");
        return this.http$.get(url + 'backend/public/team/' + teamName);
    }
    /**********************************************************
     * Name       : loadCurrentTeamMembersByNameByObservable()
     * Description: Load the current team's members
     * Scope    : Externally accessible
     * Params in: teamName: the name of the team in question
     * Return   : Observable
     **********************************************************/
    loadCurrentTeamMembersByNameByObservable(teamName, indent) {
        var prefix = '';
        if (indent > 0) {
            for (var i = 0; i < (indent + 4); i++) {
                prefix += ' ';
            }
        }
        console.log(prefix + "|-->" + "loadCurrentTeamMembersByNameByObservable(" + teamName + ")");
        if (this.teamMembersAreLoaded(teamName)) {
            return; // Already loaded
        }
        // Clear out the TeamMembers array first
        let teamId = this.convertTeamToInt(teamName);
        if (this.dsTeamMembers[teamId] !== undefined)
            this.dsTeamMembers[teamId].length = 0;
        var url = this.com$.getHome();
        return this.http$.get(url + 'backend/public/teammembers/' + teamName);
    }
    /**********************************************************
     * Name       : teamMembersAreLoaded()
     * Description: Check to see if we've already loaded the
     * 				team members
     * Scope    : Internally accessible
     * Params in: teamName: the name of the team in question
     * Return   : true/false
     **********************************************************/
    teamMembersAreLoaded(teamName) {
        let teamId = this.convertTeamToInt(teamName);
        console.log("    |--> teamMembersAreLoaded: " + this.dsTeamMembers[teamId]);
        if ((this.dsTeamMembers[teamId] === null) || (this.dsTeamMembers[teamId] === undefined)) {
            console.log("         |-- Member array not defined, i.e. not loaded..");
            return false;
        }
        else if ((this.dsTeamMembers[teamId].length !== 0) && (this.dsCurrentTeam.name === teamName)) {
            console.log("-->" + "teamMembersAreLoaded():" + "Members of [" + teamName + "] already loaded not loading again!");
            return true;
        }
        else {
            return false;
        }
    }
    /**********************************************************
     * Name       : loadCurrentTeamMembersByName()
     * Description: Load the current team's details and members
     * Scope    : Externally accessible
     * Params in: teamName: the name of the team in question
     * Return   :
     **********************************************************/
    loadCurrentTeamMembersByName(teamName, callback) {
        console.log("-->" + "loadCurrentTeamMembersByName(" + teamName + ")");
        let teamId = this.convertTeamToInt(teamName);
        if (this.teamMembersAreLoaded(teamName)) {
            console.log("    |- Team already loaded..");
            this.showTeamLoaded(teamId);
            return; // Already loaded
        }
        else {
            // Clear out the TeamMembers array first
            let teamId = this.convertTeamToInt(teamName);
            var url = this.com$.getHome();
            console.log("-->" + "loadCurrentTeamByName(), loading team:" + teamName);
            this.http$.get(url + 'backend/public/teammembers/' + teamName)
                .subscribe(data => this.dsTeamMembers[teamId] = data, //callback(data),
            //callback(data),
            error => console.log("ERROR: Reading team members from server, team: " + teamName), () => console.log("<-- Team members read successfully for team: " + teamName));
        }
    }
    showTeamLoaded(teamId) {
        console.log("showTeamLoaded()");
        for (let i = 0; i < this.dsTeamMembers[teamId].length; i++) {
            console.log("-- [" + i + "]: " + this.dsTeamMembers[teamId][i].name);
        }
    }
    /// TEMP FUNCTION TO SIM REST CALL TO SERVER
    getTeamDetailsSim(teamName) {
        return this.dsCurrentTeam; // = this._sds.getTeamDetailsByName(teamName);
    }
    /**********************************************************
     * Name       : clearCurrentMember()
     * Description: Clear out the dsCurrentMember
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : None
     **********************************************************/
    clearCurrentMember() {
        this.dsCurrentMember = null;
    }
    /**********************************************************
     * Name       : loadPhotoDetails()
     * Description: Retrieves a list of photos from the server
     * Scope      : Internal
     * Params in  : None
     * Return     : Sets
     **********************************************************/
    loadPhotoDetails(url) {
        console.log("-->" + "loadPhotoDetails(" + url + ")");
        // Read the list of files from the server
        return this.http$.get(url);
    }
    /**********************************************************
     * Name       : loadVideoDetails()
     * Description: Retrieves a list of videos from the server
     * Scope      : Internal
     * Params in  : None
     * Return     : Sets
     **********************************************************/
    loadVideoDetails(url) {
        console.log("-->" + "loadVideoDetails(" + url + ")");
        // Read the list of files from the server
        return this.http$.get(url);
    }
    getUser(username) {
        console.log("-->" + "getUser(" + username + ")");
        return this.http$.get(this.com$.getHome() + 'backend/admin/user');
    }
    /**********************************************************
     * Name       : dsGetAllMembers()
     * Description: Get all members from the server
     * Scope      : Internal
     * Params in  :
     * Return     :
     **********************************************************/
    dsGetAllMembers() {
        console.log("-->" + "dsGetAllMembers()");
        var url = this.com$.getHome();
        return this.http$.get(url + "backend/admin/members")
            .subscribe((data) => this.dsAllMembers = data, err => console.log("ERROR getting members from server!"), () => console.log("<== Finished getting all members from server <=="));
    }
    /**********************************************************
     * Name       : getTeamNameFrmId()
     * Description: Convert a team name to it's id
     * Scope    : Externally accessible via the service
     * Params in: scope: The parents scope
     *
     * Return: The team id
     **********************************************************/
    getTeamNameFrmId(iTeam, indent) {
        let sIndent = ''; // Initialise the logging indent
        for (let i = 0; i < indent; i++) {
            sIndent += ' ';
        }
        console.log(sIndent + "==> getTeamNameFrmId(" + iTeam + ")");
        var sTeamId = "";
        for (var i = 0; i < this.dsTeams.length; i++) {
            if (iTeam === this.dsTeams[i].id) {
                sTeamId = this.dsTeams[i].name;
                console.log(sIndent + "        ::: team FOUND " + i + " = " + this.dsTeams[i].name);
                console.log(sIndent + "<== getTeamNameFrmId(" + sTeamId + ")");
                return sTeamId;
            }
            console.log(sIndent + "        ::: team not team " + i + " = " + this.dsTeams[i].name);
        }
        console.log(sIndent + "<== getTeamNameFrmId(" + sTeamId + ")");
        return sTeamId;
    }
    saveJwt(jwt) {
        if (jwt) {
            localStorage.setItem('id_token', jwt);
        }
    }
    /**********************************************************
     * Name       : setLogHdr()
     * Description: Sets up the correct indentation and header
     * 				information for the log messages.
     * Scope    : Internal
     * Params in:
     * Return   :
     **********************************************************/
    setLogHdr(logdepth, moduleName) {
        console.log("** [Logger Service] Setting log header for [" + moduleName + "]");
        let i = 0;
        let depth = logdepth * 4;
        let moduleSpace = 25;
        let hdr = "## " + moduleName;
        // Make sure the field width is the standard, pad if necessary
        if (hdr.length < moduleSpace) {
            let diff = moduleSpace - hdr.length;
            let i = 0;
            for (i = 0; i < diff; i++) {
                hdr += ' ';
            }
        }
        // (1) Set the indentation according to the depth
        for (i = 0; i < depth; i++) {
            hdr += " ";
        }
        // (2) Add on call stack indicator
        hdr += "|-";
        return hdr;
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return Observable.throw(errMsg);
    }
    /**********************************************************
     * Name       : processPhotosResponse()
     * Description: Adds the list of photos recieved from the
     *              server to the album and redirects to the
     *              photos component.
     * Scope    : Internal
     * Params in: data: The data received from the server
     * path     : The path to the photos on the server
     * album    : The media album to put the photos in
     * Return   : None
     **********************************************************/
    processPhotosResponse(data, path, album, router) {
        this.lg$.log("-> processResponse()");
        this.lg$.log("     |- data:" + data);
        this.lg$.log("     |- path:" + path);
        this.lg$.log("     |- album:" + album);
        var self = this;
        data.forEach(function (row) {
            var photo = new _model_media__WEBPACK_IMPORTED_MODULE_8__["Media"]();
            photo.image = path + row;
            album.push(photo);
            self.lg$.log("         |- added image: " + photo.image);
        });
        this.lg$.log("<- processResponse()");
        this.lg$.trace("Redirecting to /photos");
        router.navigate(['/photos']);
    }
    /**********************************************************
     * Name       : printAlbum()
     * Description: Logs the content of the albumn.
     * Scope      :
     * Params in  : data: The data received from the server
     * path       : The path to the photos on the server
     * album      : The media album to put the photos in
     * Return     : None
     **********************************************************/
    printAlbum() {
        for (let picture of this.aAlbum) {
            this.lg$.trace(picture.image);
        }
    }
    /**********************************************************
     * Name       : getClubOfficers()
     * Description: Retrievs the current club officers from db.
     * Scope      :
     * Params in  : None
     * Return     : Arrah of officers
     **********************************************************/
    getClubOfficers() {
        console.log("-->" + " getClubOfficers()..");
        var url = this.com$.getHome();
        console.log("-->" + " getClubOfficers() - home is (" + url + ")");
        return this.http$.get(url + 'backend/public/officers');
    }
    /**********************************************************
    * Name       : getVisitorCount()
    * Description: Get the current visitor count fromt the
    *              server.
    * Scope    : Externally accessible
    * Params in: None
    * Return   : The current count
    **********************************************************/
    getVisitorCount() {
        let url = this.com$.getHome();
        return this.http$.get(url + 'backend/public/vcount');
    }
    /**********************************************************
     * Name       : incrementVisitorCount()
     * Description: Increment the count on the server and return
     *              the new value.
     * Scope    : Externally accessible
     * Params in: None
     * Return   : None, it sets the dsVisitorCount variable.
     **********************************************************/
    incrementVisitorCount() {
        let url = this.com$.getHome();
        this.http$.get(url + 'backend/public/ivcount')
            .subscribe((data) => this.dsVisitorCount = data, error => console.log("ERROR: Incrementing visitor count on server"), () => console.log("Visitor count updated successfully"));
    }
}
SessionDataService.ɵfac = function SessionDataService_Factory(t) { return new (t || SessionDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SessionDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionDataService, factory: SessionDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _src_app_model_site_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/model/site-user.ts");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _src_app_services_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/services/error.service.tns.ts");












class UserService {
    constructor(lg$, com$, err$, http$) {
        this.lg$ = lg$;
        this.com$ = com$;
        this.err$ = err$;
        this.http$ = http$;
        this.componentName = 'UserService';
        this.logdepth = 1;
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.CurrentUser = new _src_app_model_site_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.allUsers = new Array();
        // TODO: read the roles from the db
        this.roles = ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_SECRETARY', 'ROLE_ADMIN'];
        console.log("*********** CONSTRUCTOR OF " + this.componentName);
        console.log("Error service: " + this.err$);
        this.err$.openAlert("TEST ALERT !!!!!!!");
    }
    setCurrentUser(user) {
        this.CurrentUser = user;
    }
    getCurrentUser() {
        return this.CurrentUser;
    }
    getUserDetails(username) {
        this.lg$.log("-> getUserDetails(" + username + ")");
        let url = this.com$.getHome() + "backend/admin/user/" + username;
        return this.http$.get(url);
    }
    getUserName() {
        return this.CurrentUser.name;
    }
    setUserAsAuthenticated() {
        this.isAuthenticated = true;
    }
    /**********************************************************
    * @Name       : getUser()
    * @Description: Read a given uewer from the server
    * @Scope      : Externally accessible
    * @Params     : user: name of the user to retrieve
    * @Return     : Observable<User>
    **********************************************************/
    getUser(user) {
        this.lg$.log("getUser()");
        let url = this.com$.getHome();
        let headers = this.com$.setupHeaders();
        this.lg$.log("-->" + "getUser(), reading user from: " + url + 'admin/me/' + user);
        return this.http$.get(url + 'backend/admin/me/' + user, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.err$.handleError));
    }
    /**********************************************************
     * @Name       : getAllUsers()
     * @Description: Read the application users from the server
     * @Scope      : Externally accessible
     * @Params     : filter: the string the user wants to filter with
     *               sort: sort direction, asc or desc
     *               page: the page number, of data to return
     *               pagesize: The size of each page to return
     * @Return     : Observable<User[]>
     **********************************************************/
    getAllUsers(filter, sort, page, pagesize) {
        this.lg$.log("getAllUsers()");
        let url = this.com$.getHome();
        let headers = this.com$.setupHeaders();
        this.lg$.log("-->" + "getAllUsers(), loading users from: " + url + '/admin/users/');
        return this.http$.get(url + 'backend/admin/users/', { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.err$.handleError));
    }
    /**********************************************************
     * Name       : logUsers()
     * Description: Log the list of users in memory
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : None
     **********************************************************/
    logUsers(allUsers) {
        let i = 0;
        for (let user of allUsers) {
            let u = user;
            this.lg$.log("User[" + i++ + "]: " + u.name + " , uId: " + u.userId);
        }
    }
    /**********************************************************
     * Name       : logUser()
     * Description: Log the user details
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : None
     **********************************************************/
    logUser(user) {
        if (user !== null) {
            this.lg$.log(" User id: " + user.userId);
            this.lg$.log(" User name: " + user.name);
            this.lg$.log(" User address: " + user.address);
            this.lg$.log(" User DOB: " + user.dob);
            this.lg$.log(" User email: " + user.email);
            this.lg$.log(" User phone: " + user.phone);
            this.lg$.log(" User status: " + user.enabled);
            this.lg$.log(" User role: " + user.role);
        }
        else
            this.lg$.log("==> Null user passed to logUser!");
        return;
    }
    /**********************************************************
     * Name       : editUser()
     * Description: Edit the given user
     * Scope      : Externally accessible
     * Params in  : The user object
     * Return     : None
     **********************************************************/
    editUser(user) {
        this.lg$.log("editUser(" + user.name + ")");
    }
    /**********************************************************
     * Name       : deleteUser()
     * Description: Delete the given user
     * Scope      : Externally accessible
     * Params in  : The user object
     * Return     : None
     **********************************************************/
    deleteUser(user, callback, dataSource, paginator) {
        this.lg$.log("    |-> deleteUser(" + user.name + ")");
        var home = this.com$.getHome();
        let userUrl = home + 'backend/admin/user/';
        // Add the id of the user to delete
        userUrl += user.userId;
        this.lg$.log("URL: " + userUrl);
        let headers = this.com$.setupHeaders(); //this.setupHeaders();
        this.lg$.trace("Auth Hdr: " + headers.get('Authorization'));
        return this.http$.delete(userUrl, { headers })
            .subscribe(data => {
            this.lg$.log("    |<- deleteUser(" + data + ")");
            callback(user, dataSource, paginator);
        }, err => this.err$.handleError(err), //this.lg$.log("UserService: ERROR deleting user from server! [" + err + "]"),
        () => this.lg$.log("    |<- deleteUser() - finished"));
    }
    applyUserDelete(user, dataSource, paginator) {
        console.log("** applyUserDelete(" + user.name + ")");
        let i = 0;
        for (let u of dataSource.data) {
            console.log("** Checking user: " + u.name + ", user.id: " + user.userId + ", u.userId: " + u.userId);
            if (user.userId === u.userId) {
                dataSource.data.splice(i, 1);
                dataSource.paginator = paginator;
                console.log("User deleted.");
            }
            i++;
        }
    }
    /**********************************************************
     * Name       : addUser()
     * Description: Add the given user
     * Scope      : Externally accessible
     * Params in  : The user object
     * Return     : None
     **********************************************************/
    addUser(user, callback, dataSource, paginator) {
        this.lg$.log("|-> addUser(" + user.name + ")");
        this.lg$.log("|-> addUser(" + dataSource + ")");
        var home = this.com$.getHome();
        let userUrl = home + 'backend/admin/user/';
        this.lg$.log("URL: " + userUrl);
        // Set the headers, including the JWT
        let headers = this.com$.setupHeaders();
        return this.http$.post(userUrl, user, { headers })
            .subscribe(data => {
            callback(user, dataSource, paginator);
        }, err => this.err$.handleError(err), () => this.lg$.log("|<- addUser() - finished"));
    }
    applyUserAdd(user, dataSource, paginator) {
        console.log("** applyUserAdd(" + user.name + ")");
        let allusers = dataSource.data.concat(user);
        dataSource.data = allusers;
        dataSource.paginator = paginator;
    }
    /**********************************************************
     * Name       : updateUser()
     * Description: Updatethe given user
     * Scope      : Externally accessible
     * Params in  : The user object
     * Return     : None
     **********************************************************/
    updateUser(user, callback) {
        this.lg$.log("    |-> updateUser(" + user.name + ")");
        var home = this.com$.getHome();
        let memberUrl = home + 'backend/admin/user/';
        this.lg$.log("URL: " + memberUrl);
        // Set the headers, including the JWT
        let headers = this.com$.setupHeaders();
        return this.http$.put(memberUrl, user, { headers })
            .subscribe(data => {
            this.lg$.log("    |<- updateUser(" + data + ")");
        }, err => this.lg$.log("UserService: ERROR saving member to server! [" + err + "]"), () => this.lg$.log("    |<- updateUser() - finished"));
    }
    setUserDetails(user) {
        this.lg$.log("-> setUserDetails()");
        this.CurrentUser = user;
        this.usLoggedIn = true;
        localStorage.setItem('AdminHasLoggedIn', 'true');
        this.isAuthenticated = true;
        this.lg$.log('User login status: ' + this.isAuthenticated);
    }
    defaultUserFields(user) {
        user.address = user.address === null ? '' : user.address;
        user.dob = user.dob === null ? '1900-1-1' : user.dob;
        user.email = user.email === null ? '' : user.email;
        user.phone = user.phone === null ? '' : user.phone;
        user.enabled = user.enabled === null ? false : user.enabled;
        user.role = user.role === null ? '' : user.role;
        return user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_src_app_services_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }, { type: _src_app_services_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/common/index.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/auth.service.ts");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _src_app_services_session_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/services/session-data.service.ts");
/* harmony import */ var _src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/services/user.service.ts");
/* harmony import */ var _src_app_services_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/services/error.service.tns.ts");
/* harmony import */ var _src_app_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/services/cookie.service.ts");












class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
        _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _src_app_services_session_data_service__WEBPACK_IMPORTED_MODULE_6__["SessionDataService"],
        _src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _src_app_services_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"],
        _src_app_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
    ], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
        _common__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
        _common__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                    _common__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
                providers: [
                    _src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
                    _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
                    _src_app_services_session_data_service__WEBPACK_IMPORTED_MODULE_6__["SessionDataService"],
                    _src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                    _src_app_services_error_service__WEBPACK_IMPORTED_MODULE_8__["ErrorService"],
                    _src_app_services_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");

            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.tns.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.tns.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tbW9uLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tbW9uL3JvdXRlci1tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbWF0ZXJpYWwubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbC9tZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWwvbWVtYmVyLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbC9zZXJ2ZXItbW9kZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWwvc2l0ZS11c2VyLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbC90ZWFtLnRzIiwid2VicGFjazovLy8uL2FwcC9uZXdzLXN0b3J5LXZpZXcvbmV3cy1zdG9yeS12aWV3LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy1zdG9yeS12aWV3L25ld3Mtc3Rvcnktdmlldy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9jb29raWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvZXJyb3Iuc2VydmljZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL3Nlc3Npb24tZGF0YS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL21haW4udG5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7Ozs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDdkssaUVBQWlFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3hLLGdFQUFnRSxtQkFBTyxDQUFDLGlJQUErRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSwrREFBK0QsRUFBRSwrREFBK0Q7QUFDeFcsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUVGO0FBRUU7QUFHakMsTUFBTSxjQUFjLEdBQVU7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RUFBdUI7UUFDdkIsb0RBQVk7bUlBYUgsWUFBWSxjQWZyQiw4RUFBd0I7UUFDeEIsNkVBQXVCO1FBQ3ZCLG9EQUFZOzZGQWFILFlBQVk7Y0FsQnhCLHNEQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCw4RUFBd0I7b0JBQ3hCLDZFQUF1QjtvQkFDdkIsb0RBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULDBFQUFXO29CQUNYLDhFQUFhO29CQUNiLDhFQUFhO29CQUNiLHlGQUFrQjtvQkFDbEIsMEVBQVc7b0JBQ1gsNEVBQVk7b0JBQ1osOEVBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsOERBQWdCLENBQUU7YUFDOUI7Ozs7Ozs7Ozs7QUMvQkQ7QUFBQTtBQUFBLGdGQUFnRjtBQUNoRiwyRUFBMkU7QUFDM0UsZ0VBQWdFO0FBRXpELE1BQU0sV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILG1FQUFtRTs7Ozs7Ozs7Ozs7OztBQ1huRSxPQUFPLEVBQUUsc0JBQVMsQ0FBRSwrRUFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELGNBQWdGO0FBQ047QUFDMUUsc0RBQTZIO0FBQzdILHdCQUF5RTtBQUN6RSxTQUF3RTtBQUN4RSxRQUFtRjtBQUNuRixZQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzcydcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJy4vY29tbW9uJztcblxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQnO1xuXG5cbmV4cG9ydCBjb25zdCBTSEFSRURfTU9EVUxFUzogYW55W10gPSBbXG4gIFNoYXJlZE1vZHVsZSxcbiAgUm91dGVyTW9kdWxlLFxuICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG5dO1xuXG5leHBvcnQgY29uc3QgU0hBUkVEX0NPTVBPTkVOVFM6IGFueVtdID0gW1xuXG5dOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNsb3NlRHJhd2VyKCkge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cblxuICBpc0NvbXBvbmVudFNlbGVjdGVkKCB1cmw6IHN0cmluZyApIHt9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9tYXRlcmlhbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTSEFSRURfTU9EVUxFUyB9IGZyb20gJy4vYXBwLmNvbW1vbic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld3NTdG9yeVZpZXdDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9uZXdzLXN0b3J5LXZpZXcvbmV3cy1zdG9yeS12aWV3LmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQvYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5cblxuLy8gaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG4vLyBpbXBvcnQgeyBTZXNzaW9uRGF0YVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9zZXNzaW9uLWRhdGEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL25ld3Muc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTmV3c0NvbXBvbmVudCxcbiAgICBOZXdzU3RvcnlWaWV3Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICAuLi5TSEFSRURfTU9EVUxFUyxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gQXV0aFNlcnZpY2UsXG4gICAgLy8gTG9nZ2VyU2VydmljZSxcbiAgICAvLyBDb21tb25TZXJ2aWNlLFxuICAgIC8vIFNlc3Npb25EYXRhU2VydmljZSxcbiAgICAvLyBVc2VyU2VydmljZSxcbiAgICAvLyBFcnJvclNlcnZpY2UsXG4gICAgLy8gQ29va2llU2VydmljZSxcbiAgICBOZXdzU2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3c1N0b3J5Vmlld0NvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL25ld3Mtc3Rvcnktdmlldy9uZXdzLXN0b3J5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9ybWF0aW9uTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2hvbWUvc3RvcnknLCBjb21wb25lbnQ6IE5ld3NTdG9yeVZpZXdDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcImluZm9ybWF0aW9uXCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KFwiQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ubW9kdWxlXCIpLnRoZW4obSA9PiBtLkluZm9ybWF0aW9uTW9kdWxlKSB9XG5dOyIsImV4cG9ydCAqIGZyb20gJy4vcm91dGVyLW1vZHVsZSc7IiwiZXhwb3J0IHtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgYXMgUm91dGVyTW9kdWxlLFxuICAgIFJvdXRlckV4dGVuc2lvbnMgYXMgUm91dGVyXG4gIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyL3JvdXRlcic7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbXBvbmVudE5hbWUgPSAnSG9tZUNvbXBvbmVudCc7XG4gIGxvZ2RlcHRoICAgICAgPSAxO1xuICBsb2dnZWRJbiAgICAgID0gJyc7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgbGckICAgIDogTG9nZ2VyU2VydmljZSApIHtcbiAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICB9XG59XG4iLCI8QWN0aW9uQmFyPlxuICAgIDwhLS0gXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgLS0+XG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiICh0YXApPVwib25EcmF3ZXJCdXR0b25UYXAoKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICA8IS0tIFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgLS0+XG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiAodGFwKT1cIm9uRHJhd2VyQnV0dG9uVGFwKClcIlxuICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgPC9BY3Rpb25JdGVtPlxuICAgIDxMYWJlbCB0ZXh0PVwiQXZlbnVlIFVuaXRlZCBGQ1wiPjwvTGFiZWw+XG48L0FjdGlvbkJhcj5cblxuPG5ld3M+PC9uZXdzPiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuXG4vL2ltcG9ydCB7IERhdGVwaWNrZXJMb2NhbGUsIEFQUF9EQVRFX0ZPUk1BVFMgfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGVwaWNrZXItbG9jYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXRUb29sYmFyTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRTaWRlbmF2TW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0U2lkZW5hdk1vZHVsZSwgTWF0TGlzdE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgICAvLyAgIHVzZUNsYXNzOiBBcHBEYXRlQWRhcHRlclxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7IFxuICAgICAgICAvLyAgICAgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgXG4gICAgICAgIC8vICAgICB1c2VWYWx1ZTogQVBQX0RBVEVfRk9STUFUUyBcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge3Byb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdlbi1HQid9XG4gICAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9IiwiZXhwb3J0IC8qKlxuICogTWVkaWFcbiAqL1xuY2xhc3MgTWVkaWEge1xuICAgIHR5cGU6c3RyaW5nO1xuICAgIHRpdGxlOnN0cmluZztcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc7XG4gICAgaW1hZ2U6c3RyaW5nO1xuICAgIHRodW1iOnN0cmluZztcbiAgICBcbi8qICAgIGNvbnN0cnVjdG9yKHR5cGU6c3RyaW5nLHRpdGxlOnN0cmluZyxkZXNjcmlwdGlvbjpzdHJpbmcsaW1hZ2U6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7ICAgICAgICBcbiAgICB9Ki9cbn0iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24nXG5cbmV4cG9ydCBjbGFzcyBNZW1iZXIge1xuXHRpZDpudW1iZXI7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgYWRkcmVzczpzdHJpbmc7XG4gICAgcGhvbmU6c3RyaW5nO1xuICAgIHBob25lMjpzdHJpbmc7XG4gICAgZW1haWw6c3RyaW5nO1xuICAgIGRvYjpzdHJpbmc7XG4gICAgYW1vdW50OnN0cmluZztcbiAgICBwYXlkYXRlOnN0cmluZztcbiAgICByZWNlaXB0aWQ6c3RyaW5nO1xuICAgIHRlYW06bnVtYmVyO1xuICAgIHRlYW0yOm51bWJlcjtcbiAgICB0ZWFtMzpudW1iZXI7XG4gICAgcG9zaXRpb246bnVtYmVyO1xuICAgIHBvc2l0aW9uMjpudW1iZXI7XG4gICAgcG9zaXRpb24zOm51bWJlcjtcbiAgICBsaWQ6bnVtYmVyO1xuICAgIGZhdnRlYW06c3RyaW5nO1xuICAgIGZhdnBsYXllcjpzdHJpbmc7XG4gICAgc2FwcGVhcnM6bnVtYmVyO1xuICAgIHNhc3Npc3RzOm51bWJlcjtcbiAgICBzZ29hbHM6bnVtYmVyO1xuICAgIHBob3RvOnN0cmluZztcbiAgICBhY2hpZXZlbWVudHM6c3RyaW5nO1xuICAgIHN0YXR1czpzdHJpbmc7XG4gICAgYWNhZGVteWluZm86c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gJyc7XG4gICAgICAgIHRoaXMucGhvbmUgPSAnJztcbiAgICAgICAgdGhpcy5waG9uZTIgPSAnJztcbiAgICAgICAgdGhpcy5lbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmRvYiA9ICcnO1xuICAgICAgICB0aGlzLmFtb3VudCA9ICcwJztcbiAgICAgICAgdGhpcy5wYXlkYXRlID0gJyc7XG4gICAgICAgIHRoaXMucmVjZWlwdGlkID0gJyc7XG4gICAgICAgIHRoaXMudGVhbSA9IDA7XG4gICAgICAgIHRoaXMudGVhbTIgPSAwO1xuICAgICAgICB0aGlzLnRlYW0zID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24yID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbjMgPSAwO1xuICAgICAgICB0aGlzLmxpZCA9IDA7XG4gICAgICAgIHRoaXMuZmF2dGVhbSA9ICcnO1xuICAgICAgICB0aGlzLmZhdnBsYXllciA9ICcnO1xuICAgICAgICB0aGlzLnNhcHBlYXJzID0gMDtcbiAgICAgICAgdGhpcy5zYXNzaXN0cyA9IDA7XG4gICAgICAgIHRoaXMuc2dvYWxzID0gMDtcbiAgICAgICAgdGhpcy5waG90byA9ICcnO1xuICAgICAgICB0aGlzLmFjaGlldmVtZW50cyA9ICcnO1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICB0aGlzLmFjYWRlbXlpbmZvID0gJyc7XG4gICAgfVxuXG59IiwiZXhwb3J0IC8qKlxuICogU2VydmVyTW9kZVxuICovXG5jbGFzcyBTZXJ2ZXJNb2RlIHtcbiAgICBtb2RlcyA9IHsgTE9DQUw6MCwgUkVNT1RFOjF9O1xuICAgIGN1cnJlbnRNb2RlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyppZiggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb2RlID0gdGhpcy5tb2Rlcy5SRU1PVEU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ki9cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vZGUgPSB0aGlzLm1vZGVzLlJFTU9URTtcbiAgICAgICAgLyp9Ki9cbiAgICB9XG5cbiAgICBnZXRTZXJ2ZXJNb2RlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNb2RlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBNeVRlYW1zIH0gZnJvbSAnLi9teS10ZWFtcyc7XG5cbmV4cG9ydCAvKipcbiAqIG5hbWVcbiAqL1xuY2xhc3MgVXNlciB7XG4gICAgdXNlcklkICA6IG51bWJlcjtcbiAgICBuYW1lICAgIDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgYWRkcmVzcyA6IHN0cmluZztcbiAgICBwaG9uZSAgIDogc3RyaW5nO1xuICAgIGVtYWlsICAgOiBzdHJpbmc7XG4gICAgZG9iICAgICA6IHN0cmluZztcbiAgICBhdmF0YXIgIDogc3RyaW5nO1xuICAgIHJvbGUgICAgOiBzdHJpbmc7XG4gICAgcGVybWlzc2lvbnM6IHN0cmluZyBbXTtcbiAgICBlbmFibGVkIDogYm9vbGVhbjtcbiAgICAvL3JvbGVzICAgOiBBcnJheUxpa2U8c3RyaW5nPjtcbiAgICAvLyBhdXRob3JpdGllczpBcnJheUxpa2U8c3RyaW5nPjtcbiAgICAvLyBwZXJtaXNzaW9uczpNeVRlYW1zO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXNlcklkICAgPSAwO1xuICAgICAgICB0aGlzLm5hbWUgICAgID0gJyc7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5hZGRyZXNzICA9ICcnO1xuICAgICAgICB0aGlzLmVtYWlsICAgID0gJyc7XG4gICAgICAgIHRoaXMucGhvbmUgICAgPSAnJztcbiAgICAgICAgdGhpcy5kb2IgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnJvbGUgICAgID0gJyc7XG4gICAgICAgIHRoaXMuYXZhdGFyICAgPSAnJztcbiAgICAgICAgdGhpcy5lbmFibGVkICA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMucm9sZXMgICAgPSBbXTtcbiAgICAgICAgLy90aGlzLmF1dGhvcml0aWVzID0gW107XG5cbiAgICB9XG5cbn0iLCJleHBvcnQgLyoqXG4gKiBUZWFtXG4gKi9cbmNsYXNzIFRlYW0ge1xuICBpZDpudW1iZXI7XG5cdG5hbWU6c3RyaW5nO1xuXHRscmNvZGU6bnVtYmVyO1xuXHRsckZpeHR1cmVzQ29kZTpudW1iZXI7XG5cdGxyUmVzdWx0c0NvZGU6bnVtYmVyO1xuXHRub3RpY2Vib2FyZDpzdHJpbmc7XG5cblx0Z2V0VGVhbU5hbWUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmV3c1N0b3J5IH0gZnJvbSAnQHNyYy9hcHAvbW9kZWwvbmV3cy1zdG9yeSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9uZXdzLXN0b3J5LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25ld3Mtc3Rvcnktdmlldy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2VyU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZXdzU3RvcnlWaWV3Q29tcG9uZW50IHtcbiAgICBjb21wb25lbnROYW1lID0gJ05ld3NTdG9yeVZpZXdDb21wb25lbnQnO1xuICAgIGxvZ2RlcHRoICAgICAgPSAyO1xuICAgIHNlcnZlclVybDogU3RyaW5nO1xuICAgIHN0b3J5OiBOZXdzU3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBsZyQ6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbmV3cyQ6IE5ld3NTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb20kOiBDb21tb25TZXJ2aWNlICkge1xuICAgICAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgICAgICB0aGlzLnN0b3J5ID0gdGhpcy5uZXdzJC5jdXJyZW50U3Rvcnk7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIlN0b3J5IHNldCB0byA6IFwiICsgdGhpcy5zdG9yeS50aXRsZSk7XG4gICAgfVxufSIsIjxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKlwiIHJvd3M9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCI+XG4gICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHRleHQ9XCJ7e3N0b3J5LnRpdGxlfX1cIiBjbGFzcz1cIm5ld3MtdGl0bGVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICA8SW1hZ2Ugcm93PVwiMVwiIGNvbD1cIjBcIiBzcmM9XCJ7e3NlcnZlclVybH19e3sgc3RvcnkuaW1hZ2UgfX1cIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiPjwvSW1hZ2U+XG4gICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMFwiIHRleHQ9XCJ7e3N0b3J5LmRlc2NyaXB0aW9ufX1cIiBjbGFzcz1cIm5ld3MtZGVzY3JpcHRpb25cIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjBcIiB0ZXh0PVwie3tzdG9yeS5zdG9yeX19XCIgY2xhc3M9XCJuZXdzLXN0b3J5XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICA8L0dyaWRMYXlvdXQ+PlxuPC9TY3JvbGxWaWV3PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NTdG9yeSB9IGZyb20gJ0BzcmMvYXBwL21vZGVsL25ld3Mtc3RvcnknO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yICAgOiAnbmV3cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25ld3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJscyAgOiBbJy4vbmV3cy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzICA6IFsgTG9nZ2VyU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3c0NvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnROYW1lID0gJ05ld3NDb21wb25lbnQnO1xuICAgIGxvZ2RlcHRoICAgICAgPSAyO1xuICAgIHNlcnZlclVybDogU3RyaW5nO1xuICAgIHRoZU5ld3M6IE5ld3NTdG9yeVtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBsZyQ6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgY29tbW9uJDogQ29tbW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHVibGljIG5ld3MkOiBOZXdzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMubGckLnNldExvZ0hkcih0aGlzLmxvZ2RlcHRoLCB0aGlzLmNvbXBvbmVudE5hbWUpO1xuICAgICAgdmFyIHN1YnNjcmliZXIgPSB0aGlzLm5ld3MkLmxvYWROZXdzU3RvcmllcygpO1xuICAgICAgc3Vic2NyaWJlci5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIChkYXRhOiBbTmV3c1N0b3J5XSkgPT4gdGhpcy5uZXdzJC5zZXROZXdzKGRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciAgICAgICAgICAgICAgID0+IHt0aGlzLmxnJC5lcnJvcihcIj09PT4gRXJyb3IgZ2V0dGluZyBuZXdzIGZyb20gc2VydmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7IHRoaXMuY3JlYXRlTmV3cygpO30sXG4gICAgICAgICAgICAgICAgICAgICgpICAgICAgICAgICAgICAgICAgPT4gdGhpcy5sZyQubG9nKFwiIDw9PT0gUmVjZWl2ZWQgbmV3cyBmcm9tIHNlcnZlci4gPD09PT1cIilcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gdGhpcy5jb21tb24kLmdldEhvbWUoKTtcbiAgICAgICAgdGhpcy5sZyQubG9nKFwibmdPbkluaXQoKSAtIHNlcnZlclVybCBzZXQgdG86IFwiICsgdGhpcy5zZXJ2ZXJVcmwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgdGhpcy5sZyQubG9nKFwiU3Rvcnkgd2FzIGNsaWNrZWQgaW4gcG9zaXRpb246IFwiICsgYXJncy5pbmRleCApO1xuICAgICAgdGhpcy5uZXdzJC5jdXJyZW50U3RvcnkgPSB0aGlzLm5ld3MkLk5ld3NTdG9yaWVzW2FyZ3MuaW5kZXhdO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZS9zdG9yeVwiXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdzKCkge1xuICAgICAgdGhpcy5sZyQubG9nKFwiPT4gdGhpcy5jcmVhdGVOZXdzKCkuLi5cIik7XG4gICAgICB0aGlzLnRoZU5ld3MgPSBcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDEsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCIyMDAgQ2x1YlwiLFxuICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSnVseSBkcmF3IHJlc3VsdHNcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIlRoZSBXaW5uZXIgb2YgdGhlIEp1bHkgMjAwIENsdWIgRHJhdyAxc3QgUHJpemUg4oKsNzUwIHdhcyBVcnN1bGEgT1JlaWxseS4gVGhlIOKCrDUwIFJ1bm5lcnMgVXAgd2VyZSBKb2huIE9NYWxsZXksIEdhcnkgU2VlcnkgYW5kIERlY2t5IFJ5YW4uIENvbmdyYXRzIHRvIGFsbC5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9hbmQtdGhlLXdpbm5lci1pcy5qcGdcIixcbiAgICAgICAgICAgICAgXCJ0aHVtYlwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibnNpZFwiOiAyLFxuICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiR1wiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEF2ZW51ZSBBY2FkZW15IGlzIGJhY2sgISEhXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGFydGluZyBvbiBTZXB0IDE0dGggLSByZWdpc3RlciBub3dcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIkRlYXIgUGFyZW50L0d1YXJkaWFuLFxcclxcblxcclxcbkNvYWNoaW5nICB0YWtlcyBwbGFjZSBmcm9tIDkuMzAg4oCTIDEwLjMwIGVhY2ggU2F0dXJkYXkgbW9ybmluZyBvbiB0aGUgQXN0cm90dXJmIFBpdGNoIGF0IExlZXMgUm9hZC4gTkIgV2VhdGhlciBQZXJtaXR0aW5nLiAgICAgICAgXFxyXFxuXFxyXFxuVG8gYm9vayBhIHBsYWNlIGluIHRoZSBBY2FkZW15IGZvciBzZWFzb24gMjAxOSDigJMgMjAyMCBwbGVhc2UgZG93bmxvYWQgQ2x1YlphcCBhcHAgYW5kIHBheSB5b3VyIDIwMTkgQXZlbnVlIFV0ZC4gbWVtYmVyc2hpcCBvbmxpbmUgdG8gc2VjdXJlIHlvdXIgY2hpbGTigJkgcyBwbGFjZS5cXHJcXG5cXHJcXG5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9hY2FkZW15LnBuZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDMsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gaW5zdGFsbCBDbHViWmFwIG9uIHlvdXIgcGhvbmVcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVhc3kgdG8gZm9sbG93IHN0ZXBzXCIsXG4gICAgICAgICAgICAgIFwic3RvcnlcIjogXCJGb2xsb3cgdGhlIDQgc3RlcHMgb24gdGhlIGltYWdlIG9wcG9zaXRlLiBUaGVuLCBzZWxlY3QgIOKAnE15IENsdWLigJ0gb3B0aW9uIGF0IGJvdHRvbSByaWdodCBoYW5kIGNvcm5lciBvZiB0aGUgc2NyZWVuLiBUaGVyZSB5b3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCB0aWxlIHRvIHBheSBjbHViIG1lbWJlcnNoaXAgb25saW5lLlwiLFxuICAgICAgICAgICAgICBcImltYWdlXCI6IFwiYXNzZXRzL2ltZy9uZXdzL0NsdWJaYXAucG5nXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogNCxcbiAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlwiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiIEV1cm9uaWNzIE8nRmxhaGVydHkgRWxlY3RyaWMgU3BvbnNvcnNoaXBcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgYmlnIHRoYW5rIHlvdVwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiQSBiaWcgdGhhbmsgeW91IHRvIEV1cm9uaWNzIE8nRmxhaGVydHkgRWxlY3RyaWMgb24gdGhlaXIgc3BvbnNvcnNoaXAgb2YgdGhlIEF2ZW51ZSBBIHRlYW0gamVyc2V5LiBcIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9KdW5pb3JBLTIwMTkuanBnXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTEsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJOZXchXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBdmVudWUgVW5pdGVkIEVuYW1lbCBCYWRnZVwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiVGhlIGNsdWIgYXJlIHNlbGxpbmcgZW5hbWVsIGJhZGdlcyBmb3Ig4oKsNS4gSWYgYW55b25lIGlzIGludGVyZXN0ZWQgZHJvcCB1cyBhIG1lc3NhZ2UsIGVtYWlsIG9yIGNhbGwgdXMuXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvYmFkZ2UucG5nXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTIsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaWVybmV5J3MgQ29zdGN1dHRlciBzcG9uc29yIFUxNHNcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnkgdGhhbmtzIHRvIEpvaG4gYW5kIGhpcyBzdGFmZlwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiVGhlIGNsdWIgd291bGQgbGlrZSB0byB0aGFuayBKb2huIGFuZCBoaXMgc3RhZmYgYXQgVGllcm5leSdzIENvc3RjdXR0ZXIgb24gdGhlIHRoZSBUdWxsYSBSb2FkIGZvciB0aGVpciBraW5kIHNwb25zb3JzaGlwIG9mIGEgc2V0IG9mIGplcnNleXMgZm9yIG91ciBVMTQgdGVhbS4gV2Ugd291bGQgYXNrIG91ciBtZW1iZXJzIHRvIHJldHVybiB0aGUgZmF2b3VyIGJ5IHN1cHBvcnRpbmcgb3VyIHNwb25zb3JzIHdoZW5ldmVyIHBvc3NpYmxlLlwiLFxuICAgICAgICAgICAgICBcImltYWdlXCI6IFwiYXNzZXRzL2ltZy9uZXdzL2Nvc3RjdXR0ZXIuanBnXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTMsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJSb2NoZm9yZHMgUGhhcm1hY3kgc3BvbnNvciAyMDA4IHRlYW1zXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCaWcgdGhhbmtzIHRvIEJyZW5kYW4gYW5kIEF1ZHJleSFcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIkEgc2luY2VyZSB0aGFuayB5b3UgdG8gQXVkcmV5IGFuZCBCcmVuZGFuIFJvY2hmb3JkIG9mIFJvY2hmb3JkcyBQaGFybWFjeSBmb3Iga2luZGx5IHNwb25zb3Jpbmcgc2V0cyBvZiBqZXJzZXlzIGZvciBvdXIgMjAwOHMgdGVhbXMuXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvMjAxOC0yLmpwZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDE0LFxuICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiR1wiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTWNEb25hbGRzIG9mIEVubmlzIHNwb25vciBVMTNzXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb29raW5nIGdvb2QhXCIsXG4gICAgICAgICAgICAgIFwic3RvcnlcIjogXCJUaGUgY2x1YiB3b3VsZCBsaWtlIHRvIHRoYW5rIEtpZXJhbiwgTmlhbWggYW5kIHRoZSBzdGFmZiBhdCBNY0RvbmFsZCdzIEVubmlzIGFuZCBTaGFubm9uIGZvciBraW5kbHkgc3BvbnNvcmluZyBhIHNldCBvZiBqZXJzZXlzIGZvciBvdXIgVTEzIHRlYW0uXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvbWNkLmpwZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG59IiwiPExpc3RWaWV3IFtpdGVtc10gPSBcIm5ld3MkLk5ld3NTdG9yaWVzXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCIgbWFyZ2luUmlnaHQ9XCItMlwiIChpdGVtVGFwKT1cIm9uSXRlbVRhcCgkZXZlbnQpXCI+XG4gICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwie3tzZXJ2ZXJVcmx9fXt7IGl0ZW0uaW1hZ2UgfX1cIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiNiYzNiNGU3N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwie3sgaXRlbS50aXRsZSB9fVwiIGNsYXNzPVwibmV3cy1zb3VyY2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVwiMTVcIiBwYWRkaW5nQm90dG9tPVwiMjBcIiBwYWRkaW5nTGVmdD1cIjE1XCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxNVwiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJ7eyBpdGVtLmRlc2NyaXB0aW9uIH19XCIgY2xhc3M9XCJuZXdzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvTGlzdFZpZXc+IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gXCJAYXV0aDAvYW5ndWxhci1qd3RcIjtcblxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xuIFxuY29uc3Qgand0SGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgbG9nZGVwdGggPSAzO1xuICAgIHNlcnZpY2VOYW1lID0gJ0F1dGhTZXJ2aWNlJztcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcblxuICAgICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgbGckOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIGNvbSQ6IENvbW1vblNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCApXG4gICAgIHtcbiAgICAgICAgIC8vIHNldCB0b2tlbiBpZiBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7ICBcbiAgICAgICAgfSBjYXRjaCggZXggKSB7fVxuICAgICAgICBcbiAgICAgICAgdGhpcy50b2tlbiA9IGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnRva2VuO1xuICAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWU6XHRcdGF1dGhlbnRpY2F0ZSgpXG4gICAgICogRGVzY3JpcHRpb246XHRBdXRoZW50aWNhdGVzIHRoZSB1c2VyIHdpdGggdGhlIHNlcnZlclxuICAgICAqIFNjb3BlOlx0XHRJbnRlcm5hbFxuICAgICAqIFBhcmFtcyBpbjpcbiAgICAgKiBSZXR1cm46XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGhvbWUgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgIFx0bGV0IHVybCA9IGhvbWUgKyBcImJhY2tlbmQvbG9naW5cIjtcbiAgICAgICAgbGV0IHBhcmFtcyA9ICd1c2VybmFtZT0nK3VzZXJuYW1lKycmcGFzc3dvcmQ9JytwYXNzd29yZDtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoXG4gICAgICAgIHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnIDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsaW5nIGh0dHAgUE9TVCB0byBcIiArIHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBhcmFtcywge2hlYWRlcnM6IGhlYWRlcnMsIHdpdGhDcmVkZW50aWFscyA6IHRydWV9KTtcbiAgICAgIH1cblxuICAgICBsb2dvdXQoKVxuICAgICB7XG4gICAgICAgIGxldCBob21lID0gdGhpcy5jb20kLmdldEhvbWUoKTtcbiAgICBcdGxldCB1cmwgPSBob21lICsgXCJiYWNrZW5kL2xvZ291dFwiO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5odHRwLmdldCggdXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9ICk7XG4gICAgIH1cblxuICAgICBpc0xvZ2dlZEluKCk6IGJvb2xlYW5cbiAgICAge1xuICAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG5cbiAgICAgICAgIGlmKCAhdG9rZW4gKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBleHBpcmF0aW9uRGF0ZSA9IGp3dEhlbHBlci5nZXRUb2tlbkV4cGlyYXRpb25EYXRlKCB0b2tlbiApO1xuICAgICAgICBsZXQgaXNFeHBpcmVkID0gand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKCB0b2tlbiApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJUb2tlbiBleHBpcmF0aW9uIGRhdGU6IFwiICsgZXhwaXJhdGlvbkRhdGUgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwiVG9rZW4gaXMgZXhwaXJlZDogXCIgKyBpc0V4cGlyZWQgKTtcblxuICAgICAgICByZXR1cm4gIWlzRXhwaXJlZDtcbiAgICAgfVxuXG4gICAgIGlzQWxsb3dlZChyZXF1aXJlZFJvbGU6c3RyaW5nLCByZXF1aXJlZFBlcm1pc3Npb24/OiBzdHJpbmcpOiBib29sZWFuXG4gICAgIHtcbiAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICAgIGxldCBhbGxvd2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoU2VydmljZS0tPmlzQWxsb3dlZChcIiArIHJlcXVpcmVkUm9sZSArIFwiKVwiKTtcblxuICAgICAgICBpZiggIXRva2VuIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgZGVjb2RlZFRva2VuOiBhbnkgPSBqd3RIZWxwZXIuZGVjb2RlVG9rZW4oIHRva2VuICk7XG4gICAgICAgIGxldCBkZWZpbmVkUm9sZXM6IFtzdHJpbmddID0gZGVjb2RlZFRva2VuLnJvbGVzLnNwbGl0KFwiLFwiKTsgLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXlcbiAgICAgICAgZm9yKCBsZXQgaT0wOyBpPGRlZmluZWRSb2xlcy5sZW5ndGg7IGkrKyApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCBkZWZpbmVkUm9sZXNbaV0gPT09IHJlcXVpcmVkUm9sZSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRlY29kZWQgdG9rZW4gaXM6IFtcIiArIGRlY29kZWRUb2tlbi5yb2xlcyArIFwiXVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgICAgICAgICAgIDwtLWlzQWxsb3dlZChcIiArIGFsbG93ZWQgKyBcIilcIik7XG5cbiAgICAgICAgcmV0dXJuIGFsbG93ZWQ7XG5cbiAgICAgfVxuXG4gICAgIGdldEN1cnJlbnRVc2VyKCk6IGFueVxuICAgICB7XG4gICAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuXG4gICAgICAgIGlmKCAhdG9rZW4gKVxuICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbik7XG4gICAgIH1cblxuICAgICAvKipcbiAgICAgICogUm9sZXMgaGVpcmFyY2h5XG4gICAgICAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAqIFJPTEUgICAgICAgICAgICoqIFdoYXQncyBhbGxvd2VkICAgICAgICAgICAgICoqXG4gICAgICAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAqIFJPTEVfTUFOQUdFUiAgICoqIFIvVyB0aGVpciBvd24gdGVhbShzKVxuICAgICAgKiBST0xFX1NFQ1JFVEFSWSAqKiBDUlVEIG9uIG1lbWJlcnNcbiAgICAgICogUk9MRV9BRE1JTiAgICAgKiogQ1JVRCBvbiBtZW1iZXJzLCB0ZWFtcywgdXNlcnNcbiAgICAgICogICAgICAgICAgICAgICAgKiogQ2Fubm90IGRlbGV0ZSB0aGVtc2VsdmVzXG4gICAgICAqICAgICAgICAgICAgICAgICoqIENhbm5vdCBlZGl0L2RlbGV0ZSB0aGUgU1VcbiAgICAgICogUk9MRV9TVSAgICAgICAgKiogU1VQRVIgVVNFUiAtIGNhbiBkbyBhbnl0aGluZ1xuICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBQRVJNSVNTSU9OU1xuICAgICAgICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBST0xFX01BTkFHRVJcbiAgICAgICAqIElmIHRoZSByZXF1aXJlZCByb2xlIGlzIG1hbmFnZXIgdGhlbiB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYSBtYW5hZ2VyIG9mIGEgdGVhbSBhbmQgb25seSBhbGxvdyB0aGVtIHRvIG1hbmFnZSB0aG9zZVxuICAgICAgICogdGVhbXMgdGhhdCB0aGV5IGFyZSBhIG1hbmFnZXIgb2ZmLlxuICAgICAgICogVGh1cywgZmlyc3RseSBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIFJPTEVfTUFOQUdFUiwgc2Vjb25kbHkgY2hlY2sgd2hhdCB0ZWFtcyB0aGV5IGFyZSBtYW5hZ2VyIG9mZiwgdGhlbiBvbmx5IHNob3cgdGhvc2UgdGVhbXMuXG4gICAgICAgKi9cblxuICAgICAgIC8qKlxuICAgICAgICAqIFJPTEVfU0VDUkVUQVJZXG4gICAgICAgICogQWxsb3cgYW55IG1lbWJlciBvcGVyYXRpb25zLiBBbGxvdyB2aWV3IG9ubHkgb24gdGVhbXMuXG4gICAgICAgICovXG5cbn0iLCJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgZnJvbSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0BzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IFNlcnZlck1vZGUgfSBmcm9tICdAc3JjL2FwcC9tb2RlbC9zZXJ2ZXItbW9kZSc7XG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcblxuICAgIG1vZGVzID0geyBMT0NBTDowLCBSRU1PVEU6MX07XG4gICAgQ3VycmVudFNlcnZlck1vZGU6IG51bWJlcjtcblxuICAgIGxvZ2RlcHRoICAgID0gMztcbiAgICBsb2doZHIgICAgICA9IFwiXCI7XG4gICAgc2VydmljZU5hbWUgPSAnQ29tbW9uU2VydmljZSc7XG4gICAgbGckOiBMb2dnZXJTZXJ2aWNlO1xuXG4gICAgIGNvbnN0cnVjdG9yKCkgXG4gICAgIHtcbiAgICAgICAgdmFyIHN2ciAgICAgICAgICAgICAgICA9IG5ldyBTZXJ2ZXJNb2RlKCk7XG4gICAgICAgIHRoaXMuQ3VycmVudFNlcnZlck1vZGUgPSB0aGlzLm1vZGVzLlJFTU9URTtcbiAgICAgICAgdGhpcy5sZyQgICAgICAgICAgICAgICA9IG5ldyBMb2dnZXJTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMubGckLnNldExvZ0hkcih0aGlzLmxvZ2RlcHRoLCB0aGlzLnNlcnZpY2VOYW1lKTtcbiAgICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogZ2V0SG9tZSgpXG4gICAgICogRGVzY3JpcHRpb246IFJldHVybnMgdGhlIF9ob21lIFVSTCBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkXG4gICAgICogXHRcdFx0XHRhcyBhIGxvY2FsIG9yIHJlbW90ZSBhcHAuXG4gICAgICogU2NvcGUgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW46IG5vbmVcbiAgICAgKiBSZXR1cm4gICA6IF9ob21lIFVSTFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldEhvbWUoKSA6IHN0cmluZyB7XG4gICAgICAgIHZhciBfaG9tZTogc3RyaW5nO1xuICAgICAgICB0aGlzLmxnJC5sb2coXCItPiBnZXRIb21lKClcIik7XG5cbiAgICAgICAgaWYgKCBlbnZpcm9ubWVudC5wcm9kdWN0aW9uID09PSBmYWxzZSApXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmxnJC5sb2coXCIgICB8LSBlbnZpcm9ubWVudC5wcm9kdWN0aW9uIGlzIGZhbHNlLCByZXR1cm5pbmcgbG9jYWxob3N0XCIpXG4gICAgICAgICAgIC8vX2hvbWUgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLyc7XG4gICAgICAgICAgLy8gIF9ob21lID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC8nO1xuICAgICAgICAgICBfaG9tZSA9ICdodHRwOi8vYXZlbnVldW5pdGVkLmllLm1vY2hhNjAwNC5tb2NoYWhvc3QuY29tLyc7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuQ3VycmVudFNlcnZlck1vZGUgPT09IHRoaXMubW9kZXMuUkVNT1RFIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gX2hvbWUgPSAnaHR0cDovL3d3dy5hdmVudWV1bml0ZWQuaWUvJztcbiAgICAgICAgICAgIF9ob21lID0gJ2h0dHA6Ly9hdmVudWV1bml0ZWQuaWUubW9jaGE2MDA0Lm1vY2hhaG9zdC5jb20vJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGckLmxvZyhcIjwtIGdldEhvbWUoXCIgKyBfaG9tZSArIFwiKVwiKTtcbiAgICAgICAgcmV0dXJuIF9ob21lO1xuICB9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogTmFtZSAgICAgICA6IGdldEdhbGxlcnlIb21lKClcbiAgICogRGVzY3JpcHRpb246IFJldHVybnMgdGhlIF9ob21lIFVSTCBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkXG4gICAqIFx0XHRcdFx0YXMgYSBsb2NhbCBvciByZW1vdGUgYXBwLlxuICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgKiBQYXJhbXMgaW46IG5vbmVcbiAgICogUmV0dXJuICAgOiBfaG9tZSBVUkxcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0R2FsbGVyeUhvbWUoKSA6IHN0cmluZyB7XG4gICAgICAgIHZhciBfaG9tZTogc3RyaW5nO1xuXG4gICAgICAgIC8vIGlmICggZW52aXJvbm1lbnQucHJvZHVjdGlvbiA9PT0gZmFsc2UgKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vIFx0IF9ob21lID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xuICAgICAgICAvLyB9IGVsc2VcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgX2hvbWUgPSAnaHR0cDovL3d3dy5hdmVudWV1bml0ZWQuaWUvJztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIF9ob21lID0gJ2h0dHA6Ly93d3cuYXZlbnVldW5pdGVkLmllLyc7XG5cbiAgICAgICAgcmV0dXJuIF9ob21lO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGlzVmFsaWROYW1lKClcbiAgICAgKiBEZXNjcmlwdGlvbjogQ2hlY2tzIHRoYXQgdGhlcmUgYXJlIG9uZSBvciBtb3JlIHdvcmRzIGluXG4gICAgICogXHRcdFx0XHR0aGUgbmFtZVxuICAgICAqIFBhcmFtcyBpbjogVGhlIG5hbWUgZW50ZXJlZFxuICAgICAqIFJldHVybiAgIDogdHJ1ZSBvciBmYWxzZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlzVmFsaWROYW1lKCBuYW1lOiBzdHJpbmcgKTogYm9vbGVhblxuICBcdHtcbiAgXHRcdC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tOYW1lKFwiICsgbmFtZSArIFwiKVwiKTtcblxuICBcdFx0aWYgKCAoIG5hbWUgIT09IHVuZGVmaW5lZCApICYmICggbmFtZSAhPT0gJycgKSApXG4gIFx0XHR7XG4gIFx0XHRcdHJldHVybiAvXlxcdysvLnRlc3QobmFtZSk7XG4gIFx0XHR9IGVsc2VcbiAgXHRcdHtcbiAgXHRcdFx0Ly90aGlzLmxnJC5sb2coXCItLS0tPiBjaGVja05hbWUoXCIgKyBuYW1lICsgXCIpIHVuZGVmaW5lZCBvciBibGFuayFcIik7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBpc1ZhbGlkRW1haWwoKVxuICAgICAqIERlc2NyaXB0aW9uOiBDaGVja3MgdGhhdCB0aGUgZW50ZXJlZCB0ZXh0IG1hdGNoZXMgdGhlXG4gICAgICogXHRcdFx0XHRiYXNpYyBydWxlcyB0byBiZSBhbiBlbWFpbCBhZGRyZXNzLlxuICAgICAqIFBhcmFtcyBpbjogVGhlIGVtYWlsIGVudGVyZWRcbiAgICAgKiBSZXR1cm4gICA6IHRydWUgb3IgZmFsc2VcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXHRpc1ZhbGlkRW1haWwoIGVtYWlsOiBzdHJpbmcgKTogYm9vbGVhblxuICBcdHtcbiAgXHRcdC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tFbWFpbChcIiArIGVtYWlsICsgXCIpXCIpO1xuICBcdFx0Y29uc29sZS5sb2coXCItLS0tPiBjaGVja0VtYWlsKFwiICsgZW1haWwgKyBcIilcIik7XG5cbiAgXHRcdGlmICggKCBlbWFpbCAhPT0gdW5kZWZpbmVkICkgJiYgKCBlbWFpbCAhPT0gJycgKSApXG4gIFx0XHR7XG4gIFx0XHRcdHJldHVybiAvXlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kL2kudGVzdChlbWFpbCk7XG4gIFx0XHR9IGVsc2VcbiAgXHRcdHtcbiAgXHRcdFx0Y29uc29sZS5sb2coXCItLS0tPiBjaGVja0VtYWlsKFwiICsgZW1haWwgKyBcIikgdW5kZWZpbmVkIG9yIGJsYW5rIVwiKTtcbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuICBcdH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGlzVmFsaWRQaG9uZSgpXG4gICAgICogRGVzY3JpcHRpb246IENoZWNrcyB0aGF0IHRoZSBlbnRlcmVkIHRleHQgbWF0Y2hlcyB0aGVcbiAgICAgKiBcdFx0XHRcdGJhc2ljIHJ1bGVzIHRvIGJlIGFuIElyaXNoIHBob25lIG51bWJlci5cbiAgICAgKiBQYXJhbXMgaW46IFRoZSBlbWFpbCBlbnRlcmVkXG4gICAgICogUmV0dXJuICAgOiB0cnVlIG9yIGZhbHNlXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgaXNWYWxpZFBob25lKCBwaG9uZTogc3RyaW5nICk6IGJvb2xlYW5cbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0+IGNoZWNrUGgoXCIgKyBwaG9uZSArIFwiKVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT0gXCIgKyAvXlxcZHsxMH0kLy50ZXN0KHBob25lKSApO1xuICAgICAgY29uc29sZS5sb2coXCI9PSBcIiArIC9eXFwrXFxkezEyfSQvLnRlc3QocGhvbmUpICk7XG5cbiAgICAgIGlmICggKCBwaG9uZSAhPT0gdW5kZWZpbmVkICkgJiYgKCBwaG9uZSAhPT0gJycgKSApXG4gICAgICB7XG4gICAgICAgIGlmICggKC9eXFxkezEwfSQvLnRlc3QocGhvbmUpKSB8fCAoL15cXCtcXGR7MTJ9JC8udGVzdChwaG9uZSkpIClcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2VcbiAgICAgIHtcbiAgICAgICAgLy90aGlzLmxnJC5sb2coXCItLS0tPiBjaGVja1BoKFwiICsgcGhvbmUgKyBcIikgdW5kZWZpbmVkIG9yIGJsYW5rIVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBOYW1lICAgICAgIDogaXNWYWxpZERvYigpXG4gICAqIERlc2NyaXB0aW9uOiBDaGVja3MgdGhhdCB0aGUgZG9iIGlzIG5vdCBlbXB0eVxuICAgKiBQYXJhbXMgaW4gIDogVGhlIG5hbWUgZW50ZXJlZFxuICAgKiBSZXR1cm4gICAgIDogdHJ1ZSBvciBmYWxzZVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBpc1ZhbGlkRG9iKCBuYW1lOiBzdHJpbmcgKTogYm9vbGVhblxuICBcdHtcbiAgXHRcdC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tOYW1lKFwiICsgbmFtZSArIFwiKVwiKTtcblxuICBcdFx0aWYgKCAoIG5hbWUgIT09IHVuZGVmaW5lZCApICYmICggbmFtZSAhPT0gJycgKSApXG4gIFx0XHR7XG4gIFx0XHRcdHJldHVybiAvXlxcdysvLnRlc3QobmFtZSk7XG4gIFx0XHR9IGVsc2VcbiAgXHRcdHtcbiAgXHRcdFx0Ly90aGlzLmxnJC5sb2coXCItLS0tPiBjaGVja05hbWUoXCIgKyBuYW1lICsgXCIpIHVuZGVmaW5lZCBvciBibGFuayFcIik7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBpc0VtcHR5KClcbiAgICAgKiBEZXNjcmlwdGlvbjogQ2hlY2tzIGlmIGEgZmllbGQgaXMgZW1wdHkgZW1wdHlcbiAgICAgKiBQYXJhbXMgaW4gIDogVGhlIGZpZWxkIGVudGVyZWRcbiAgICAgKiBSZXR1cm4gICAgIDogdHJ1ZSBvciBmYWxzZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlzRW1wdHkoIGZpZWxkOiBzdHJpbmcgKTogYm9vbGVhblxuICBcdHtcbiAgXHRcdGlmICggKCBmaWVsZCA9PT0gdW5kZWZpbmVkICkgfHwgKCBmaWVsZCA9PT0gJycgKSApXG4gIFx0XHR7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH0gZWxzZVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cbiAgXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogY2xlYXJBcnJheSgpXG4gICAgICogRGVzY3JpcHRpb246IENsZWFycyB0aGUgY29udGVudHMgb2YgdGhlIGFycmF5IHBhc3NlZCBpbi5cbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IFRoZSBhcnJheSB0byBjbGVhclxuICAgICAqIFJldHVybiAgICAgOiBub25lXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFx0cHVibGljIGNsZWFyQXJyYXkoIGFycmF5LCBsZyQ6IExvZ2dlclNlcnZpY2UgKVxuICBcdHtcbiAgXHRcdGxnJC50cmFjZShcIi0+IGNsZWFyQXJyYXkoKVwiKTtcblxuICBcdFx0d2hpbGUoIGFycmF5Lmxlbmd0aCApXG4gIFx0XHR7XG4gIFx0XHRcdGxnJC50cmFjZShcIi4uLi5zZW5kaW5nIGFycmF5IHZhbHVlIHRvIHRyYXNoXCIpO1xuICBcdFx0XHRhcnJheS5wb3AoKTtcbiAgXHRcdH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBzZXR1cEhlYWRlcnMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBTZXQgdGhlIEpXVCBpbiB0aGUgaGVhZGVyIHNvIHdlIGNhbiBhY2Nlc3NcbiAgICAgKiAgICAgICAgICAgICAgc2VjdXJlIGNvbnRlbnQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOiBUaGUgaGVhZGVycyBzdHJ1Y3RcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgc2V0dXBIZWFkZXJzKCk6IEh0dHBIZWFkZXJzXG4gICAge1xuICAgICAgLy90aGlzLmxnJC5sb2coXCJzZXR1cEhlYWRlcnMoKVwiKVxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSlcbiAgICAgICAgLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAgICAgICAuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQnKTtcbiAgICAgIC8vIHRoaXMubGckLmxvZyhcIlRva2VuIHJlYWQgZnJvbSBzdG9yYWdlOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpICk7XG4gICAgICAvLyB0aGlzLmxnJC5sb2coXCJBdXRoIEhkcjogXCIgKyBoZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpKTtcbiAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGNhbGN1bGF0ZUN1cnJlbnRTZWFzb24oKVxuICAgICAqIERlc2NyaXB0aW9uOiBEZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgbW9udGgsIHRoaXMgcmV0dXJuc1xuICAgICAqICAgICAgICAgICAgICB0aGUgY3VycmVudCBzZWFzb24uIFVzZWQgYnkgVUkgcGFnZXMuXG4gICAgICogU2NvcGUgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW46IE5vbmVcbiAgICAgKiBSZXR1cm4gICA6IFRoZSBjdXJyZW50IHNlYXNvbiwgZS5nLiBcIjIwMTgvMjAxOVwiXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGNhbGN1bGF0ZUN1cnJlbnRTZWFzb24oKTogU3RyaW5nXG4gICAge1xuICAgICAgdmFyIHNlYXNvbiA9IFwiXCI7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlICAgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IHllYXIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBtb250aCAgPSBkYXRlLmdldE1vbnRoKCk7ICAgICAvLyBSZW1lbWJlciB0aGlzIGlzIDAgZm9yIEphbiBldGMuXG5cbiAgICAgIGlmKCBtb250aCA+IDYgJiYgbW9udGggPD0gMTEgKSAvLyBGaXJzdCBwZXJpb2RcbiAgICAgICAgc2Vhc29uID0geWVhciArIFwiL1wiICsgKHllYXIrMSk7XG4gICAgICBlbHNlXG4gICAgICAgIHNlYXNvbiA9ICh5ZWFyLTEpICsgXCIvXCIgKyB5ZWFyOyAgLy8gU2Vjb25kIHRlcm1cblxuICAgICAgcmV0dXJuIHNlYXNvbjtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBnZXRMb2dEZXB0aCgpXG4gICAgICogRGVzY3JpcHRpb246IENvbnZlcnQgYSBudW1iZXIgdG8gdGhhdCBudW1iZXIgb2Ygc3BhY2VzLlxuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBUaGUgbG9nIGRlcHRoIGFzIHNwYWNlcy5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgZ2V0TG9nRGVwdGgoIGRlcHRoOiBudW1iZXIgKTogc3RyaW5nXG4gICAge1xuICAgICAgbGV0IHByZWZpeDogc3RyaW5nID0gJyc7XG5cbiAgICAgIGZvciggbGV0IGk6bnVtYmVyPTA7IGk8ZGVwdGg7IGkrKyApXG4gICAgICB7XG4gICAgICAgIHByZWZpeC5jb25jYXQoJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25EYXRhU2VydmljZSB9IGZyb20gJy4vc2Vzc2lvbi1kYXRhLnNlcnZpY2UnO1xuXG5lbnVtIFJldHVyblN0YXR1cyB7IFBSRVNFTlQsIE5PVF9QUkVTRU5ULCBPSywgTk9UX09LIH07XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XG4gIGxvZ2RlcHRoICAgICAgICAgPSAzO1xuICBsb2doZHIgICAgICAgICAgID0gXCJcIjtcbiAgc2VydmljZU5hbWUgICAgICA9ICdDb29raWVTZXJ2aWNlJztcbiAgVmlzaXRvckNvb2tpZSAgICA9IFwiY2x1YkFwcFZpc2l0b3I9MVwiO1xuICBQZXJtaXNzaW9uQ29va2llID0gXCJjb29raWVzQWxsb3dlZFwiO1xuICBDb29raWVFeHBpcnkgICAgID0gODY0MDAvNDsgICAgICAgICAgICAgLy8gODY0MDAgaXMgb25lIGRheSBzbyB0aGlzIGlzIDZocnNcblxuICBjb25zdHJ1Y3RvciggIHByaXZhdGUgbGckIDogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgIGQkICA6IFNlc3Npb25EYXRhU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbSQ6IENvbW1vblNlcnZpY2UgKVxuICB7XG4gICAgdGhpcy5sZyQuc2V0TG9nSGRyKHRoaXMubG9nZGVwdGgsIHRoaXMuc2VydmljZU5hbWUpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogTmFtZSAgICAgICA6IHNhdmVWaXNpdG9yQ29va2llKClcbiAgICogRGVzY3JpcHRpb246IFdyaXRlcyBhIGNvb2tpZSB0byBzYXkgdGhpcyB1c2VyIGhhcyB2aXNpdGVkXG4gICAqICAgICAgICAgICAgICB0aGUgc2l0ZSwgaXQgZXhwaXJlcyBhZnRlciBhIHBlcmlvZC4gVGhpc1xuICAgKiAgICAgICAgICAgICAgd2F5IHdlIG9ubHkgaW5jcmVhc2UgdGhlIHZpc2l0b3IgY291bnQgYWZ0ZXJcbiAgICogICAgICAgICAgICAgIGEgcGVyaW9kIG9mIHRpbWUgZm9yIHRoZSBzYW1lIHVzZXIuXG4gICAqIFNjb3BlICAgIDogRXh0ZXJuYWxcbiAgICogUGFyYW1zIGluOiBOb25lXG4gICAqIFJldHVybiAgIDogTm9uZVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgcHVibGljIHNhdmVWaXNpdG9yQ29va2llKClcbiAge1xuICAgIGxldCBleHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIHRoaXMuQ29va2llRXhwaXJ5KTsgIC8vIDEgZGF5XG5cbiAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLlZpc2l0b3JDb29raWUgKyBcIjtleHBpcmVzPVwiICsgZXhwaXJlcyArIFwiO3BhdGg9LztcIjtcbiAgICB0aGlzLmxnJC50cmFjZShcIi0+IHNhdmVWaXNpdG9yQ29va2llKCkgOiBDb29raWVzOiBcIiArIGRvY3VtZW50LmNvb2tpZSApO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogTmFtZSAgICAgICA6IHNhdmVQZXJtaXNzaW9uQ29va2llKClcbiAgICogRGVzY3JpcHRpb246IFdyaXRlcyBhIGNvb2tpZSB0byBzdG9yZSB0aGUgdXNlcidzIGNob2ljZVxuICAgKiAgICAgICAgICAgICAgb24gd2hldGhlciBpdCdzIG9rIHRvIHNhdmUgY29va2llcyBvciBub3QuXG4gICAqIFNjb3BlICAgIDogRXh0ZXJuYWxcbiAgICogUGFyYW1zIGluOiBOb25lXG4gICAqIFJldHVybiAgIDogTm9uZVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgcHVibGljIHNhdmVQZXJtaXNzaW9uQ29va2llKClcbiAge1xuICAgIGxldCBleHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArICg4NjQwMCoxMDApKTsgIC8vIDEwMCBkYXlzXG5cbiAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLlBlcm1pc3Npb25Db29raWUgKyBcIj1cIiArIHRoaXMuZCQuZHNDb29raWVzVXNlckNob2ljZSArIFwiO2V4cGlyZXM9XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vO1wiO1xuICAgIHRoaXMubGckLnRyYWNlKFwiLT4gc2F2ZVBlcm1pc3Npb25Db29raWUoKSA6IENvb2tpZXM6IFwiICsgZG9jdW1lbnQuY29va2llICk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBOYW1lICAgICAgIDogaXNWaXNpdG9yQ29va2llUHJlc2VudCgpXG4gICAqIERlc2NyaXB0aW9uOiBSZWFkcyB0aGUgY29va2llcyBhbmQgcGFyc2VzIHRoZSBzdHJpbmcgdG9cbiAgICogICAgICAgICAgICAgIHNlZSBpZiB3ZSBoYXZlIGEgdmlzaXRvciBjb29raWUuIElmIHdlIGhhdmVcbiAgICogICAgICAgICAgICAgIHRoZW4gcmV0dXJuIHRydWUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICogU2NvcGUgICAgOiBFeHRlcm5hbFxuICAgKiBQYXJhbXMgaW46IE5vbmVcbiAgICogUmV0dXJuICAgOiB0cnVlIGlmIGNvb2tpZSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgcHVibGljIGlzVmlzaXRvckNvb2tpZVByZXNlbnQoKTogYm9vbGVhblxuICB7XG4gICAgbGV0IGZ1bGxjb29raWU6IHN0cmluZyAgICAgID0gZG9jdW1lbnQuY29va2llO1xuICAgIGxldCB2aXNpdG9yUHJlc2VudDogYm9vbGVhbiA9IGZ1bGxjb29raWUuaW5jbHVkZXModGhpcy5WaXNpdG9yQ29va2llKTtcblxuICAgIHRoaXMubGckLnRyYWNlKFwiLT4gaXNWaXNpdG9yQ29va2llUHJlc2VudCgpIDogUmV0cmlldmVkIHZpc2l0b3IgY29va2llOiBcIiArIHZpc2l0b3JQcmVzZW50KTtcbiAgICByZXR1cm4gdmlzaXRvclByZXNlbnQ7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBOYW1lICAgICAgIDogaXNDb29raWVQZXJtaXNzaW9uR3JhbnRlZCgpXG4gICAqIERlc2NyaXB0aW9uOiBSZWFkcyB0aGUgY29va2llcyBhbmQgcGFyc2VzIHRoZSBzdHJpbmcgdG9cbiAgICogICAgICAgICAgICAgIHNlZSBpZiB3ZSBoYXZlIGEgY29va2llIGluZGljYXRpbmcgdGhhdCB0aGVcbiAgICogICAgICAgICAgICAgIHVzZXIgaGFzIHNhaWQgaXQncyBvayB0byBzdG9yZSBjb29raWVzLlxuICAgKiBTY29wZSAgICA6IEV4dGVybmFsXG4gICAqIFBhcmFtcyBpbjogTm9uZVxuICAgKiBSZXR1cm4gICA6IHRydWUgaWYgY29va2llIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBwdWJsaWMgaXNDb29raWVQZXJtaXNzaW9uR3JhbnRlZCgpOiBSZXR1cm5TdGF0dXNcbiAge1xuICAgIGxldCBzdGF0dXMgICAgICAgICAgIDogUmV0dXJuU3RhdHVzO1xuICAgIGxldCBmdWxsY29va2llICAgICAgIDogc3RyaW5nICAgICAgICAgPSBkb2N1bWVudC5jb29raWU7XG4gICAgbGV0IHBlcm1pc3Npb25QcmVzZW50OiBib29sZWFuID0gZnVsbGNvb2tpZS5pbmNsdWRlcyh0aGlzLlBlcm1pc3Npb25Db29raWUpO1xuXG4gICAgdGhpcy5sZyQudHJhY2UoXCJDb29raWUgU3RyaW5nOiBbXCIgKyBmdWxsY29va2llICsgXCJdXCIpO1xuXG4gICAgaWYoIHBlcm1pc3Npb25QcmVzZW50IClcbiAgICB7XG4gICAgICAvLyAoMSkgU3BsaXQgdGhlIHN0cmluZyBpbnRvIGluZGl2aWR1YWwgY29va2llc1xuICAgICAgbGV0IGNvb2tpZXM6IHN0cmluZ1tdID0gZnVsbGNvb2tpZS5zcGxpdCgnOycsIDEwMCk7XG4gICAgICAvLyAoMikgRmluZCB0aGUgcGVybWlzc2lvbiBjb29raWVcbiAgICAgIGZvciggbGV0IGk9MDsgaTxjb29raWVzLmxlbmd0aDsgaSsrIClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5sZyQudHJhY2UoXCJDaGVja2luZyBjb29raWU6IFtcIiArIGNvb2tpZXNbaV0gKyBcIl1cIilcbiAgICAgICAgaWYoIGNvb2tpZXNbaV0uaW5jbHVkZXModGhpcy5QZXJtaXNzaW9uQ29va2llKSApXG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmxnJC50cmFjZShcIkZvdW5kIHBlcm1pc3Npb24gY29va2llOiBcIiArIGNvb2tpZXNbaV0gKyBcIl1cIilcbiAgICAgICAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gY29va2llc1tpXS5zcGxpdCgnPScsIDIpO1xuICAgICAgICAgIGlmKCBwYXJ0c1sxXSA9PT0gXCJ0cnVlXCIgKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubGckLnRyYWNlKFwiUmV0dXJuaW5nIHRydWVcIik7XG4gICAgICAgICAgICBzdGF0dXMgPSBSZXR1cm5TdGF0dXMuT0s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmxnJC50cmFjZShcIlJldHVybmluZyBmYWxzZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cyA9IFJldHVyblN0YXR1cy5OT1RfT0s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHN0YXR1cyA9IFJldHVyblN0YXR1cy5OT1RfUFJFU0VOVDtcblxuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlLCBMb2dUeXBlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcbiAgXG4gICAgICBsb2dkZXB0aCA9IDM7XG4gICAgICBzZXJ2aWNlTmFtZSA9ICdFcnJvclNlcnZpY2UnO1xuICAgICAgbXNnRHVyYXRpb24gPSA1MDAwOyAvLyA1IHNlY29uZHNcbiAgICAgIGxnJDogTG9nZ2VyU2VydmljZTtcbiAgXG4gICAgICAgY29uc3RydWN0b3IgKCAgKSB7XG4gICAgICAgIHRoaXMubGckID0gbmV3IExvZ2dlclNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5sZyQuc2V0TG9nSGRyKHRoaXMubG9nZGVwdGgsIHRoaXMuc2VydmljZU5hbWUpO1xuICAgICAgIH1cbiAgXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogTmFtZTpcdFx0b3BlbkFsZXJ0KClcbiAgICAgICAqIERlc2NyaXB0aW9uOlxuICAgICAgICogUGFyYW1zIGluOlxuICAgICAgICogUmV0dXJuOlxuICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICBwdWJsaWMgb3BlbkFsZXJ0KCBtc2c6IHN0cmluZyApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sZyQubG9nKFwiIyMjIyMjIyMjIyBJTlNJREUgT1BFTiBBTEVSVCEhXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG5cbiAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgKiBOYW1lICAgICAgIDogaGFuZGxlSHR0cEVycm9yKClcbiAgICAgICAgICogRGVzY3JpcHRpb246IENhbGxlZCB3aGVuIHRoZXJlJ3MgYW4gZXJyb3Igb24gYSBodHRwIGNhbGxcbiAgICAgICAgICogU2NvcGUgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgICAgICogUGFyYW1zIGluOiBEYXRlXG4gICAgICAgICAqIFJldHVybiAgIDogTm9uZS5cbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHB1YmxpYyBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgbXNnID0gJ1lvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIHRoaXMgYWN0aW9uISc7XG4gIFxuICAgICAgICAgIHN3aXRjaCggZXJyb3Iuc3RhdHVzIClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgdGhpcy5sZyQuZXJyb3IoXCJCQUQgUkVRVUVTVCFcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIllvdSBoYXZlIHNlbnQgYSBiYWQgcmVxdWVzdCB0byB0aGUgc2VydmVyIVwiLCAnRXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgdGhpcy5sZyQuZXJyb3IoXCJZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbnMgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbiFcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIHRoaXMgYWN0aW9uIVwiLCAnRXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5sZyQuZXJyb3IoXCJSZXF1ZXN0ZWQgZGF0YSBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJUaGUgZGF0YSB5b3UgcmVxdWVzdGVkIHdhcyBub3QgZm91bmQgYnkgdGhlIHNlcnZlciFcIiwgJ0Vycm9yJyApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgICAgICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXG4gICAgICAgICAgICAgIHRoaXMubGckLmVycm9yKFxuICAgICAgICAgICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuYm9keX1gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcbiAgICAgICAgICAgICdTb21ldGhpbmcgYmFkIGhhcHBlbmVkOyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICB9O1xuICBcbiAgXG4gIH0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBlbnVtIExvZ1R5cGVcbntcbiAgZnVuY3Rpb24sXG4gIG1lc3NhZ2Vcbn1cblxuLy9ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2doZHIgPSAnJzsgIC8vIFRoZSBoZWFkZXIgZm9yIHRoaXMgaW5zdGFuY2UsIHRvIGJlIHVzZWQgaW4gZWFjaCBsb2cgbWVzc2FnZVxuICByZWFkb25seSBmdW5jdGlvblByZWZpeCA9IFwifC0+XCI7XG4gIHJlYWRvbmx5IG1lc3NhZ2VQcmVmaXggID0gXCIgICB8LSBcIjtcbiAgcmVhZG9ubHkgbW9kdWxlU3BhY2UgPSAyNTtcblxuICAvL3RyYWNlKG1zZzogYW55LCB0eXBlPzpzdHJpbmcpIHsgLyppZihwcm9jZXNzLmVudi5ERUJVRykqLyBjb25zb2xlLmxvZyggdGhpcy5sb2doZHIgKyBtc2cpOyB9XG4gIGxvZyhtc2c6IGFueSwgcHJlZml4PzpzdHJpbmcpICAgeyBjb25zb2xlLmxvZyh0aGlzLmxvZ2hkciArIG1zZyk7IH1cbiAgZXJyb3IobXNnOiBhbnksIHByZWZpeD86c3RyaW5nKSB7IGNvbnNvbGUuZXJyb3IodGhpcy5sb2doZHIgKyBtc2cpOyB9XG4gIHdhcm4obXNnOiBhbnksIHByZWZpeD86c3RyaW5nKSAgeyBjb25zb2xlLndhcm4odGhpcy5sb2doZHIgKyBtc2cpOyB9XG5cbiAgdHJhY2UobXNnOiBhbnksIHR5cGU/OkxvZ1R5cGUpIFxuICB7XG4gICAgICBzd2l0Y2goIHR5cGUgKVxuICAgICAge1xuICAgICAgICBjYXNlIExvZ1R5cGUuZnVuY3Rpb246IC8vIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5sb2doZHIgKyB0aGlzLmZ1bmN0aW9uUHJlZml4ICsgbXNnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBMb2dUeXBlLm1lc3NhZ2U6IC8vIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5sb2doZHIgKyB0aGlzLm1lc3NhZ2VQcmVmaXggKyBtc2cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmxvZ2hkciArIG1zZyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBOYW1lICAgICAgIDogc2V0TG9nSGRyKClcbiAgICogRGVzY3JpcHRpb246IFNldHMgdXAgdGhlIGNvcnJlY3QgaW5kZW50YXRpb24gYW5kIGhlYWRlclxuICAgKiBcdFx0XHRcdGluZm9ybWF0aW9uIGZvciB0aGUgbG9nIG1lc3NhZ2VzLlxuICAgKiBTY29wZSAgICA6IEludGVybmFsXG4gICAqIFBhcmFtcyBpbjpcbiAgICogUmV0dXJuICAgOlxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgc2V0TG9nSGRyKGxvZ2RlcHRoOiBudW1iZXIsIG1vZHVsZU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGVudCA9IHRoaXMuZ2VuZXJhdGVJbmRlbnQoIGxvZ2RlcHRoICk7XG4gICAgY29uc29sZS5sb2coaW5kZW50ICsgJy0tPiBTZXR0aW5nIGxvZyBoZWFkZXIgZm9yIFsnICsgbW9kdWxlTmFtZSArICddJyk7XG4gICAgbGV0ICAgaSAgICAgICAgICAgPSAwO1xuICAgIGNvbnN0IGRlcHRoICAgICAgID0gbG9nZGVwdGggKiA0O1xuICAgIGxldCAgIGhkciAgICAgICAgID0gJyAnICsgIG1vZHVsZU5hbWU7XG5cbiAgICBpZiggbW9kdWxlTmFtZS5sZW5ndGggPiB0aGlzLm1vZHVsZVNwYWNlIClcbiAgICB7XG4gICAgICBoZHIgPSBoZHIuc2xpY2UoMCx0aGlzLm1vZHVsZVNwYWNlLTEpXG4gICAgfVxuICAgIGVsc2UgaWYoIG1vZHVsZU5hbWUubGVuZ3RoIDwgdGhpcy5tb2R1bGVTcGFjZSApXG4gICAge1xuICAgICAgbGV0IGRpZmYgPSB0aGlzLm1vZHVsZVNwYWNlIC0gbW9kdWxlTmFtZS5sZW5ndGg7XG4gICAgICBmb3IoIGxldCBpPTA7IGk8ZGlmZjsgaSsrIClcbiAgICAgIHtcbiAgICAgICAgaGRyICs9ICcgJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGZpZWxkIHdpZHRoIGlzIHRoZSBzdGFuZGFyZCwgcGFkIGlmIG5lY2Vzc2FyeVxuXG4gICAgLy8gKDEpIFNldCB0aGUgaW5kZW50YXRpb24gYWNjb3JkaW5nIHRvIHRoZSBkZXB0aFxuICAgIGZvciAoIGkgPSAwOyBpIDwgZGVwdGg7IGkrKyApIHtcbiAgICAgIGhkciArPSAnICc7XG4gICAgfVxuXG4gICAgLy8gKDIpIEFkZCBvbiBjYWxsIHN0YWNrIGluZGljYXRvclxuICAgIC8vIGhkciArPSAnIHwtJztcblxuICAgIHRoaXMubG9naGRyID0gaGRyO1xuICB9XG5cbiAgZ2VuZXJhdGVJbmRlbnQoIHNwYWNlczogbnVtYmVyICkge1xuICAgIGxldCBzSW5kZW50ID0gJyc7ICAvLyBJbml0aWFsaXNlIHRoZSBsb2dnaW5nIGluZGVudFxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3BhY2VzOyBpKysgKSB7XG4gICAgICAgIHNJbmRlbnQgKz0gJyAgICAnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc0luZGVudDtcbiAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmV3c1N0b3J5IH0gZnJvbSAnLi4vbW9kZWwvbmV3cy1zdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXdzU2VydmljZSB7XG4gICAgTmV3c1N0b3JpZXM6IEFycmF5PE5ld3NTdG9yeT47XG4gICAgY3VycmVudFN0b3J5OiBOZXdzU3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBjb20kOiBDb21tb25TZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBsZyQ6IExvZ2dlclNlcnZpY2UsIFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHAkOiBIdHRwQ2xpZW50ICkge1xuICAgICAgICB0aGlzLk5ld3NTdG9yaWVzID0gbmV3IEFycmF5PE5ld3NTdG9yeT4oKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBsb2FkTmV3c1N0b3JpZXMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBSZXRyaWV2ZXMgYSBsaXN0IG9mIE5ld3dzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBPYnNlcnZhYmxlXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGxvYWROZXdzU3RvcmllcyggdHlwZT86IHN0cmluZyApXG4gICAge1xuICAgICAgICB0aGlzLmxnJC5sb2coJy0tPicgKyAnbG9hZE5ld3NTdG9yaWVzKCkuLicpO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuXG4gICAgICAgIC8vIElmIGl0J3MgdGhlIEFjYWRlbXkgYXNraW5nIGZvciBuZXdzLi4uLlxuICAgICAgICAvLyBpZiggdHlwZSA9PT0gJ0EnKXtcbiAgICAgICAgLy8gICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCArICdwdWJsaWMvc3Rvcmllcy9BJyApO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIEVsc2UuLi5cbiAgICAgICAgdGhpcy5sZyQubG9nKFwiPT09Pj4+IEhpdHRpbmcgZW5kcG9pbmc6IFwiICsgdXJsICsgJ2JhY2tlbmQvcHVibGljL3N0b3JpZXMnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cCQuZ2V0KCB1cmwgKyAnYmFja2VuZC9wdWJsaWMvc3RvcmllcycgKTtcbiAgICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogc2V0TmV3cygpXG4gICAgICogRGVzY3JpcHRpb246IFNldHRlciBmb3IgYXJyYXkgb2YgbmV3cyBzdG9yaWVzXG4gICAgICogU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbiAgOiBBcnJheSBvZiBuZXdzIHN0b3JpZXNcbiAgICAgKiBSZXR1cm4gICAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICBwdWJsaWMgc2V0TmV3cyggZGF0YTogW05ld3NTdG9yeV0gKVxuICAgIHtcbiAgICBcdHRoaXMubGckLmxvZygnLT4nICsgJ3NldE5ld3MoKS4uLnJlY2lldmVkIG5ld3Mgc3RvcmllcycpO1xuICAgICAgICB0aGlzLk5ld3NTdG9yaWVzID0gZGF0YTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RvcnkgPSB0aGlzLk5ld3NTdG9yaWVzWzBdO1xuICAgICAgICB0aGlzLmxnJC5sb2coJzwtIHNldE5ld3MoKTogc2V0IGN1cnJlbnQgc3RvcnkgdG86ICcgKyB0aGlzLmN1cnJlbnRTdG9yeS50aXRsZSk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncyxcbiAgICAgICAgIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XG4vL2ltcG9ydCB7IFRvb2xCb3ggfSBmcm9tICcuLi91dGlsaXRpZXMvdG9vbGJveCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvc2l0ZS11c2VyJztcbmltcG9ydCB7IFNlcnZlck1vZGUgfSBmcm9tICcuLi9tb2RlbC9zZXJ2ZXItbW9kZSc7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSAnLi4vbW9kZWwvdGVhbSc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICcuLi9tb2RlbC9tZW1iZXInO1xuaW1wb3J0IHsgU3BvbnNvciB9IGZyb20gXCIuLi9tb2RlbC9zcG9uc29yXCI7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4uL21vZGVsL21lZGlhJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25EYXRhU2VydmljZSB7XG5cbiAgICBkc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgbW9kZXMgPSB7IExPQ0FMOjAsIFJFTU9URToxfTtcbiAgICBDdXJyZW50U2VydmVyTW9kZTogbnVtYmVyO1xuICAgIGRzVGVhbXMgICAgICAgICAgOiBBcnJheTxUZWFtPjtcbiAgICBkc1RlYW1NZW1iZXJzICAgIDogYW55ID0gW107XG4gICAgZHNDdXJyZW50VGVhbSAgICA6IFRlYW07XG4gICAgZHNDdXJyZW50TWVtYmVyICA6IE1lbWJlcjtcbiAgICBkc0N1cnJlbnRVc2VyICAgIDogVXNlcjtcbiAgICAvLyBkc1Nlc3Npb25QbGFucyA9IFtdO1xuICAgIC8vIGRzVHJhaW5pbmdSZWNvcmRzID0gW107XG4gICAgLy8gZHNUcmFpbmluZ1Blck1lbWJlciA9IFtdO1xuICAgIGRzQWxsTWVtYmVycyAgOiBBcnJheTxNZW1iZXI+O1xuICAgIGRzUG9zaXRpb24gICAgOiBBcnJheTxzdHJpbmc+O1xuICAgIGRzU3BvbnNvcnMgICAgOiBBcnJheTxTcG9uc29yPjtcbiAgICBzaG93VGVhbUFycmF5IDogYW55ID0gW107XG4gICAgZHNWaXNpdG9yQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGRzQ29va2llc1VzZXJDaG9pY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxvZ2RlcHRoICAgICAgID0gMztcbiAgICBsb2doZHIgICAgICAgICA9IFwiXCI7XG4gICAgc2VydmljZU5hbWUgICAgPSAnU2Vzc2lvbkRhdGFTZXJ2aWNlJztcbiAgICBkaXNwbGF5TWVtYmVyICA9IGZhbHNlO1xuICAgIGdBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgYUFsYnVtOiBBcnJheTxNZWRpYT47XG5cbiAgICAgY29uc3RydWN0b3IgKCBwcml2YXRlIGNvbSQ6IENvbW1vblNlcnZpY2UsIHByaXZhdGUgbGckOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIGh0dHAkOiBIdHRwQ2xpZW50IClcbiAgICAge1xuICAgICAgICB0aGlzLmxvZ2hkciA9IHRoaXMuc2V0TG9nSGRyKHRoaXMubG9nZGVwdGgsIHRoaXMuc2VydmljZU5hbWUpO1xuXG4gICAgICAgIHZhciBzdnIgICAgICAgICAgICAgICAgICAgID0gbmV3IFNlcnZlck1vZGUoKTtcbiAgICAgICAgdGhpcy5DdXJyZW50U2VydmVyTW9kZSA9IHN2ci5nZXRTZXJ2ZXJNb2RlKCk7XG4gICAgICAgIHRoaXMuZHNBdXRoZW50aWNhdGVkICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kc1Bvc2l0aW9uICAgICAgICA9IFsgICdNYW5hZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdHb2Fsa2VlcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGdWxsIEJhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NlbnRlciBIYWxmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNaWQgRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NBTScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV2luZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdHJpa2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDaGFpcm1hbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VjcmV0YXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUcmVhc3VyZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BSTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29tbWl0dGVlJ107XG4gICAgICAgIHRoaXMuZHNDdXJyZW50VXNlciAgID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5kc0N1cnJlbnRUZWFtICAgPSBuZXcgVGVhbSgpO1xuICAgICAgICB0aGlzLmRzQ3VycmVudE1lbWJlciA9IG5ldyBNZW1iZXIoKTtcbiAgICAgICAgdGhpcy5kc1RlYW1zICAgICAgICAgPSBuZXcgQXJyYXk8VGVhbT4oKTtcbiAgICAgICAgLy90aGlzLmRzVGVhbU1lbWJlcnMgPSBuZXcgQXJyYXkoNTAwKTtcbiAgICAgICAgdGhpcy5kc0N1cnJlbnRVc2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5kc0FsbE1lbWJlcnMgID0gbmV3IEFycmF5PE1lbWJlcj4oKTtcbiAgICAgICAgdGhpcy5kc1Nwb25zb3JzICAgID0gbmV3IEFycmF5PFNwb25zb3I+KCk7XG4gICAgICAgIHRoaXMuYUFsYnVtICAgICAgICA9IG5ldyBBcnJheTxNZWRpYT4oKTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnNob3dUZWFtQXJyYXkubGVuZ3RoOyBpKysgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RlYW1BcnJheVtpXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogc2V0Q3VycmVudE1lbWJlcigpXG4gICAgICogRGVzY3JpcHRpb246IFNldCB0aGUgY3VycmVudCBtZW1iZXIgdG8gdGhlIG9uZSBwYXNzZWQgaW5cbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IG1lbWJlcjogdGhlIG1lbWJlciBpbiBxdWVzdGlvblxuICAgICAqIFJldHVybiAgICAgOlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICBwdWJsaWMgc2V0Q3VycmVudE1lbWJlciggbWVtYmVyOk1lbWJlciApXG4gICAgIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0+XCIgKyBcInNldEN1cnJlbnRNZW1iZXIoKVwiKTtcbiAgICAgICAgIHRoaXMuZHNDdXJyZW50TWVtYmVyID0gbWVtYmVyO1xuICAgICAgICAgdGhpcy5kaXNwbGF5TWVtYmVyICAgPSB0cnVlO1xuICAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBkaWZmZXJlbmNlKClcbiAgICAgKiBEZXNjcmlwdGlvbjogQ2hlY2VrcyB0byBzZWUgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlXG4gICAgICogICAgICAgICAgICAgIGJldHdlZW4gdHdvIG9iamVjdHNcbiAgICAgKiBTY29wZSAgICA6IEludGVybmFsXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGRpZmZlcmVuY2UobTE6IGFueSwgbTI6IGFueSlcbiAgICB7XG4gICAgICAgIHZhciBkaWZmID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG0xKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKCBtMVt2YWxdICE9PSBtMlt2YWxdIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaWZmID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfVxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBhcHBseU1lbWJlckNoYW5nZSgpXG4gICAgICogRGVzY3JpcHRpb246IEFwcGxpZXMgYSBjaGFuZ2UgdG8gdGhlIGxvY2FsIGRhdGEgc28gdGhlXG4gICAgICogICAgICAgICAgICAgIHVzZXIgc2VlcyB0aGUgY2hhbmdlIG9uIHRoZSB2aWV3LlxuICAgICAqIFNjb3BlICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW46IE5vbmVcbiAgICAgKiBSZXR1cm4gICA6XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgYXBwbHlNZW1iZXJDaGFuZ2UobWVtYmVyczogW01lbWJlcl0sIG1lbWJlcjogTWVtYmVyKVxuICBcdHtcbiAgXHRcdHZhciBpbmRleDpudW1iZXIgPSBTZXNzaW9uRGF0YVNlcnZpY2UuZmluZE1lbWJlckluZGV4KCBtZW1iZXJzLCBtZW1iZXIgKTtcblxuICBcdFx0aWYgKCBpbmRleCA9PT0gLTEgKVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdG1lbWJlcnNbaW5kZXhdLm5hbWUgICAgICAgICA9IG1lbWJlci5uYW1lO1xuICBcdFx0bWVtYmVyc1tpbmRleF0uYWRkcmVzcyAgICAgID0gbWVtYmVyLmFkZHJlc3M7XG4gIFx0XHRtZW1iZXJzW2luZGV4XS5waG9uZSAgICAgICAgPSBtZW1iZXIucGhvbmU7XG4gIFx0XHRtZW1iZXJzW2luZGV4XS5kb2IgICAgICAgICAgPSBtZW1iZXIuZG9iO1xuICBcdFx0bWVtYmVyc1tpbmRleF0uZW1haWwgICAgICAgID0gbWVtYmVyLmVtYWlsO1xuICBcdFx0bWVtYmVyc1tpbmRleF0uYW1vdW50ICAgICAgID0gbWVtYmVyLmFtb3VudDtcbiAgXHRcdG1lbWJlcnNbaW5kZXhdLnRlYW0gICAgICAgICA9IG1lbWJlci50ZWFtO1xuICBcdFx0bWVtYmVyc1tpbmRleF0ucG9zaXRpb24gICAgID0gbWVtYmVyLnBvc2l0aW9uO1xuICBcdFx0bWVtYmVyc1tpbmRleF0ubGlkICAgICAgICAgID0gbWVtYmVyLmxpZDtcbiAgXHRcdG1lbWJlcnNbaW5kZXhdLmZhdnRlYW0gICAgICA9IG1lbWJlci5mYXZ0ZWFtO1xuICBcdFx0bWVtYmVyc1tpbmRleF0uZmF2cGxheWVyICAgID0gbWVtYmVyLmZhdnBsYXllcjtcbiAgXHRcdG1lbWJlcnNbaW5kZXhdLnNhcHBlYXJzICAgICA9IG1lbWJlci5zYXBwZWFycztcbiAgXHRcdG1lbWJlcnNbaW5kZXhdLnNhc3Npc3RzICAgICA9IG1lbWJlci5zYXNzaXN0cztcbiAgXHRcdG1lbWJlcnNbaW5kZXhdLnNnb2FscyAgICAgICA9IG1lbWJlci5zZ29hbHM7XG4gIFx0XHRtZW1iZXJzW2luZGV4XS5waG90byAgICAgICAgPSBtZW1iZXIucGhvdG87XG4gIFx0XHRtZW1iZXJzW2luZGV4XS5hY2hpZXZlbWVudHMgPSBtZW1iZXIuYWNoaWV2ZW1lbnRzO1xuICBcdH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogYXBwbHlUZWFtQ2hhbmdlKClcbiAgICAgKiBEZXNjcmlwdGlvbjogQXBwbGllcyBhIGNoYW5nZSB0byB0aGUgbG9jYWwgZGF0YSBzbyB0aGVcbiAgICAgKiAgICAgICAgICAgICAgdXNlciBzZWVzIHRoZSBjaGFuZ2Ugb24gdGhlIHZpZXcuXG4gICAgICogU2NvcGUgICAgOiBJbnRlcm5hbFxuICAgICAqIFBhcmFtcyBpbjogTm9uZVxuICAgICAqIFJldHVybiAgIDpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBhcHBseVRlYW1DaGFuZ2UoIHRlYW1zOiBbVGVhbV0sIHRoaXNUZWFtOiBUZWFtIClcbiAgICB7XG4gICAgICAgIHZhciBpbmRleDpudW1iZXIgPSAtMTtcblxuICAgICAgICBpZiAoIHRoaXMuZHNUZWFtcy5sZW5ndGggPT09IDAgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRzR2V0VGVhbXMoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5kc1RlYW1zLmxlbmd0aDsgaSsrIClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCB0aGlzLmRzVGVhbXNbaV0uaWQgPT09IHRoaXNUZWFtLmlkIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGluZGV4ID09PSAtMSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vbG9nLmRlYnVnKGxvZ2hkciArIFwiIyMjIyMjIEVSUk9SOiBhcHBseVRlYW1DaGFuZ2UgLSB0ZWFtIG5vdCBmb3VuZCFcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIGluZGV4ID4gLTEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRzVGVhbXNbaW5kZXhdID0gdGhpc1RlYW07XG4gICAgICAgICAgICAvL2xvZy5kZWJ1Zyhsb2doZHIgKyBcIiAtPiBhcHBseVRlYW1DaGFuZ2UgLSB0ZWFtIHVwZGF0ZWQ6IFwiICsgdGhpc1RlYW0ubmFtZSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogZmluZE1lbWJlckluZGV4KClcbiAgICAgKiBEZXNjcmlwdGlvbjogRmluZCBhIG1lbWJlcnMgaW5kZXgvcG9zaXRpb24gaW4gdGhlIGFycmF5XG4gICAgICogICAgICAgICAgICAgIG9mIG1lbWJlcnNcbiAgICAgKiBTY29wZSAgICA6IEludGVybmFsXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOiBUaGUgaW5kZXggdmFsdWVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBzdGF0aWMgZmluZE1lbWJlckluZGV4KCBtZW1iZXJzOiBbTWVtYmVyXSwgbWVtYmVyOiBNZW1iZXIgKVxuICBcdHtcbiAgXHRcdHZhciBpbmRleCA9IC0xO1xuXG4gIFx0XHRpZiAoIHR5cGVvZiBtZW1iZXJzICE9PSB1bmRlZmluZWQgKVxuICBcdFx0e1xuICBcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBtZW1iZXJzLmxlbmd0aDsgaSsrIClcbiAgXHRcdFx0e1xuICBcdFx0XHRcdGlmICggbWVtYmVyc1tpXS5pZCA9PT0gbWVtYmVyLmlkIClcbiAgXHRcdFx0XHR7XG4gIFx0XHRcdFx0XHRpbmRleCA9IGk7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGluZGV4O1xuICBcdH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGNvbnZlcnRQb3NUb0ludCgpXG4gICAgICogRGVzY3JpcHRpb246IENvbnZlcnRzIHRoZSBwb3NpdGlvbiBuYW1lIHRvIHRoZSBpbnRlZ2VyXG4gICAgICogICAgICAgICAgICAgIHZhbHVlXG4gICAgICogU2NvcGUgICAgOiBJbnRlcm5hbFxuICAgICAqIFBhcmFtcyBpbjogTm9uZVxuICAgICAqIFJldHVybiAgIDogVGhlIHBvc2l0aW9uIGludGVnZXIgdmFsdWVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBjb252ZXJ0UG9zVG9JbnQoIHNQb3M6IHN0cmluZyApXG4gIFx0e1xuICBcdFx0cmV0dXJuIHRoaXMuZHNQb3NpdGlvbi5pbmRleE9mKHNQb3MpO1xuICBcdH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGNvbnZlcnRUZWFtVG9JbnQoKVxuICAgICAqIERlc2NyaXB0aW9uOiBDb252ZXJ0cyB0aGUgdGVhbSBuYW1lIHRvIHRoZSBpbnRlZ2VyIHZhbHVlXG4gICAgICogU2NvcGUgICAgICA6IEludGVybmFsXG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogVGhlIHRlYW0gaW50ZWdlciB2YWx1ZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGNvbnZlcnRUZWFtVG9JbnQoIHNUZWFtOnN0cmluZyApXG4gIFx0e1xuICBcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5kc1RlYW1zLmxlbmd0aDsgaSsrIClcbiAgXHRcdHtcbiAgXHRcdFx0aWYgKCB0aGlzLmRzVGVhbXNbaV0ubmFtZSA9PT0gc1RlYW0gKVxuICBcdFx0XHR7XG4gIFx0XHRcdFx0cmV0dXJuIHRoaXMuZHNUZWFtc1tpXS5pZDtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIDA7XG4gIFx0fVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogc2V0Q3VycmVudFRlYW1CeU5hbWUoKVxuICAgICAqIERlc2NyaXB0aW9uOiBTZXQgdGhlIGN1cnJlbnQgdGVhbSBpbiBtZW1vcnlcbiAgICAgKiBTY29wZSAgICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW4gIDogVGVhbSBuYW1lIGFzIGEgc3RyaW5nXG4gICAgICogUmV0dXJuICAgICA6IE5vbmVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBzZXRDdXJyZW50VGVhbUJ5TmFtZSggdGVhbU5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgXHRjb25zb2xlLmxvZyhcIi0tPlwiICsgXCJzZXRDdXJyZW50VGVhbUJ5TmFtZShcIiArIHRlYW1OYW1lICsgXCIpXCIpO1xuXG4gICAgICAgIC8vIEVuc3VyZSB0aGUgdGVhbXMgaW5mb3JtYXRpb24gaGFzIGJlZW4gbG9hZGVkXG4gICAgICAgIGlmICggdGhpcy5kc1RlYW1zLmxlbmd0aCA8IDEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRzR2V0VGVhbXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBpY2sgb3V0IHRoaXMgdGVhbSBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICBmb3IgKCB2YXIgdGVhbSBvZiB0aGlzLmRzVGVhbXMgKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIHRlYW0ubmFtZSA9PT0gdGVhbU5hbWUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kc0N1cnJlbnRUZWFtID0gdGVhbTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCItLT5cIiArIFwic2V0Q3VycmVudFRlYW1CeU5hbWUoKTogVGVhbSBzZXQgdG8gXCIgKyB0ZWFtTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBkc0dldFRlYW1zKClcbiAgICAgKiBEZXNjcmlwdGlvbjogUmV0cmlldmVzIGEgbGlzdCBvZiB0ZWFtcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBTY29wZSAgICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBTZXRzIGRzTmV3c1N0b3JpZXNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgZHNHZXRUZWFtcygpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPlwiICsgXCIgZHNHZXRUZWFtcygpLi5cIik7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPlwiICsgXCIgZHNHZXRUZWFtcygpIC0gaG9tZSBpcyAoXCIgKyB1cmwgKyBcIilcIik7XG5cbiAgICAgIC8qdGhpcy5kc1RlYW1zID0gWyB7J2lkJzowLCAnbmFtZSc6IFwiSnVuaW9yIEFcIiwgJ2xyY29kZSc6MCwgJ2xyRml4dHVyZXNDb2RlJzowLCAnbHJSZXN1bHRzQ29kZSc6MCwgJ25vdGljZWJvYXJkJzpcIk5vIGluZm9cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgIHsnaWQnOjAsICduYW1lJzogXCJKdW5pb3IgQlwiLCAnbHJjb2RlJzowLCAnbHJGaXh0dXJlc0NvZGUnOjAsICdsclJlc3VsdHNDb2RlJzowLCAnbm90aWNlYm9hcmQnOlwiTm8gaW5mb1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgeydpZCc6MCwgJ25hbWUnOiBcIllvdXRoc1wiLCAnbHJjb2RlJzowLCAnbHJGaXh0dXJlc0NvZGUnOjAsICdsclJlc3VsdHNDb2RlJzowLCAnbm90aWNlYm9hcmQnOlwiTm8gaW5mb1wifSxcbiAgICAgICAgICAgICAgICAgICAgIF07Ki9cbiAgICAgICAgdGhpcy5sZyQubG9nKFwiPT09Pj4+IEhpdHRpbmcgZW5kcG9pbmc6IFwiICsgdXJsICsgJ2JhY2tlbmQvcHVibGljL3RlYW1zJyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCArICdiYWNrZW5kL3B1YmxpYy90ZWFtcycgKVxuICAgIFx0XHRcdC5zdWJzY3JpYmUoIChkYXRhOiBbVGVhbV0pID0+IHRoaXMuZHNTZXRUZWFtcyhkYXRhKSxcbiAgICBcdFx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5lcnJvcihcIkRhdGFTZXJ2aWNlOiBFUlJPUiByZWFkaW5nIHRlYW1zIGZyb20gc2VydmVyIVwiKSxcbiAgICBcdFx0XHRcdFx0XHQoKSAgPT4gY29uc29sZS5sb2coXCIgPD09IFRlYW1zIHJlY2VpdmVkIGZyb20gc2VydmVyIDw9PVwiKVxuICAgIFx0XHRcdFx0XHQpO1xuICAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBkc1NldFRlYW1zKClcbiAgICAgKiBEZXNjcmlwdGlvbjogU2V0IHRoZSBjdXJyZW50IG1lbWJlciB0byB0aGUgb25lIHBhc3NlZCBpblxuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogbWVtYmVyOiB0aGUgbWVtYmVyIGluIHF1ZXN0aW9uXG4gICAgICogUmV0dXJuICAgICA6XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGRzU2V0VGVhbXMoIGRhdGE6IFtUZWFtXSApXG4gICAgIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0+XCIgKyBcImRzU2V0VGVhbXMoKVwiKTtcbiAgICAgICAgIHRoaXMuZHNUZWFtcyA9IGRhdGE7XG4gICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGxvYWRUZWFtRGV0YWlsc0J5TmFtZSgpXG4gICAgICogRGVzY3JpcHRpb246IExvYWQgdGhlIGN1cnJlbnQgdGVhbSdzIGRldGFpbHNcbiAgICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbjogdGVhbU5hbWU6IHRoZSBuYW1lIG9mIHRoZSB0ZWFtIGluIHF1ZXN0aW9uXG4gICAgICogUmV0dXJuICAgOlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBsb2FkVGVhbURldGFpbHNCeU5hbWUoIHRlYW1OYW1lOnN0cmluZyApXG4gICAge1xuICAgIFx0Y29uc29sZS5sb2coXCItLT5cIiArIFwibG9hZFRlYW1EZXRhaWxzQnlOYW1lKFwiICsgdGVhbU5hbWUgKyBcIilcIik7XG5cblxuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIFRlYW1NZW1iZXJzIGFycmF5IGZpcnN0XG4gICAgICAgIHRoaXMuZHNDdXJyZW50VGVhbSA9IG51bGw7XG4gICAgICAgIHZhciB1cmwgICAgICAgICAgICA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG5cbiAgICAgICAgdGhpcy5odHRwJC5nZXQoIHVybCArICdiYWNrZW5kL3B1YmxpYy90ZWFtLycgKyB0ZWFtTmFtZSApXG4gICAgICAgICAgICAgLnN1YnNjcmliZSggKGRhdGE6IFRlYW0pID0+IHRoaXMuZHNDdXJyZW50VGVhbSA9IGRhdGEsXG4gICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBSZWFkaW5nIHRlYW0gZGV0YWlscyBmcm9tIHNlcnZlciwgdGVhbTogXCIgKyB0ZWFtTmFtZSksXG4gICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQoKSAgICA9PiBjb25zb2xlLmxvZyhcIlRlYW0gZGV0YWlscyByZWFkIHN1Y2Nlc3NmdWxseSBmb3IgdGVhbTogXCIgKyB0ZWFtTmFtZSlcbiAgICAgICAgICAgICAgICAgXHRcdFx0XHQgICk7XG5cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBsb2FkVGVhbU1lbWJlcnNCeUlkQnlPYnNlcnZhYmxlKClcbiAgICAgKiBEZXNjcmlwdGlvbjogTG9hZCB0aGUgY3VycmVudCB0ZWFtJ3MgZGV0YWlscywgcmV0dXJuIGFuXG4gICAgICogXHRcdFx0XHRvYnNlcnZhYmxlIHRvIHRoZSBjYWxsZXJcbiAgICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbjogdGVhbSB0aGUgaWQgb2YgdGhlIHRlYW0gaW4gcXVlc3Rpb25cbiAgICAgKiBSZXR1cm4gICA6IEFuIG9ic2VydmFibGVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgbG9hZFRlYW1NZW1iZXJzQnlJZEJ5T2JzZXJ2YWJsZSggdGVhbTogbnVtYmVyIClcbiAgICB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRUZWFtTWVtYmVyc0J5SWRCeU9ic2VydmFibGUgLT4gW1wiICsgdXJsICsgJ2JhY2tlbmQvcHVibGljL3RlYW1tZW1iZXJzLycgKyB0ZWFtICsgXCJdXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAkLmdldCggdXJsICsgJ2JhY2tlbmQvcHVibGljL3RlYW1tZW1iZXJzLycgKyB0ZWFtICk7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogbG9hZFRlYW1EZXRhaWxzQnlOYW1lQnlPYnNlcnZhYmxlKClcbiAgICAgKiBEZXNjcmlwdGlvbjogTG9hZCB0aGUgY3VycmVudCB0ZWFtJ3MgZGV0YWlscywgcmV0dXJuIGFuXG4gICAgICogXHRcdFx0XHRvYnNlcnZhYmxlIHRvIHRoZSBjYWxsZXJcbiAgICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbjogdGVhbU5hbWU6IHRoZSBuYW1lIG9mIHRoZSB0ZWFtIGluIHF1ZXN0aW9uXG4gICAgICogUmV0dXJuICAgOiBBbiBvYnNlcnZhYmxlXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGxvYWRUZWFtRGV0YWlsc0J5TmFtZUJ5T2JzZXJ2YWJsZSggdGVhbU5hbWU6c3RyaW5nLCBpbmRlbnQ6IG51bWJlciApXG4gICAge1xuICAgICAgICB2YXIgcHJlZml4OiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHRlYW1JZDogbnVtYmVyO1xuXG4gICAgXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCAoaW5kZW50ICsgNCk7IGkrKyApXG4gICAgXHR7XG4gICAgXHRcdHByZWZpeCArPSAnICc7XG4gICAgXHR9XG4gICAgICAgIGNvbnNvbGUubG9nKHByZWZpeCArIFwifC0tPlwiICsgXCJsb2FkVGVhbURldGFpbHNCeU5hbWVCeU9ic2VydmFibGUoXCIgKyB0ZWFtTmFtZSArIFwiKVwiKTtcblxuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIFRlYW1NZW1iZXJzIGFycmF5IGZpcnN0XG4gICAgICAgIC8vdGhpcy5kc0N1cnJlbnRUZWFtID0gbnVsbDtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFRlYW1EZXRhaWxzQnlOYW1lQnlPYnNlcnZhYmxlIC0+IFtcIiArIHVybCArICdiYWNrZW5kL3B1YmxpYy90ZWFtJyArIHRlYW1OYW1lICsgXCJdXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAkLmdldCggdXJsICsgJ2JhY2tlbmQvcHVibGljL3RlYW0vJyArIHRlYW1OYW1lICk7XG5cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBsb2FkQ3VycmVudFRlYW1NZW1iZXJzQnlOYW1lQnlPYnNlcnZhYmxlKClcbiAgICAgKiBEZXNjcmlwdGlvbjogTG9hZCB0aGUgY3VycmVudCB0ZWFtJ3MgbWVtYmVyc1xuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiB0ZWFtTmFtZTogdGhlIG5hbWUgb2YgdGhlIHRlYW0gaW4gcXVlc3Rpb25cbiAgICAgKiBSZXR1cm4gICA6IE9ic2VydmFibGVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgbG9hZEN1cnJlbnRUZWFtTWVtYmVyc0J5TmFtZUJ5T2JzZXJ2YWJsZSggdGVhbU5hbWU6IHN0cmluZywgaW5kZW50OiBudW1iZXIgKVxuICAgIHtcbiAgICBcdHZhciBwcmVmaXg6IHN0cmluZyA9ICcnO1xuXG4gICAgICAgIGlmKCBpbmRlbnQgPiAwIClcbiAgICAgICAge1xuICAgICAgICBcdGZvciAoIHZhciBpID0gMDsgaSA8IChpbmRlbnQgKyA0KTsgaSsrIClcbiAgICAgICAgXHR7XG4gICAgICAgIFx0XHRwcmVmaXggKz0gJyAnO1xuICAgICAgICBcdH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwcmVmaXggKyBcInwtLT5cIiArIFwibG9hZEN1cnJlbnRUZWFtTWVtYmVyc0J5TmFtZUJ5T2JzZXJ2YWJsZShcIiArIHRlYW1OYW1lICsgXCIpXCIpO1xuXG4gICAgICAgIGlmICggdGhpcy50ZWFtTWVtYmVyc0FyZUxvYWRlZCggdGVhbU5hbWUgKSApXG4gICAgICAgIHtcbiAgICAgICAgXHRyZXR1cm47IC8vIEFscmVhZHkgbG9hZGVkXG4gICAgICAgIH1cbiAgICAgICAvLyBDbGVhciBvdXQgdGhlIFRlYW1NZW1iZXJzIGFycmF5IGZpcnN0XG4gICAgICAgIGxldCB0ZWFtSWQgPSB0aGlzLmNvbnZlcnRUZWFtVG9JbnQoIHRlYW1OYW1lICk7XG5cbiAgICAgICAgaWYoIHRoaXMuZHNUZWFtTWVtYmVyc1t0ZWFtSWRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgdGhpcy5kc1RlYW1NZW1iZXJzW3RlYW1JZF0ubGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG5cbiAgICAgICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCArICdiYWNrZW5kL3B1YmxpYy90ZWFtbWVtYmVycy8nICsgdGVhbU5hbWUgKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiB0ZWFtTWVtYmVyc0FyZUxvYWRlZCgpXG4gICAgICogRGVzY3JpcHRpb246IENoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGxvYWRlZCB0aGVcbiAgICAgKiBcdFx0XHRcdHRlYW0gbWVtYmVyc1xuICAgICAqIFNjb3BlICAgIDogSW50ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiB0ZWFtTmFtZTogdGhlIG5hbWUgb2YgdGhlIHRlYW0gaW4gcXVlc3Rpb25cbiAgICAgKiBSZXR1cm4gICA6IHRydWUvZmFsc2VcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcml2YXRlIHRlYW1NZW1iZXJzQXJlTG9hZGVkKHRlYW1OYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gICAge1xuICAgIFx0bGV0IHRlYW1JZCA9IHRoaXMuY29udmVydFRlYW1Ub0ludCggdGVhbU5hbWUgKTtcbiAgICBcdGNvbnNvbGUubG9nKFwiICAgIHwtLT4gdGVhbU1lbWJlcnNBcmVMb2FkZWQ6IFwiICsgdGhpcy5kc1RlYW1NZW1iZXJzW3RlYW1JZF0pO1xuXG4gICAgXHRpZiAoICh0aGlzLmRzVGVhbU1lbWJlcnNbdGVhbUlkXSA9PT0gbnVsbCkgfHwgKHRoaXMuZHNUZWFtTWVtYmVyc1t0ZWFtSWRdID09PSB1bmRlZmluZWQpIClcbiAgICBcdHtcbiAgICBcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICB8LS0gTWVtYmVyIGFycmF5IG5vdCBkZWZpbmVkLCBpLmUuIG5vdCBsb2FkZWQuLlwiKTtcbiAgICBcdFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgXHR9IGVsc2UgaWYgKCAoIHRoaXMuZHNUZWFtTWVtYmVyc1t0ZWFtSWRdLmxlbmd0aCAhPT0gMCApICYmICggdGhpcy5kc0N1cnJlbnRUZWFtLm5hbWUgPT09IHRlYW1OYW1lICkgKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPlwiICsgXCJ0ZWFtTWVtYmVyc0FyZUxvYWRlZCgpOlwiICsgXCJNZW1iZXJzIG9mIFtcIiArIHRlYW1OYW1lICsgXCJdIGFscmVhZHkgbG9hZGVkIG5vdCBsb2FkaW5nIGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFx0cmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogbG9hZEN1cnJlbnRUZWFtTWVtYmVyc0J5TmFtZSgpXG4gICAgICogRGVzY3JpcHRpb246IExvYWQgdGhlIGN1cnJlbnQgdGVhbSdzIGRldGFpbHMgYW5kIG1lbWJlcnNcbiAgICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbjogdGVhbU5hbWU6IHRoZSBuYW1lIG9mIHRoZSB0ZWFtIGluIHF1ZXN0aW9uXG4gICAgICogUmV0dXJuICAgOlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBsb2FkQ3VycmVudFRlYW1NZW1iZXJzQnlOYW1lKCB0ZWFtTmFtZTpzdHJpbmcsIGNhbGxiYWNrOiBzdHJpbmcgKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLT5cIiArIFwibG9hZEN1cnJlbnRUZWFtTWVtYmVyc0J5TmFtZShcIiArIHRlYW1OYW1lICsgXCIpXCIpO1xuICAgICAgICBsZXQgdGVhbUlkID0gdGhpcy5jb252ZXJ0VGVhbVRvSW50KCB0ZWFtTmFtZSApO1xuXG4gICAgICAgIGlmICggdGhpcy50ZWFtTWVtYmVyc0FyZUxvYWRlZCggdGVhbU5hbWUgKSApXG4gICAgICAgIHtcbiAgICAgICAgXHRjb25zb2xlLmxvZyhcIiAgICB8LSBUZWFtIGFscmVhZHkgbG9hZGVkLi5cIik7XG4gICAgICAgIFx0dGhpcy5zaG93VGVhbUxvYWRlZCggdGVhbUlkICk7XG4gICAgICAgIFx0cmV0dXJuOyAvLyBBbHJlYWR5IGxvYWRlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAvLyBDbGVhciBvdXQgdGhlIFRlYW1NZW1iZXJzIGFycmF5IGZpcnN0XG4gICAgICAgIFx0bGV0IHRlYW1JZCA9IHRoaXMuY29udmVydFRlYW1Ub0ludCggdGVhbU5hbWUgKTtcbiAgICAgICAgXHR2YXIgdXJsICAgID0gdGhpcy5jb20kLmdldEhvbWUoKTtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPlwiICsgXCJsb2FkQ3VycmVudFRlYW1CeU5hbWUoKSwgbG9hZGluZyB0ZWFtOlwiICsgdGVhbU5hbWUgKTtcbiAgICAgICAgICAgdGhpcy5odHRwJC5nZXQoIHVybCArICdiYWNrZW5kL3B1YmxpYy90ZWFtbWVtYmVycy8nICsgdGVhbU5hbWUgKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4gdGhpcy5kc1RlYW1NZW1iZXJzW3RlYW1JZF0gPSBkYXRhLCAvL2NhbGxiYWNrKGRhdGEpLFxuICAgICAgICAgICAgICBcdCAgIFx0XHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVSUk9SOiBSZWFkaW5nIHRlYW0gbWVtYmVycyBmcm9tIHNlcnZlciwgdGVhbTogXCIgKyB0ZWFtTmFtZSksXG4gICAgICAgICAgICAgIFx0ICAgXHRcdFx0XHRcdCgpICAgID0+IGNvbnNvbGUubG9nKFwiPC0tIFRlYW0gbWVtYmVycyByZWFkIHN1Y2Nlc3NmdWxseSBmb3IgdGVhbTogXCIgKyB0ZWFtTmFtZSlcbiAgICAgICAgICAgICAgXHQgICBcdFx0XHRcdCAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1RlYW1Mb2FkZWQodGVhbUlkOiBudW1iZXIpXG4gIFx0e1xuICBcdFx0Y29uc29sZS5sb2coXCJzaG93VGVhbUxvYWRlZCgpXCIpO1xuXG4gIFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmRzVGVhbU1lbWJlcnNbdGVhbUlkXS5sZW5ndGg7IGkrKyApXG4gIFx0XHR7XG4gIFx0XHRcdGNvbnNvbGUubG9nKFwiLS0gW1wiICsgaSArIFwiXTogXCIgKyB0aGlzLmRzVGVhbU1lbWJlcnNbdGVhbUlkXVtpXS5uYW1lKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgICAvLy8gVEVNUCBGVU5DVElPTiBUTyBTSU0gUkVTVCBDQUxMIFRPIFNFUlZFUlxuICAgIGdldFRlYW1EZXRhaWxzU2ltKCB0ZWFtTmFtZTpzdHJpbmcgKSA6IFRlYW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5kc0N1cnJlbnRUZWFtOyAvLyA9IHRoaXMuX3Nkcy5nZXRUZWFtRGV0YWlsc0J5TmFtZSh0ZWFtTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogY2xlYXJDdXJyZW50TWVtYmVyKClcbiAgICAgKiBEZXNjcmlwdGlvbjogQ2xlYXIgb3V0IHRoZSBkc0N1cnJlbnRNZW1iZXJcbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBjbGVhckN1cnJlbnRNZW1iZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kc0N1cnJlbnRNZW1iZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGxvYWRQaG90b0RldGFpbHMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBSZXRyaWV2ZXMgYSBsaXN0IG9mIHBob3RvcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBTY29wZSAgICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBTZXRzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGxvYWRQaG90b0RldGFpbHMoIHVybDogc3RyaW5nIClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0+XCIgKyBcImxvYWRQaG90b0RldGFpbHMoXCIgKyB1cmwgKyBcIilcIik7XG5cbiAgICAgICAgLy8gUmVhZCB0aGUgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCApO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGxvYWRWaWRlb0RldGFpbHMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBSZXRyaWV2ZXMgYSBsaXN0IG9mIHZpZGVvcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBTY29wZSAgICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBTZXRzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGxvYWRWaWRlb0RldGFpbHMoIHVybDogc3RyaW5nIClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0+XCIgKyBcImxvYWRWaWRlb0RldGFpbHMoXCIgKyB1cmwgKyBcIilcIik7XG5cbiAgICAgICAgLy8gUmVhZCB0aGUgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyKHVzZXJuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgIFx0Y29uc29sZS5sb2coXCItLT5cIiArIFwiZ2V0VXNlcihcIiArIHVzZXJuYW1lICsgXCIpXCIpO1xuICAgIFx0cmV0dXJuIHRoaXMuaHR0cCQuZ2V0KHRoaXMuY29tJC5nZXRIb21lKCkgKyAnYmFja2VuZC9hZG1pbi91c2VyJyk7XG4gICAgfVxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBkc0dldEFsbE1lbWJlcnMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBHZXQgYWxsIG1lbWJlcnMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogU2NvcGUgICAgICA6IEludGVybmFsXG4gICAgICogUGFyYW1zIGluICA6XG4gICAgICogUmV0dXJuICAgICA6XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGRzR2V0QWxsTWVtYmVycygpXG4gICAge1xuICAgIFx0Y29uc29sZS5sb2coXCItLT5cIiArIFwiZHNHZXRBbGxNZW1iZXJzKClcIik7XG4gICAgXHR2YXIgdXJsID0gdGhpcy5jb20kLmdldEhvbWUoKTtcblxuICAgIFx0cmV0dXJuIHRoaXMuaHR0cCQuZ2V0KHVybCArIFwiYmFja2VuZC9hZG1pbi9tZW1iZXJzXCIpXG4gICAgXHRcdC5zdWJzY3JpYmUoXG4gICAgXHRcdFx0XHRcdChkYXRhOiBbTWVtYmVyXSkgPT4gdGhpcy5kc0FsbE1lbWJlcnMgPSBkYXRhLFxuICAgIFx0XHRcdFx0XHRlcnIgICAgICAgICAgICAgID0+IGNvbnNvbGUubG9nKFwiRVJST1IgZ2V0dGluZyBtZW1iZXJzIGZyb20gc2VydmVyIVwiKSxcbiAgICBcdFx0XHRcdFx0KCkgICAgICAgICAgICAgICA9PiBjb25zb2xlLmxvZyhcIjw9PSBGaW5pc2hlZCBnZXR0aW5nIGFsbCBtZW1iZXJzIGZyb20gc2VydmVyIDw9PVwiKVxuICAgIFx0XHRcdFx0XHQpO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE5hbWUgICAgICAgOiBnZXRUZWFtTmFtZUZybUlkKClcblx0ICogRGVzY3JpcHRpb246IENvbnZlcnQgYSB0ZWFtIG5hbWUgdG8gaXQncyBpZFxuXHQgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZSB2aWEgdGhlIHNlcnZpY2Vcblx0ICogUGFyYW1zIGluOiBzY29wZTogVGhlIHBhcmVudHMgc2NvcGVcblx0ICpcblx0ICogUmV0dXJuOiBUaGUgdGVhbSBpZFxuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgZ2V0VGVhbU5hbWVGcm1JZChpVGVhbTogbnVtYmVyLCBpbmRlbnQ6IG51bWJlcilcbiAgICB7XG4gICAgXHRsZXQgc0luZGVudCA9ICcnOyAgLy8gSW5pdGlhbGlzZSB0aGUgbG9nZ2luZyBpbmRlbnRcbiAgICBcdGZvciAoIGxldCBpID0gMDsgaSA8IGluZGVudDsgaSsrIClcbiAgICBcdHtcbiAgICBcdFx0c0luZGVudCArPSAnICc7XG4gICAgXHR9XG4gICAgXHRjb25zb2xlLmxvZyhzSW5kZW50ICsgXCI9PT4gZ2V0VGVhbU5hbWVGcm1JZChcIiArIGlUZWFtICsgXCIpXCIpO1xuXG4gICAgXHR2YXIgc1RlYW1JZCA9IFwiXCI7XG5cbiAgICBcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZHNUZWFtcy5sZW5ndGg7IGkrKyApXG4gICAgXHR7XG4gICAgXHRcdGlmICggaVRlYW0gPT09IHRoaXMuZHNUZWFtc1tpXS5pZCApXG4gICAgXHRcdHtcbiAgICBcdFx0XHRzVGVhbUlkID0gdGhpcy5kc1RlYW1zW2ldLm5hbWU7XG4gICAgXHRcdFx0Y29uc29sZS5sb2coc0luZGVudCArIFwiICAgICAgICA6OjogdGVhbSBGT1VORCBcIiArIGkgKyBcIiA9IFwiICsgdGhpcy5kc1RlYW1zW2ldLm5hbWUpO1xuICAgIFx0XHRcdGNvbnNvbGUubG9nKHNJbmRlbnQgKyBcIjw9PSBnZXRUZWFtTmFtZUZybUlkKFwiICsgc1RlYW1JZCArIFwiKVwiKTtcbiAgICBcdFx0XHRyZXR1cm4gc1RlYW1JZDtcbiAgICBcdFx0fVxuICAgIFx0XHRcdGNvbnNvbGUubG9nKHNJbmRlbnQgKyBcIiAgICAgICAgOjo6IHRlYW0gbm90IHRlYW0gXCIgKyBpICsgXCIgPSBcIiArIHRoaXMuZHNUZWFtc1tpXS5uYW1lKTtcbiAgICBcdH1cblxuICAgIFx0Y29uc29sZS5sb2coc0luZGVudCArIFwiPD09IGdldFRlYW1OYW1lRnJtSWQoXCIgKyBzVGVhbUlkICsgXCIpXCIpO1xuICAgIFx0cmV0dXJuIHNUZWFtSWQ7XG4gICAgfVxuXG5cblxuXG4gIFx0c2F2ZUp3dChqd3Q6IHN0cmluZykge1xuICBcdCAgaWYgKCBqd3QgKSB7XG4gIFx0ICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIGp3dCk7XG4gIFx0ICB9XG4gIFx0fVxuXG5cbiAgXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBzZXRMb2dIZHIoKVxuICAgICAqIERlc2NyaXB0aW9uOiBTZXRzIHVwIHRoZSBjb3JyZWN0IGluZGVudGF0aW9uIGFuZCBoZWFkZXJcbiAgICAgKiBcdFx0XHRcdGluZm9ybWF0aW9uIGZvciB0aGUgbG9nIG1lc3NhZ2VzLlxuICAgICAqIFNjb3BlICAgIDogSW50ZXJuYWxcbiAgICAgKiBQYXJhbXMgaW46XG4gICAgICogUmV0dXJuICAgOlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcdHByaXZhdGUgc2V0TG9nSGRyKGxvZ2RlcHRoOiBudW1iZXIsIG1vZHVsZU5hbWU6IHN0cmluZylcbiAgXHR7XG4gIFx0XHRjb25zb2xlLmxvZyhcIioqIFtMb2dnZXIgU2VydmljZV0gU2V0dGluZyBsb2cgaGVhZGVyIGZvciBbXCIgKyBtb2R1bGVOYW1lICsgXCJdXCIpO1xuICBcdFx0bGV0IGkgICAgICAgICAgID0gMDtcbiAgXHRcdGxldCBkZXB0aCAgICAgICA9IGxvZ2RlcHRoICogNDtcbiAgXHRcdGxldCBtb2R1bGVTcGFjZSA9IDI1O1xuICBcdFx0bGV0IGhkcjpzdHJpbmcgID0gXCIjIyBcIiArICBtb2R1bGVOYW1lO1xuXG4gIFx0XHQvLyBNYWtlIHN1cmUgdGhlIGZpZWxkIHdpZHRoIGlzIHRoZSBzdGFuZGFyZCwgcGFkIGlmIG5lY2Vzc2FyeVxuICBcdFx0aWYgKCBoZHIubGVuZ3RoIDwgbW9kdWxlU3BhY2UgKVxuICBcdFx0e1xuICBcdFx0XHRsZXQgZGlmZiA9IG1vZHVsZVNwYWNlIC0gaGRyLmxlbmd0aDtcbiAgXHRcdFx0bGV0IGkgICAgPSAwO1xuICBcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGRpZmY7IGkrKyApXG4gIFx0XHRcdHtcbiAgXHRcdFx0XHRoZHIgKz0gJyAnO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vICgxKSBTZXQgdGhlIGluZGVudGF0aW9uIGFjY29yZGluZyB0byB0aGUgZGVwdGhcbiAgXHRcdGZvciAoIGkgPSAwOyBpIDwgZGVwdGg7IGkrKyApXG4gIFx0XHR7XG4gIFx0XHRcdGhkciArPSBcIiBcIjtcbiAgXHRcdH1cblxuICBcdFx0Ly8gKDIpIEFkZCBvbiBjYWxsIHN0YWNrIGluZGljYXRvclxuICBcdFx0aGRyICs9IFwifC1cIjtcblxuICBcdFx0cmV0dXJuIGhkcjtcbiAgXHR9XG5cbiAgICAgcHJpdmF0ZSBoYW5kbGVFcnJvciggZXJyb3I6IGFueSApIHtcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgLy8gV2UnZCBhbHNvIGRpZyBkZWVwZXIgaW50byB0aGUgZXJyb3IgdG8gZ2V0IGEgYmV0dGVyIG1lc3NhZ2VcbiAgICAgICAgbGV0ICAgICAgICAgIGVyck1zZyA9ICggZXJyb3IubWVzc2FnZSApID8gZXJyb3IubWVzc2FnZTpcbiAgICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgICAgICAvL3JldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gICAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBwcm9jZXNzUGhvdG9zUmVzcG9uc2UoKVxuICAgICAqIERlc2NyaXB0aW9uOiBBZGRzIHRoZSBsaXN0IG9mIHBob3RvcyByZWNpZXZlZCBmcm9tIHRoZVxuICAgICAqICAgICAgICAgICAgICBzZXJ2ZXIgdG8gdGhlIGFsYnVtIGFuZCByZWRpcmVjdHMgdG8gdGhlXG4gICAgICogICAgICAgICAgICAgIHBob3RvcyBjb21wb25lbnQuXG4gICAgICogU2NvcGUgICAgOiBJbnRlcm5hbFxuICAgICAqIFBhcmFtcyBpbjogZGF0YTogVGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAgICogcGF0aCAgICAgOiBUaGUgcGF0aCB0byB0aGUgcGhvdG9zIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbGJ1bSAgICA6IFRoZSBtZWRpYSBhbGJ1bSB0byBwdXQgdGhlIHBob3RvcyBpblxuICAgICAqIFJldHVybiAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByb2Nlc3NQaG90b3NSZXNwb25zZSggZGF0YTogW2FueV0sIHBhdGg6IHN0cmluZywgYWxidW06IEFycmF5PE1lZGlhPiwgcm91dGVyOlJvdXRlciApXG4gIFx0e1xuICBcdFx0dGhpcy5sZyQubG9nKFwiLT4gcHJvY2Vzc1Jlc3BvbnNlKClcIik7XG4gIFx0XHR0aGlzLmxnJC5sb2coXCIgICAgIHwtIGRhdGE6XCIgKyBkYXRhKTtcbiAgXHRcdHRoaXMubGckLmxvZyhcIiAgICAgfC0gcGF0aDpcIiArIHBhdGgpO1xuICBcdFx0dGhpcy5sZyQubG9nKFwiICAgICB8LSBhbGJ1bTpcIiArIGFsYnVtKTtcbiAgXHRcdHZhciBzZWxmID0gdGhpcztcblxuICBcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJvdyl7XG4gIFx0XHRcdHZhciBwaG90byA6IE1lZGlhID0gbmV3IE1lZGlhKCk7XG4gIFx0XHRcdCAgICBwaG90by5pbWFnZSAgID0gcGF0aCArIHJvdztcbiAgXHRcdFx0YWxidW0ucHVzaChwaG90byk7XG4gIFx0XHRcdHNlbGYubGckLmxvZyhcIiAgICAgICAgIHwtIGFkZGVkIGltYWdlOiBcIiArIHBob3RvLmltYWdlICk7XG4gIFx0XHR9KTtcblxuICBcdFx0dGhpcy5sZyQubG9nKFwiPC0gcHJvY2Vzc1Jlc3BvbnNlKClcIik7XG5cbiAgICAgICAgICB0aGlzLmxnJC50cmFjZShcIlJlZGlyZWN0aW5nIHRvIC9waG90b3NcIik7XG4gICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL3Bob3RvcyddKTtcbiAgXHR9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBwcmludEFsYnVtKClcbiAgICAgKiBEZXNjcmlwdGlvbjogTG9ncyB0aGUgY29udGVudCBvZiB0aGUgYWxidW1uLlxuICAgICAqIFNjb3BlICAgICAgOlxuICAgICAqIFBhcmFtcyBpbiAgOiBkYXRhOiBUaGUgZGF0YSByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBwYXRoICAgICAgIDogVGhlIHBhdGggdG8gdGhlIHBob3RvcyBvbiB0aGUgc2VydmVyXG4gICAgICogYWxidW0gICAgICA6IFRoZSBtZWRpYSBhbGJ1bSB0byBwdXQgdGhlIHBob3RvcyBpblxuICAgICAqIFJldHVybiAgICAgOiBOb25lXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIHByaW50QWxidW0oKVxuICAgIHtcbiAgICAgICAgZm9yKCBsZXQgcGljdHVyZSBvZiB0aGlzLmFBbGJ1bSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubGckLnRyYWNlKCBwaWN0dXJlLmltYWdlICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBnZXRDbHViT2ZmaWNlcnMoKVxuICAgICAqIERlc2NyaXB0aW9uOiBSZXRyaWV2cyB0aGUgY3VycmVudCBjbHViIG9mZmljZXJzIGZyb20gZGIuXG4gICAgICogU2NvcGUgICAgICA6XG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogQXJyYWggb2Ygb2ZmaWNlcnNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgZ2V0Q2x1Yk9mZmljZXJzKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0+XCIgKyBcIiBnZXRDbHViT2ZmaWNlcnMoKS4uXCIpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5jb20kLmdldEhvbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLT5cIiArIFwiIGdldENsdWJPZmZpY2VycygpIC0gaG9tZSBpcyAoXCIgKyB1cmwgKyBcIilcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cCQuZ2V0KCB1cmwgKyAnYmFja2VuZC9wdWJsaWMvb2ZmaWNlcnMnICk7XG4gICAgIH1cblxuICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBnZXRWaXNpdG9yQ291bnQoKVxuICAgICAqIERlc2NyaXB0aW9uOiBHZXQgdGhlIGN1cnJlbnQgdmlzaXRvciBjb3VudCBmcm9tdCB0aGVcbiAgICAgKiAgICAgICAgICAgICAgc2VydmVyLlxuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOiBUaGUgY3VycmVudCBjb3VudFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBnZXRWaXNpdG9yQ291bnQoKTogYW55XG4gICAge1xuICAgICAgbGV0IHVybCA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAkLmdldCggdXJsICsgJ2JhY2tlbmQvcHVibGljL3Zjb3VudCcgKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBpbmNyZW1lbnRWaXNpdG9yQ291bnQoKVxuICAgICAqIERlc2NyaXB0aW9uOiBJbmNyZW1lbnQgdGhlIGNvdW50IG9uIHRoZSBzZXJ2ZXIgYW5kIHJldHVyblxuICAgICAqICAgICAgICAgICAgICB0aGUgbmV3IHZhbHVlLlxuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOiBOb25lLCBpdCBzZXRzIHRoZSBkc1Zpc2l0b3JDb3VudCB2YXJpYWJsZS5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgaW5jcmVtZW50VmlzaXRvckNvdW50KCk6IHZvaWRcbiAgICB7XG4gICAgICBsZXQgdXJsID0gdGhpcy5jb20kLmdldEhvbWUoKTtcblxuICAgICAgdGhpcy5odHRwJC5nZXQoIHVybCArICdiYWNrZW5kL3B1YmxpYy9pdmNvdW50JyApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCAoZGF0YTogbnVtYmVyKSA9PiB0aGlzLmRzVmlzaXRvckNvdW50ID0gZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRVJST1I6IEluY3JlbWVudGluZyB2aXNpdG9yIGNvdW50IG9uIHNlcnZlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpICAgID0+IGNvbnNvbGUubG9nKFwiVmlzaXRvciBjb3VudCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVzZXIgfSAgICAgICAgICBmcm9tICdAc3JjL2FwcC9tb2RlbC9zaXRlLXVzZXInO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSAgZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvZXJyb3Iuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgQ3VycmVudFVzZXIgICAgOiBVc2VyO1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICB1c0xvZ2dlZEluICAgICA6IGJvb2xlYW47XG4gICAgYWxsVXNlcnMgICAgICAgOiBBcnJheTxVc2VyPjtcbiAgICBjb21wb25lbnROYW1lID0gJ1VzZXJTZXJ2aWNlJztcbiAgICBsb2dkZXB0aCAgICAgID0gMTtcbiAgICByb2xlczogc3RyaW5nW107XG5cblxuICAgIGNvbnN0cnVjdG9yICggcHJpdmF0ZSBsZyQgIDogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgY29tJCA6IENvbW1vblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGVyciQgOiBFcnJvclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHAkOiBIdHRwQ2xpZW50IClcbiAgICB7XG4gICAgICAgIHRoaXMubGckLnNldExvZ0hkcih0aGlzLmxvZ2RlcHRoLCB0aGlzLmNvbXBvbmVudE5hbWUpO1xuICAgICAgICB0aGlzLkN1cnJlbnRVc2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy5hbGxVc2VycyAgICA9IG5ldyBBcnJheTxVc2VyPigpO1xuICAgICAgICAvLyBUT0RPOiByZWFkIHRoZSByb2xlcyBmcm9tIHRoZSBkYlxuICAgICAgICB0aGlzLnJvbGVzID0gWydST0xFX1VTRVInLCAnUk9MRV9NQU5BR0VSJywgJ1JPTEVfU0VDUkVUQVJZJywgJ1JPTEVfQURNSU4nXTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiBDT05TVFJVQ1RPUiBPRiBcIiArIHRoaXMuY29tcG9uZW50TmFtZSApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNlcnZpY2U6IFwiICsgdGhpcy5lcnIkICk7XG4gICAgICAgIHRoaXMuZXJyJC5vcGVuQWxlcnQoXCJURVNUIEFMRVJUICEhISEhISFcIilcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3VycmVudFVzZXIoIHVzZXI6IFVzZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5DdXJyZW50VXNlciA9IHVzZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEN1cnJlbnRVc2VyKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyRGV0YWlscyAoIHVzZXJuYW1lOiBzdHJpbmcgKVxuICAgICB7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIi0+IGdldFVzZXJEZXRhaWxzKFwiICsgdXNlcm5hbWUgKyBcIilcIik7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpICsgXCJiYWNrZW5kL2FkbWluL3VzZXIvXCIgKyB1c2VybmFtZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwJC5nZXQoIHVybCApO1xuICAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlck5hbWUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3VycmVudFVzZXIubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VXNlckFzQXV0aGVudGljYXRlZCgpXG4gICAge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQE5hbWUgICAgICAgOiBnZXRVc2VyKClcbiAgICAgKiBARGVzY3JpcHRpb246IFJlYWQgYSBnaXZlbiB1ZXdlciBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIEBQYXJhbXMgICAgIDogdXNlcjogbmFtZSBvZiB0aGUgdXNlciB0byByZXRyaWV2ZVxuICAgICAqIEBSZXR1cm4gICAgIDogT2JzZXJ2YWJsZTxVc2VyPlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBnZXRVc2VyKCB1c2VyOiBzdHJpbmcgKTogT2JzZXJ2YWJsZTxVc2VyPlxuICAgIHtcbiAgICAgIHRoaXMubGckLmxvZyhcImdldFVzZXIoKVwiKTtcblxuICAgICAgbGV0IHVybCA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG5cbiAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuY29tJC5zZXR1cEhlYWRlcnMoKTtcblxuICAgICAgdGhpcy5sZyQubG9nKFwiLS0+XCIgKyBcImdldFVzZXIoKSwgcmVhZGluZyB1c2VyIGZyb206IFwiICsgdXJsICsgJ2FkbWluL21lLycgKyB1c2VyICk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAkLmdldDxVc2VyPiggdXJsICsgJ2JhY2tlbmQvYWRtaW4vbWUvJyArIHVzZXIsIHtoZWFkZXJzfSApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnIkLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQE5hbWUgICAgICAgOiBnZXRBbGxVc2VycygpXG4gICAgICogQERlc2NyaXB0aW9uOiBSZWFkIHRoZSBhcHBsaWNhdGlvbiB1c2VycyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIEBQYXJhbXMgICAgIDogZmlsdGVyOiB0aGUgc3RyaW5nIHRoZSB1c2VyIHdhbnRzIHRvIGZpbHRlciB3aXRoXG4gICAgICogICAgICAgICAgICAgICBzb3J0OiBzb3J0IGRpcmVjdGlvbiwgYXNjIG9yIGRlc2MgXG4gICAgICogICAgICAgICAgICAgICBwYWdlOiB0aGUgcGFnZSBudW1iZXIsIG9mIGRhdGEgdG8gcmV0dXJuXG4gICAgICogICAgICAgICAgICAgICBwYWdlc2l6ZTogVGhlIHNpemUgb2YgZWFjaCBwYWdlIHRvIHJldHVyblxuICAgICAqIEBSZXR1cm4gICAgIDogT2JzZXJ2YWJsZTxVc2VyW10+XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGdldEFsbFVzZXJzKCBmaWx0ZXI6IHN0cmluZywgc29ydDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHBhZ2VzaXplOiBudW1iZXIgKTogT2JzZXJ2YWJsZTxVc2VyW10+XG4gICAge1xuICAgICAgdGhpcy5sZyQubG9nKFwiZ2V0QWxsVXNlcnMoKVwiKTtcblxuICAgICAgbGV0IHVybCA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG5cbiAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuY29tJC5zZXR1cEhlYWRlcnMoKTtcblxuICAgICAgdGhpcy5sZyQubG9nKFwiLS0+XCIgKyBcImdldEFsbFVzZXJzKCksIGxvYWRpbmcgdXNlcnMgZnJvbTogXCIgKyB1cmwgKyAnL2FkbWluL3VzZXJzLycgKTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cCQuZ2V0PFVzZXJbXT4oIHVybCArICdiYWNrZW5kL2FkbWluL3VzZXJzLycsIHtoZWFkZXJzfSApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5lcnIkLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBsb2dVc2VycygpXG4gICAgICogRGVzY3JpcHRpb246IExvZyB0aGUgbGlzdCBvZiB1c2VycyBpbiBtZW1vcnlcbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBsb2dVc2VycyhhbGxVc2Vycyk6IHZvaWRcbiAgICB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IoIGxldCB1c2VyIG9mIGFsbFVzZXJzIClcbiAgICAgIHtcbiAgICAgICAgbGV0IHU6VXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIlVzZXJbXCIgKyBpKysgKyBcIl06IFwiICsgdS5uYW1lICsgXCIgLCB1SWQ6IFwiICsgdS51c2VySWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGxvZ1VzZXIoKVxuICAgICAqIERlc2NyaXB0aW9uOiBMb2cgdGhlIHVzZXIgZGV0YWlsc1xuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogTm9uZVxuICAgICAqIFJldHVybiAgICAgOiBOb25lXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGxvZ1VzZXIodXNlcjogVXNlcik6IHZvaWRcbiAgICB7XG4gICAgICBpZiggdXNlciAhPT0gbnVsbCApXG4gICAgICB7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIiBVc2VyIGlkOiBcIiArIHVzZXIudXNlcklkKTtcbiAgICAgICAgdGhpcy5sZyQubG9nKFwiIFVzZXIgbmFtZTogXCIgKyB1c2VyLm5hbWUpO1xuICAgICAgICB0aGlzLmxnJC5sb2coXCIgVXNlciBhZGRyZXNzOiBcIiArIHVzZXIuYWRkcmVzcyk7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIiBVc2VyIERPQjogXCIgKyB1c2VyLmRvYik7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIiBVc2VyIGVtYWlsOiBcIiArIHVzZXIuZW1haWwpO1xuICAgICAgICB0aGlzLmxnJC5sb2coXCIgVXNlciBwaG9uZTogXCIgKyB1c2VyLnBob25lKTtcbiAgICAgICAgdGhpcy5sZyQubG9nKFwiIFVzZXIgc3RhdHVzOiBcIiArIHVzZXIuZW5hYmxlZCk7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIiBVc2VyIHJvbGU6IFwiICsgdXNlci5yb2xlKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5sZyQubG9nKFwiPT0+IE51bGwgdXNlciBwYXNzZWQgdG8gbG9nVXNlciFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogZWRpdFVzZXIoKVxuICAgICAqIERlc2NyaXB0aW9uOiBFZGl0IHRoZSBnaXZlbiB1c2VyXG4gICAgICogU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbiAgOiBUaGUgdXNlciBvYmplY3RcbiAgICAgKiBSZXR1cm4gICAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBlZGl0VXNlciggdXNlcjogVXNlciApXG4gICAge1xuICAgICAgdGhpcy5sZyQubG9nKFwiZWRpdFVzZXIoXCIgKyB1c2VyLm5hbWUgKyBcIilcIik7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogZGVsZXRlVXNlcigpXG4gICAgICogRGVzY3JpcHRpb246IERlbGV0ZSB0aGUgZ2l2ZW4gdXNlclxuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogVGhlIHVzZXIgb2JqZWN0XG4gICAgICogUmV0dXJuICAgICA6IE5vbmVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgZGVsZXRlVXNlciggdXNlcjogVXNlciwgY2FsbGJhY2s6IGFueSwgZGF0YVNvdXJjZTogYW55LCBwYWdpbmF0b3I6IGFueSApXG4gICAge1xuICAgICAgdGhpcy5sZyQubG9nKFwiICAgIHwtPiBkZWxldGVVc2VyKFwiICsgdXNlci5uYW1lICsgXCIpXCIpO1xuXG4gICAgICB2YXIgaG9tZSAgICA9IHRoaXMuY29tJC5nZXRIb21lKCk7XG4gICAgICBsZXQgdXNlclVybCA9IGhvbWUgKyAnYmFja2VuZC9hZG1pbi91c2VyLyc7XG4gICAgICAvLyBBZGQgdGhlIGlkIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZVxuICAgICAgdXNlclVybCArPSB1c2VyLnVzZXJJZDtcblxuICAgIFx0dGhpcy5sZyQubG9nKFwiVVJMOiBcIiArIHVzZXJVcmwpO1xuXG4gICAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSB0aGlzLmNvbSQuc2V0dXBIZWFkZXJzKCk7ICAvL3RoaXMuc2V0dXBIZWFkZXJzKCk7XG4gICAgICB0aGlzLmxnJC50cmFjZShcIkF1dGggSGRyOiBcIiArIGhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJykpO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5odHRwJC5kZWxldGUoIHVzZXJVcmwsIHtoZWFkZXJzfSApXG4gIFx0XHRcdC5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZyQubG9nKFwiICAgIHw8LSBkZWxldGVVc2VyKFwiK2RhdGErXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodXNlciwgZGF0YVNvdXJjZSwgcGFnaW5hdG9yKTtcbiAgXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICB9LFxuICAgICAgICBcdFx0XHRcdFx0XHRlcnIgPT4gdGhpcy5lcnIkLmhhbmRsZUVycm9yKGVyciksICAgICAgICAgICAgICAgICAgLy90aGlzLmxnJC5sb2coXCJVc2VyU2VydmljZTogRVJST1IgZGVsZXRpbmcgdXNlciBmcm9tIHNlcnZlciEgW1wiICsgZXJyICsgXCJdXCIpLFxuICAgICAgICBcdFx0XHRcdFx0XHQoKSAgPT4gdGhpcy5sZyQubG9nKFwiICAgIHw8LSBkZWxldGVVc2VyKCkgLSBmaW5pc2hlZFwiKVxuICAgICAgICBcdFx0XHRcdFx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwbHlVc2VyRGVsZXRlKCB1c2VyOiBVc2VyLCBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8VXNlcj4sIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yIClcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIioqIGFwcGx5VXNlckRlbGV0ZShcIiArIHVzZXIubmFtZSArIFwiKVwiKTtcblxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yKCBsZXQgdSBvZiBkYXRhU291cmNlLmRhdGEgKVxuICAgICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqIENoZWNraW5nIHVzZXI6IFwiICsgdS5uYW1lICsgXCIsIHVzZXIuaWQ6IFwiICsgdXNlci51c2VySWQgKyBcIiwgdS51c2VySWQ6IFwiKyB1LnVzZXJJZCk7XG4gICAgICAgIGlmKCB1c2VyLnVzZXJJZCA9PT0gdS51c2VySWQgKVxuICAgICAgICB7XG4gICAgICAgICAgZGF0YVNvdXJjZS5kYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBkYXRhU291cmNlLnBhZ2luYXRvciA9IHBhZ2luYXRvcjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGVsZXRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogYWRkVXNlcigpXG4gICAgICogRGVzY3JpcHRpb246IEFkZCB0aGUgZ2l2ZW4gdXNlclxuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogVGhlIHVzZXIgb2JqZWN0XG4gICAgICogUmV0dXJuICAgICA6IE5vbmVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgYWRkVXNlciggdXNlcjogVXNlciwgY2FsbGJhY2s6IGFueSwgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFVzZXI+LCBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvciApLy86IE9ic2VydmFibGU8VXNlcj5cbiAgICB7XG4gICAgICB0aGlzLmxnJC5sb2coXCJ8LT4gYWRkVXNlcihcIiArIHVzZXIubmFtZSArIFwiKVwiKTtcbiAgICAgIHRoaXMubGckLmxvZyhcInwtPiBhZGRVc2VyKFwiICsgZGF0YVNvdXJjZSArIFwiKVwiKTtcblxuICAgICAgdmFyIGhvbWUgICAgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgICAgbGV0IHVzZXJVcmwgPSBob21lICsgJ2JhY2tlbmQvYWRtaW4vdXNlci8nO1xuXG4gICAgXHR0aGlzLmxnJC5sb2coXCJVUkw6IFwiICsgdXNlclVybCk7XG5cbiAgICAgIC8vIFNldCB0aGUgaGVhZGVycywgaW5jbHVkaW5nIHRoZSBKV1RcbiAgICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IHRoaXMuY29tJC5zZXR1cEhlYWRlcnMoKTtcblxuICAgIFx0cmV0dXJuIHRoaXMuaHR0cCQucG9zdCggdXNlclVybCwgdXNlciwge2hlYWRlcnN9IClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVzZXIsIGRhdGFTb3VyY2UsIHBhZ2luYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgPT4gdGhpcy5lcnIkLmhhbmRsZUVycm9yKGVyciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgID0+IHRoaXMubGckLmxvZyhcInw8LSBhZGRVc2VyKCkgLSBmaW5pc2hlZFwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwbHlVc2VyQWRkKCB1c2VyOiBVc2VyLCBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8VXNlcj4sIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yICk6IHZvaWRcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIioqIGFwcGx5VXNlckFkZChcIiArIHVzZXIubmFtZSArIFwiKVwiKTtcblxuICAgICAgbGV0IGFsbHVzZXJzOiBVc2VyIFtdID0gZGF0YVNvdXJjZS5kYXRhLmNvbmNhdCh1c2VyKTtcbiAgICAgIGRhdGFTb3VyY2UuZGF0YSA9IGFsbHVzZXJzO1xuICAgICAgZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSBwYWdpbmF0b3I7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogdXBkYXRlVXNlcigpXG4gICAgICogRGVzY3JpcHRpb246IFVwZGF0ZXRoZSBnaXZlbiB1c2VyXG4gICAgICogU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbiAgOiBUaGUgdXNlciBvYmplY3RcbiAgICAgKiBSZXR1cm4gICAgIDogTm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyB1cGRhdGVVc2VyKCB1c2VyOiBVc2VyLCBjYWxsYmFjazogYW55ICkvLzogT2JzZXJ2YWJsZTxVc2VyPlxuICAgIHtcbiAgICAgIHRoaXMubGckLmxvZyhcIiAgICB8LT4gdXBkYXRlVXNlcihcIiArIHVzZXIubmFtZSArIFwiKVwiKTtcbiAgICBcdHZhciBob21lICAgICAgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgIFx0bGV0IG1lbWJlclVybCA9IGhvbWUgKyAnYmFja2VuZC9hZG1pbi91c2VyLyc7XG5cbiAgICBcdHRoaXMubGckLmxvZyhcIlVSTDogXCIgKyBtZW1iZXJVcmwpO1xuXG4gICAgICAvLyBTZXQgdGhlIGhlYWRlcnMsIGluY2x1ZGluZyB0aGUgSldUXG4gICAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSB0aGlzLmNvbSQuc2V0dXBIZWFkZXJzKCk7XG5cbiAgICBcdHJldHVybiB0aGlzLmh0dHAkLnB1dCggbWVtYmVyVXJsLCB1c2VyLCB7aGVhZGVyc30gKVxuICBcdFx0XHQuc3Vic2NyaWJlKCBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGckLmxvZyhcIiAgICB8PC0gdXBkYXRlVXNlcihcIitkYXRhK1wiKVwiKTtcbiAgXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4gdGhpcy5sZyQubG9nKFwiVXNlclNlcnZpY2U6IEVSUk9SIHNhdmluZyBtZW1iZXIgdG8gc2VydmVyISBbXCIgKyBlcnIgKyBcIl1cIiksXG4gICAgICAgICAgICAgICAgICAgICgpICA9PiB0aGlzLmxnJC5sb2coXCIgICAgfDwtIHVwZGF0ZVVzZXIoKSAtIGZpbmlzaGVkXCIpXG4gICAgICAgICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VXNlckRldGFpbHMoIHVzZXI6IFVzZXIgKTogdm9pZFxuICBcdHtcbiAgXHRcdHRoaXMubGckLmxvZyhcIi0+IHNldFVzZXJEZXRhaWxzKClcIik7XG4gIFx0XHR0aGlzLkN1cnJlbnRVc2VyID0gdXNlcjtcbiAgXHRcdHRoaXMudXNMb2dnZWRJbiAgPSB0cnVlO1xuICBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FkbWluSGFzTG9nZ2VkSW4nLCAndHJ1ZScpO1xuICBcdFx0dGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICBcdFx0dGhpcy5sZyQubG9nKCdVc2VyIGxvZ2luIHN0YXR1czogJyArIHRoaXMuaXNBdXRoZW50aWNhdGVkICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWZhdWx0VXNlckZpZWxkcyggdXNlcjogVXNlciApOiBVc2VyXG4gICAge1xuICAgICAgICB1c2VyLmFkZHJlc3MgPSB1c2VyLmFkZHJlc3MgPT09IG51bGwgPyAnJyA6IHVzZXIuYWRkcmVzcztcbiAgICAgICAgdXNlci5kb2IgPSB1c2VyLmRvYiA9PT0gbnVsbCA/ICcxOTAwLTEtMScgOiB1c2VyLmRvYjtcbiAgICAgICAgdXNlci5lbWFpbCA9IHVzZXIuZW1haWwgPT09IG51bGwgPyAnJyA6IHVzZXIuZW1haWw7XG4gICAgICAgIHVzZXIucGhvbmUgPSB1c2VyLnBob25lID09PSBudWxsID8gJycgOiB1c2VyLnBob25lO1xuICAgICAgICB1c2VyLmVuYWJsZWQgPSB1c2VyLmVuYWJsZWQgPT09IG51bGwgPyBmYWxzZSA6IHVzZXIuZW5hYmxlZDtcbiAgICAgICAgdXNlci5yb2xlID0gdXNlci5yb2xlID09PSBudWxsID8gJycgOiB1c2VyLnJvbGU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQubW9kdWxlJzsiLCJpbXBvcnQgeyBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uRGF0YVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9zZXNzaW9uLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb29raWUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoU2VydmljZSxcbiAgICBMb2dnZXJTZXJ2aWNlLFxuICAgIENvbW1vblNlcnZpY2UsXG4gICAgU2Vzc2lvbkRhdGFTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIEVycm9yU2VydmljZSxcbiAgICBDb29raWVTZXJ2aWNlLFxuICBdLFxuICBzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9IiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZCAtLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxuLy8gVGhlIGxpc3Qgb2YgZmlsZSByZXBsYWNlbWVudHMgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG4vKlxuICogSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdG8gaWdub3JlIHpvbmUgcmVsYXRlZCBlcnJvciBzdGFjayBmcmFtZXMgc3VjaCBhc1xuICogYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYCBmb3IgZWFzaWVyIGRlYnVnZ2luZywgeW91IGNhblxuICogaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZSwgYnV0IHBsZWFzZSBjb21tZW50IGl0IG91dCBpbiBwcm9kdWN0aW9uIG1vZGVcbiAqIGJlY2F1c2UgaXQgd2lsbCBoYXZlIHBlcmZvcm1hbmNlIGltcGFjdCB3aGVuIHRocm93IGVycm9yXG4gKi9cbi8vIGltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2FwcC5tb2R1bGUnO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLFxuLy8gc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=