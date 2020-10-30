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

module.exports = JSON.parse("{\"name\":\"ca\",\"scripts\":{\"clean\":\"npx rimraf hooks node_modules package-lock.json platforms\",\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"android\":\"tns run android --no-hmr\",\"ios\":\"tns run ios --no-hmr\",\"mobile\":\"tns run\",\"preview\":\"tns preview\",\"ngcc\":\"ngcc --properties es2015 module main --first-only\",\"postinstall\":\"npm run ngcc\"},\"dependencies\":{\"@angular/animations\":\"~10.2.1\",\"@angular/cdk\":\"^10.2.6\",\"@angular/common\":\"~10.2.1\",\"@angular/compiler\":\"~10.2.1\",\"@angular/core\":\"~10.2.1\",\"@angular/forms\":\"~10.2.1\",\"@angular/http\":\"~7.2.16\",\"@angular/material\":\"^10.2.6\",\"@angular/platform-browser\":\"~10.2.1\",\"@angular/platform-browser-dynamic\":\"~10.2.1\",\"@angular/router\":\"^10.2.1\",\"@auth0/angular-jwt\":\"^5.0.1\",\"@covalent/core\":\"^3.1.0\",\"@nativescript/angular\":\"^10.1.7\",\"@nativescript/core\":\"7.0.13\",\"@nativescript/theme\":\"~3.0.0\",\"@nativescript/webpack\":\"3.0.8\",\"angular\":\"^1.8.2\",\"core-js\":\"^3.6.5\",\"fsevents\":\"^2.1.3\",\"nativescript-ui-sidedrawer\":\"^9.0.3\",\"reflect-metadata\":\"~0.1.13\",\"rxjs\":\"~6.6.3\",\"tns-ios\":\"^6.5.3\",\"tslib\":\"2.0.3\",\"zone.js\":\"~0.11.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1002.0\",\"@angular/cli\":\"~10.2.0\",\"@angular/compiler-cli\":\"~10.2.1\",\"@nativescript/ios\":\"7.0.4\",\"@nativescript/schematics\":\"~10.1.0\",\"@nativescript/tslint-rules\":\"~0.0.5\",\"@nativescript/types\":\"~7.0.4\",\"@ngtools/webpack\":\"~10.2.0\",\"@types/jasmine\":\"~3.6.0\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^14.14.6\",\"codelyzer\":\"^6.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"~5.2.3\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"node-sass\":\"^4.14.1\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.0.0\",\"tslint\":\"~6.1.3\",\"typescript\":\"~4.0.5\"},\"main\":\"main.tns.js\"}");

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

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
/* harmony import */ var _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/common/router-module.tns.ts");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/fesm2015/nativescript-ui-sidedrawer-angular.js");





class AppComponent {
    closeDrawer() {
        const sideDrawer = _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    }
    isComponentSelected(url) { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [["tkMainContent", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-router-outlet", 0);
    } }, directives: [_src_app_common_router_module__WEBPACK_IMPORTED_MODULE_2__["PageRouterOutlet"], nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3__["TKMainContentDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/fesm2015/nativescript-ui-sidedrawer-angular.js");
/* harmony import */ var _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/common/router-module.tns.ts");
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.routes.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/news/news.component.ts");
/* harmony import */ var _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/news-story-view/news-story-view.component.ts");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/services/common.service.ts");
/* harmony import */ var _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/services/news.service.ts");










// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript/angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { AuthService } from '@src/app/services/auth.service';


// import { SessionDataService } from '@src/app/services/session-data.service';
// import { UserService } from '@src/app/services/user.service';
// import { ErrorService } from '@src/app/services/error.service';
// import { CookieService } from '@src/app/services/cookie.service';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // AuthService,
        _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        // SessionDataService,
        // UserService,
        // ErrorService,
        // CookieService,
        _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_11__["NewsService"]
    ], imports: [[
            // ...SHARED_MODULES,
            _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
            nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _src_app_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
        _src_app_news_story_view_news_story_view_component__WEBPACK_IMPORTED_MODULE_8__["NewsStoryViewComponent"]], imports: [
        // ...SHARED_MODULES,
        _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
        nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"]] }); })();
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
                    // ...SHARED_MODULES,
                    _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _src_app_common_router_module__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
                    nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                ],
                providers: [
                    // AuthService,
                    _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
                    _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
                    // SessionDataService,
                    // UserService,
                    // ErrorService,
                    // CookieService,
                    _src_app_services_news_service__WEBPACK_IMPORTED_MODULE_11__["NewsService"]
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

/***/ "./app/common/router-module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["NativeScriptRouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["RouterExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NSRouterLink", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["NSRouterLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NSRouterLinkActive", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["NSRouterLinkActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageRouterOutlet", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["PageRouterOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NSEmptyOutletComponent", function() { return _nativescript_angular__WEBPACK_IMPORTED_MODULE_0__["NSEmptyOutletComponent"]; });




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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[0, "ios", "visibility", "collapsed", "icon", "res://menu", 3, "tap"], [0, "android", "visibility", "collapsed", "ios.position", "left", 3, "tap"], ["text", "Avenue United FC"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./environments/environment.ts");

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
        
            
        
        



var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21tb24vcm91dGVyLW1vZHVsZS50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWwvc2VydmVyLW1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ld3Mtc3Rvcnktdmlldy9uZXdzLXN0b3J5LXZpZXcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uZXdzLXN0b3J5LXZpZXcvbmV3cy1zdG9yeS12aWV3LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9uZXdzL25ld3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvbmV3cy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixHQUFHLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsR0FBRyxHQUFHLHdCQUF3QixDQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVGOzs7Ozs7Z0VBTTREO0lBQ3BELE9BQU8sQ0FBRSxJQUFpQjtRQUVqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRixDQUFDOztzRUE1Q1EsV0FBVzs4RkFBWCxXQUFXLFdBQVgsV0FBVzs2RkFBWCxXQUFXO2NBRHZCLHdEQUFVOzs7Ozs7Ozs7O0FDUFg7QUFBQTtBQUFBLGdGQUFnRjtBQUNoRiwyRUFBMkU7QUFDM0UsZ0VBQWdFO0FBRXpELE1BQU0sV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7OztBQ1puRSxPQUFPLEVBQUUsc0dBQXNDO0FBRS9DLE9BQU8sRUFBRSxHQUFvQztBQUM3QyxPQUFPLEVBQUUsR0FBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtJQUN4QixjQUFjLEVBQUUsQ0FBQztDQUNsQjtBQUVILFFBQWdGO0FBQ2hGLFlBQTBFO0FBQzFFLFFBQTZIO0FBQzdILFFBQXlFO0FBQ0Q7QUFDVztBQUMxQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzcydcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNsb3NlRHJhd2VyKCkge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cblxuICBpc0NvbXBvbmVudFNlbGVjdGVkKCB1cmw6IHN0cmluZyApIHt9XG59IiwiPCEtLSA8UmFkU2lkZURyYXdlciBbZHJhd2VyVHJhbnNpdGlvbl09XCJzaWRlRHJhd2VyVHJhbnNpdGlvblwiPlxuICAgIDxHcmlkTGF5b3V0IHRrRHJhd2VyQ29udGVudCByb3dzPVwiYXV0bywgKlwiIGNsYXNzPVwibnQtZHJhd2VyX19jb250ZW50XCI+XG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzIHQtMzZcIiBzcmM9XCJmb250Oi8vJiN4ZjJiZDtcIj48L0ltYWdlPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcIiB0ZXh0PVwiVXNlciBOYW1lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm50LWRyYXdlcl9faGVhZGVyLWZvb3Rub3RlXCIgdGV4dD1cInVzZXJuYW1lQG1haWwuY29tXCI+PC9MYWJlbD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVwiMVwiIGNsYXNzPVwibnQtZHJhd2VyX19ib2R5XCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiBjbGFzcz1cIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgW2NsYXNzLi1zZWxlY3RlZF09XCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvaG9tZScpXCIgKHRhcCk9XCJvbk5hdkl0ZW1UYXAoJy9ob21lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiJiN4ZjAxNTtcIiBjbGFzcz1cIm50LWljb24gZmFzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiSG9tZVwiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywgKlwiIGNsYXNzPVwibnQtZHJhd2VyX19saXN0LWl0ZW1cIiBbY2xhc3MuLXNlbGVjdGVkXT1cImlzQ29tcG9uZW50U2VsZWN0ZWQoJy9nYWxlcnknKVwiICh0YXApPVwib25OYXZJdGVtVGFwKCcvZ2FsZXJ5JylcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiJiN4ZjFlYTtcIiBjbGFzcz1cIm50LWljb24gZmFyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiR2FsZXJ5XCIgY2xhc3M9XCJwLXItMTBcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiIFtjbGFzcy4tc2VsZWN0ZWRdPVwiaXNDb21wb25lbnRTZWxlY3RlZCgnL3RlYW1zJylcIiAodGFwKT1cIm9uTmF2SXRlbVRhcCgnL3RlYW1zJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiJiN4ZjAwMjtcIiBjbGFzcz1cIm50LWljb24gZmFzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiVGVhbXNcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiBjbGFzcz1cIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgW2NsYXNzLi1zZWxlY3RlZF09XCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvZmVhdHVyZWQnKVwiICh0YXApPVwib25OYXZJdGVtVGFwKCcvZmVhdHVyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHRleHQ9XCImI3hmMDA1O1wiIGNsYXNzPVwibnQtaWNvbiBmYXNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJGaXh0dXJlcyAmIFJlc3VsdHNcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiBjbGFzcz1cIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgW2NsYXNzLi1zZWxlY3RlZF09XCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvZmVhdHVyZWQnKVwiICh0YXApPVwib25OYXZJdGVtVGFwKCcvZmVhdHVyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHRleHQ9XCImI3hmMDA1O1wiIGNsYXNzPVwibnQtaWNvbiBmYXNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJBY2FkZW15XCIgY2xhc3M9XCJwLXItMTBcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiIFtjbGFzcy4tc2VsZWN0ZWRdPVwiaXNDb21wb25lbnRTZWxlY3RlZCgnL2ZlYXR1cmVkJylcIiAodGFwKT1cIm9uTmF2SXRlbVRhcCgnL2ZlYXR1cmVkJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiJiN4ZjAwNTtcIiBjbGFzcz1cIm50LWljb24gZmFzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiTWVyY2hhbmRpc2VcIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyXCI+PC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCAqXCIgY2xhc3M9XCJudC1kcmF3ZXJfX2xpc3QtaXRlbVwiIFtjbGFzcy4tc2VsZWN0ZWRdPVwiaXNDb21wb25lbnRTZWxlY3RlZCgnL2luZm9ybWF0aW9uJylcIiAodGFwKT1cIm9uTmF2SXRlbVRhcCgnL2luZm9ybWF0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiB0ZXh0PVwiJiN4ZjAxMztcIiBjbGFzcz1cIm50LWljb24gZmFzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiB0ZXh0PVwiSW5mb3JtYXRpb25cIiBjbGFzcz1cInAtci0xMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cImF1dG8sICpcIiBjbGFzcz1cIm50LWRyYXdlcl9fbGlzdC1pdGVtXCIgW2NsYXNzLi1zZWxlY3RlZF09XCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvc2V0dGluZ3MnKVwiICh0YXApPVwib25OYXZJdGVtVGFwKCcvc2V0dGluZ3MnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHRleHQ9XCImI3hmMDEzO1wiIGNsYXNzPVwibnQtaWNvbiBmYXNcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHRleHQ9XCJMb2dpblwiIGNsYXNzPVwicC1yLTEwXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuPC9SYWRTaWRlRHJhd2VyPiAtLT5cblxuPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50PjwvcGFnZS1yb3V0ZXItb3V0bGV0PiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbi8vIGltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvbWF0ZXJpYWwubW9kdWxlJztcblxuaW1wb3J0IHsgU0hBUkVEX01PRFVMRVMgfSBmcm9tICcuL2FwcC5jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvY29tbW9uL3JvdXRlci1tb2R1bGUnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnQHNyYy9hcHAvYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld3NTdG9yeVZpZXdDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9uZXdzLXN0b3J5LXZpZXcvbmV3cy1zdG9yeS12aWV3LmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQvYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5cblxuLy8gaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG4vLyBpbXBvcnQgeyBTZXNzaW9uRGF0YVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9zZXNzaW9uLWRhdGEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOZXdzU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL25ld3Muc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTmV3c0NvbXBvbmVudCxcbiAgICBOZXdzU3RvcnlWaWV3Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICAvLyAuLi5TSEFSRURfTU9EVUxFUyxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgLy8gTWF0ZXJpYWxNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gQXV0aFNlcnZpY2UsXG4gICAgTG9nZ2VyU2VydmljZSxcbiAgICBDb21tb25TZXJ2aWNlLFxuICAgIC8vIFNlc3Npb25EYXRhU2VydmljZSxcbiAgICAvLyBVc2VyU2VydmljZSxcbiAgICAvLyBFcnJvclNlcnZpY2UsXG4gICAgLy8gQ29va2llU2VydmljZSxcbiAgICBOZXdzU2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3c1N0b3J5Vmlld0NvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL25ld3Mtc3Rvcnktdmlldy9uZXdzLXN0b3J5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9ybWF0aW9uTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2hvbWUvc3RvcnknLCBjb21wb25lbnQ6IE5ld3NTdG9yeVZpZXdDb21wb25lbnQgfSxcbiAgeyBwYXRoOiBcImluZm9ybWF0aW9uXCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KFwiQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ubW9kdWxlXCIpLnRoZW4obSA9PiBtLkluZm9ybWF0aW9uTW9kdWxlKSB9XG5dOyIsImV4cG9ydCB7XG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIGFzIFJvdXRlck1vZHVsZSxcbiAgICBSb3V0ZXJFeHRlbnNpb25zIGFzIFJvdXRlcixcbiAgICBOU1JvdXRlckxpbmssXG4gICAgTlNSb3V0ZXJMaW5rQWN0aXZlLFxuICAgIFBhZ2VSb3V0ZXJPdXRsZXQsXG4gICAgTlNFbXB0eU91dGxldENvbXBvbmVudFxuICB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbXBvbmVudE5hbWUgPSAnSG9tZUNvbXBvbmVudCc7XG4gIGxvZ2RlcHRoICAgICAgPSAxO1xuICBsb2dnZWRJbiAgICAgID0gJyc7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgbGckICAgIDogTG9nZ2VyU2VydmljZSApIHtcbiAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICB9XG59XG4iLCI8QWN0aW9uQmFyPlxuICAgIDwhLS0gXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXG4gICAgLS0+XG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiBpY29uPVwicmVzOi8vbWVudVwiICh0YXApPVwib25EcmF3ZXJCdXR0b25UYXAoKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICA8IS0tIFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAgLS0+XG4gICAgIDwhLS0gPEFjdGlvbkl0ZW0gaWNvbj1cInJlczovL21lbnVcIiBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiAodGFwKT1cIm9uRHJhd2VyQnV0dG9uVGFwKClcIiAtLT5cbiAgICA8QWN0aW9uSXRlbSBhbmRyb2lkOnZpc2liaWxpdHk9XCJjb2xsYXBzZWRcIiAodGFwKT1cIm9uRHJhd2VyQnV0dG9uVGFwKClcIlxuICAgICAgICBpb3MucG9zaXRpb249XCJsZWZ0XCI+XG4gICAgPC9BY3Rpb25JdGVtPlxuICAgIDxMYWJlbCB0ZXh0PVwiQXZlbnVlIFVuaXRlZCBGQ1wiPjwvTGFiZWw+XG48L0FjdGlvbkJhcj5cblxuPG5ld3M+PC9uZXdzPiIsImV4cG9ydCAvKipcbiAqIFNlcnZlck1vZGVcbiAqL1xuY2xhc3MgU2VydmVyTW9kZSB7XG4gICAgbW9kZXMgPSB7IExPQ0FMOjAsIFJFTU9URToxfTtcbiAgICBjdXJyZW50TW9kZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qaWYoIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9kZSA9IHRoaXMubW9kZXMuUkVNT1RFO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgeyovXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb2RlID0gdGhpcy5tb2Rlcy5SRU1PVEU7XG4gICAgICAgIC8qfSovXG4gICAgfVxuXG4gICAgZ2V0U2VydmVyTW9kZSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TW9kZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmV3c1N0b3J5IH0gZnJvbSAnQHNyYy9hcHAvbW9kZWwvbmV3cy1zdG9yeSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9uZXdzLXN0b3J5LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25ld3Mtc3Rvcnktdmlldy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2VyU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZXdzU3RvcnlWaWV3Q29tcG9uZW50IHtcbiAgICBjb21wb25lbnROYW1lID0gJ05ld3NTdG9yeVZpZXdDb21wb25lbnQnO1xuICAgIGxvZ2RlcHRoICAgICAgPSAyO1xuICAgIHNlcnZlclVybDogU3RyaW5nO1xuICAgIHN0b3J5OiBOZXdzU3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBsZyQ6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbmV3cyQ6IE5ld3NTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb20kOiBDb21tb25TZXJ2aWNlICkge1xuICAgICAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmwgPSB0aGlzLmNvbSQuZ2V0SG9tZSgpO1xuICAgICAgICB0aGlzLnN0b3J5ID0gdGhpcy5uZXdzJC5jdXJyZW50U3Rvcnk7XG4gICAgICAgIHRoaXMubGckLmxvZyhcIlN0b3J5IHNldCB0byA6IFwiICsgdGhpcy5zdG9yeS50aXRsZSk7XG4gICAgfVxufSIsIjxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKlwiIHJvd3M9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCI+XG4gICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHRleHQ9XCJ7e3N0b3J5LnRpdGxlfX1cIiBjbGFzcz1cIm5ld3MtdGl0bGVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICA8SW1hZ2Ugcm93PVwiMVwiIGNvbD1cIjBcIiBzcmM9XCJ7e3NlcnZlclVybH19e3sgc3RvcnkuaW1hZ2UgfX1cIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiPjwvSW1hZ2U+XG4gICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMFwiIHRleHQ9XCJ7e3N0b3J5LmRlc2NyaXB0aW9ufX1cIiBjbGFzcz1cIm5ld3MtZGVzY3JpcHRpb25cIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjBcIiB0ZXh0PVwie3tzdG9yeS5zdG9yeX19XCIgY2xhc3M9XCJuZXdzLXN0b3J5XCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICA8L0dyaWRMYXlvdXQ+PlxuPC9TY3JvbGxWaWV3PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NTdG9yeSB9IGZyb20gJ0BzcmMvYXBwL21vZGVsL25ld3Mtc3RvcnknO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yICAgOiAnbmV3cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25ld3MuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJscyAgOiBbJy4vbmV3cy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzICA6IFsgTG9nZ2VyU2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3c0NvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnROYW1lID0gJ05ld3NDb21wb25lbnQnO1xuICAgIGxvZ2RlcHRoICAgICAgPSAyO1xuICAgIHNlcnZlclVybDogU3RyaW5nO1xuICAgIHRoZU5ld3M6IE5ld3NTdG9yeVtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBsZyQ6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgY29tbW9uJDogQ29tbW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHVibGljIG5ld3MkOiBOZXdzU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMubGckLnNldExvZ0hkcih0aGlzLmxvZ2RlcHRoLCB0aGlzLmNvbXBvbmVudE5hbWUpO1xuICAgICAgdmFyIHN1YnNjcmliZXIgPSB0aGlzLm5ld3MkLmxvYWROZXdzU3RvcmllcygpO1xuICAgICAgc3Vic2NyaWJlci5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIChkYXRhOiBbTmV3c1N0b3J5XSkgPT4gdGhpcy5uZXdzJC5zZXROZXdzKGRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciAgICAgICAgICAgICAgID0+IHt0aGlzLmxnJC5lcnJvcihcIj09PT4gRXJyb3IgZ2V0dGluZyBuZXdzIGZyb20gc2VydmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7IHRoaXMuY3JlYXRlTmV3cygpO30sXG4gICAgICAgICAgICAgICAgICAgICgpICAgICAgICAgICAgICAgICAgPT4gdGhpcy5sZyQubG9nKFwiIDw9PT0gUmVjZWl2ZWQgbmV3cyBmcm9tIHNlcnZlci4gPD09PT1cIilcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsID0gdGhpcy5jb21tb24kLmdldEhvbWUoKTtcbiAgICAgICAgdGhpcy5sZyQubG9nKFwibmdPbkluaXQoKSAtIHNlcnZlclVybCBzZXQgdG86IFwiICsgdGhpcy5zZXJ2ZXJVcmwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgdGhpcy5sZyQubG9nKFwiU3Rvcnkgd2FzIGNsaWNrZWQgaW4gcG9zaXRpb246IFwiICsgYXJncy5pbmRleCApO1xuICAgICAgdGhpcy5uZXdzJC5jdXJyZW50U3RvcnkgPSB0aGlzLm5ld3MkLk5ld3NTdG9yaWVzW2FyZ3MuaW5kZXhdO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZS9zdG9yeVwiXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdzKCkge1xuICAgICAgdGhpcy5sZyQubG9nKFwiPT4gdGhpcy5jcmVhdGVOZXdzKCkuLi5cIik7XG4gICAgICB0aGlzLnRoZU5ld3MgPSBcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDEsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCIyMDAgQ2x1YlwiLFxuICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSnVseSBkcmF3IHJlc3VsdHNcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIlRoZSBXaW5uZXIgb2YgdGhlIEp1bHkgMjAwIENsdWIgRHJhdyAxc3QgUHJpemUg4oKsNzUwIHdhcyBVcnN1bGEgT1JlaWxseS4gVGhlIOKCrDUwIFJ1bm5lcnMgVXAgd2VyZSBKb2huIE9NYWxsZXksIEdhcnkgU2VlcnkgYW5kIERlY2t5IFJ5YW4uIENvbmdyYXRzIHRvIGFsbC5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9hbmQtdGhlLXdpbm5lci1pcy5qcGdcIixcbiAgICAgICAgICAgICAgXCJ0aHVtYlwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibnNpZFwiOiAyLFxuICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiR1wiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEF2ZW51ZSBBY2FkZW15IGlzIGJhY2sgISEhXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGFydGluZyBvbiBTZXB0IDE0dGggLSByZWdpc3RlciBub3dcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIkRlYXIgUGFyZW50L0d1YXJkaWFuLFxcclxcblxcclxcbkNvYWNoaW5nICB0YWtlcyBwbGFjZSBmcm9tIDkuMzAg4oCTIDEwLjMwIGVhY2ggU2F0dXJkYXkgbW9ybmluZyBvbiB0aGUgQXN0cm90dXJmIFBpdGNoIGF0IExlZXMgUm9hZC4gTkIgV2VhdGhlciBQZXJtaXR0aW5nLiAgICAgICAgXFxyXFxuXFxyXFxuVG8gYm9vayBhIHBsYWNlIGluIHRoZSBBY2FkZW15IGZvciBzZWFzb24gMjAxOSDigJMgMjAyMCBwbGVhc2UgZG93bmxvYWQgQ2x1YlphcCBhcHAgYW5kIHBheSB5b3VyIDIwMTkgQXZlbnVlIFV0ZC4gbWVtYmVyc2hpcCBvbmxpbmUgdG8gc2VjdXJlIHlvdXIgY2hpbGTigJkgcyBwbGFjZS5cXHJcXG5cXHJcXG5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9hY2FkZW15LnBuZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDMsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gaW5zdGFsbCBDbHViWmFwIG9uIHlvdXIgcGhvbmVcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkVhc3kgdG8gZm9sbG93IHN0ZXBzXCIsXG4gICAgICAgICAgICAgIFwic3RvcnlcIjogXCJGb2xsb3cgdGhlIDQgc3RlcHMgb24gdGhlIGltYWdlIG9wcG9zaXRlLiBUaGVuLCBzZWxlY3QgIOKAnE15IENsdWLigJ0gb3B0aW9uIGF0IGJvdHRvbSByaWdodCBoYW5kIGNvcm5lciBvZiB0aGUgc2NyZWVuLiBUaGVyZSB5b3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCB0aWxlIHRvIHBheSBjbHViIG1lbWJlcnNoaXAgb25saW5lLlwiLFxuICAgICAgICAgICAgICBcImltYWdlXCI6IFwiYXNzZXRzL2ltZy9uZXdzL0NsdWJaYXAucG5nXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogNCxcbiAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlwiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiIEV1cm9uaWNzIE8nRmxhaGVydHkgRWxlY3RyaWMgU3BvbnNvcnNoaXBcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgYmlnIHRoYW5rIHlvdVwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiQSBiaWcgdGhhbmsgeW91IHRvIEV1cm9uaWNzIE8nRmxhaGVydHkgRWxlY3RyaWMgb24gdGhlaXIgc3BvbnNvcnNoaXAgb2YgdGhlIEF2ZW51ZSBBIHRlYW0gamVyc2V5LiBcIixcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcImFzc2V0cy9pbWcvbmV3cy9KdW5pb3JBLTIwMTkuanBnXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTEsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJOZXchXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBdmVudWUgVW5pdGVkIEVuYW1lbCBCYWRnZVwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiVGhlIGNsdWIgYXJlIHNlbGxpbmcgZW5hbWVsIGJhZGdlcyBmb3Ig4oKsNS4gSWYgYW55b25lIGlzIGludGVyZXN0ZWQgZHJvcCB1cyBhIG1lc3NhZ2UsIGVtYWlsIG9yIGNhbGwgdXMuXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvYmFkZ2UucG5nXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTIsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaWVybmV5J3MgQ29zdGN1dHRlciBzcG9uc29yIFUxNHNcIixcbiAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnkgdGhhbmtzIHRvIEpvaG4gYW5kIGhpcyBzdGFmZlwiLFxuICAgICAgICAgICAgICBcInN0b3J5XCI6IFwiVGhlIGNsdWIgd291bGQgbGlrZSB0byB0aGFuayBKb2huIGFuZCBoaXMgc3RhZmYgYXQgVGllcm5leSdzIENvc3RjdXR0ZXIgb24gdGhlIHRoZSBUdWxsYSBSb2FkIGZvciB0aGVpciBraW5kIHNwb25zb3JzaGlwIG9mIGEgc2V0IG9mIGplcnNleXMgZm9yIG91ciBVMTQgdGVhbS4gV2Ugd291bGQgYXNrIG91ciBtZW1iZXJzIHRvIHJldHVybiB0aGUgZmF2b3VyIGJ5IHN1cHBvcnRpbmcgb3VyIHNwb25zb3JzIHdoZW5ldmVyIHBvc3NpYmxlLlwiLFxuICAgICAgICAgICAgICBcImltYWdlXCI6IFwiYXNzZXRzL2ltZy9uZXdzL2Nvc3RjdXR0ZXIuanBnXCIsXG4gICAgICAgICAgICAgIFwidGh1bWJcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5zaWRcIjogMTMsXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJHXCIsXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJSb2NoZm9yZHMgUGhhcm1hY3kgc3BvbnNvciAyMDA4IHRlYW1zXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCaWcgdGhhbmtzIHRvIEJyZW5kYW4gYW5kIEF1ZHJleSFcIixcbiAgICAgICAgICAgICAgXCJzdG9yeVwiOiBcIkEgc2luY2VyZSB0aGFuayB5b3UgdG8gQXVkcmV5IGFuZCBCcmVuZGFuIFJvY2hmb3JkIG9mIFJvY2hmb3JkcyBQaGFybWFjeSBmb3Iga2luZGx5IHNwb25zb3Jpbmcgc2V0cyBvZiBqZXJzZXlzIGZvciBvdXIgMjAwOHMgdGVhbXMuXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvMjAxOC0yLmpwZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuc2lkXCI6IDE0LFxuICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiR1wiLFxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTWNEb25hbGRzIG9mIEVubmlzIHNwb25vciBVMTNzXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb29raW5nIGdvb2QhXCIsXG4gICAgICAgICAgICAgIFwic3RvcnlcIjogXCJUaGUgY2x1YiB3b3VsZCBsaWtlIHRvIHRoYW5rIEtpZXJhbiwgTmlhbWggYW5kIHRoZSBzdGFmZiBhdCBNY0RvbmFsZCdzIEVubmlzIGFuZCBTaGFubm9uIGZvciBraW5kbHkgc3BvbnNvcmluZyBhIHNldCBvZiBqZXJzZXlzIGZvciBvdXIgVTEzIHRlYW0uXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJhc3NldHMvaW1nL25ld3MvbWNkLmpwZ1wiLFxuICAgICAgICAgICAgICBcInRodW1iXCI6IG51bGxcbiAgICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG59IiwiPExpc3RWaWV3IFtpdGVtc10gPSBcIm5ld3MkLk5ld3NTdG9yaWVzXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCIgbWFyZ2luUmlnaHQ9XCItMlwiIChpdGVtVGFwKT1cIm9uSXRlbVRhcCgkZXZlbnQpXCI+XG4gICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwie3tzZXJ2ZXJVcmx9fXt7IGl0ZW0uaW1hZ2UgfX1cIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiNiYzNiNGU3N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwie3sgaXRlbS50aXRsZSB9fVwiIGNsYXNzPVwibmV3cy1zb3VyY2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVwiMTVcIiBwYWRkaW5nQm90dG9tPVwiMjBcIiBwYWRkaW5nTGVmdD1cIjE1XCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxNVwiIGJhY2tncm91bmRDb2xvcj1cIldoaXRlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJ7eyBpdGVtLmRlc2NyaXB0aW9uIH19XCIgY2xhc3M9XCJuZXdzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvTGlzdFZpZXc+IiwiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRocm93RXJyb3IsIGZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBTZXJ2ZXJNb2RlIH0gZnJvbSAnQHNyYy9hcHAvbW9kZWwvc2VydmVyLW1vZGUnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZSB7XG5cbiAgICBtb2RlcyA9IHsgTE9DQUw6MCwgUkVNT1RFOjF9O1xuICAgIEN1cnJlbnRTZXJ2ZXJNb2RlOiBudW1iZXI7XG5cbiAgICBsb2dkZXB0aCAgICA9IDM7XG4gICAgbG9naGRyICAgICAgPSBcIlwiO1xuICAgIHNlcnZpY2VOYW1lID0gJ0NvbW1vblNlcnZpY2UnO1xuICAgIGxnJDogTG9nZ2VyU2VydmljZTtcblxuICAgICBjb25zdHJ1Y3RvcigpIFxuICAgICB7XG4gICAgICAgIHZhciBzdnIgICAgICAgICAgICAgICAgPSBuZXcgU2VydmVyTW9kZSgpO1xuICAgICAgICB0aGlzLkN1cnJlbnRTZXJ2ZXJNb2RlID0gdGhpcy5tb2Rlcy5SRU1PVEU7XG4gICAgICAgIHRoaXMubGckICAgICAgICAgICAgICAgPSBuZXcgTG9nZ2VyU2VydmljZSgpO1xuICAgICAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5zZXJ2aWNlTmFtZSk7XG4gICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGdldEhvbWUoKVxuICAgICAqIERlc2NyaXB0aW9uOiBSZXR1cm5zIHRoZSBfaG9tZSBVUkwgc28gdGhhdCBpdCBjYW4gYmUgdXNlZFxuICAgICAqIFx0XHRcdFx0YXMgYSBsb2NhbCBvciByZW1vdGUgYXBwLlxuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiBub25lXG4gICAgICogUmV0dXJuICAgOiBfaG9tZSBVUkxcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBnZXRIb21lKCkgOiBzdHJpbmcge1xuICAgICAgICB2YXIgX2hvbWU6IHN0cmluZztcbiAgICAgICAgdGhpcy5sZyQubG9nKFwiLT4gZ2V0SG9tZSgpXCIpO1xuXG4gICAgICAgIGlmICggZW52aXJvbm1lbnQucHJvZHVjdGlvbiA9PT0gZmFsc2UgKVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5sZyQubG9nKFwiICAgfC0gZW52aXJvbm1lbnQucHJvZHVjdGlvbiBpcyBmYWxzZSwgcmV0dXJuaW5nIGxvY2FsaG9zdFwiKVxuICAgICAgICAgICAvL19ob21lID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xuICAgICAgICAgIC8vICBfaG9tZSA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvJztcbiAgICAgICAgICAgX2hvbWUgPSAnaHR0cDovL2F2ZW51ZXVuaXRlZC5pZS5tb2NoYTYwMDQubW9jaGFob3N0LmNvbS8nO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLkN1cnJlbnRTZXJ2ZXJNb2RlID09PSB0aGlzLm1vZGVzLlJFTU9URSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIF9ob21lID0gJ2h0dHA6Ly93d3cuYXZlbnVldW5pdGVkLmllLyc7XG4gICAgICAgICAgICBfaG9tZSA9ICdodHRwOi8vYXZlbnVldW5pdGVkLmllLm1vY2hhNjAwNC5tb2NoYWhvc3QuY29tLyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxnJC5sb2coXCI8LSBnZXRIb21lKFwiICsgX2hvbWUgKyBcIilcIik7XG4gICAgICAgIHJldHVybiBfaG9tZTtcbiAgfVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIE5hbWUgICAgICAgOiBnZXRHYWxsZXJ5SG9tZSgpXG4gICAqIERlc2NyaXB0aW9uOiBSZXR1cm5zIHRoZSBfaG9tZSBVUkwgc28gdGhhdCBpdCBjYW4gYmUgdXNlZFxuICAgKiBcdFx0XHRcdGFzIGEgbG9jYWwgb3IgcmVtb3RlIGFwcC5cbiAgICogU2NvcGUgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICogUGFyYW1zIGluOiBub25lXG4gICAqIFJldHVybiAgIDogX2hvbWUgVVJMXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldEdhbGxlcnlIb21lKCkgOiBzdHJpbmcge1xuICAgICAgICB2YXIgX2hvbWU6IHN0cmluZztcblxuICAgICAgICAvLyBpZiAoIGVudmlyb25tZW50LnByb2R1Y3Rpb24gPT09IGZhbHNlIClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyBcdCBfaG9tZSA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcbiAgICAgICAgLy8gfSBlbHNlXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIF9ob21lID0gJ2h0dHA6Ly93d3cuYXZlbnVldW5pdGVkLmllLyc7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBfaG9tZSA9ICdodHRwOi8vd3d3LmF2ZW51ZXVuaXRlZC5pZS8nO1xuXG4gICAgICAgIHJldHVybiBfaG9tZTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBpc1ZhbGlkTmFtZSgpXG4gICAgICogRGVzY3JpcHRpb246IENoZWNrcyB0aGF0IHRoZXJlIGFyZSBvbmUgb3IgbW9yZSB3b3JkcyBpblxuICAgICAqIFx0XHRcdFx0dGhlIG5hbWVcbiAgICAgKiBQYXJhbXMgaW46IFRoZSBuYW1lIGVudGVyZWRcbiAgICAgKiBSZXR1cm4gICA6IHRydWUgb3IgZmFsc2VcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBpc1ZhbGlkTmFtZSggbmFtZTogc3RyaW5nICk6IGJvb2xlYW5cbiAgXHR7XG4gIFx0XHQvL3RoaXMubGckLmxvZyhcIi0tLS0+IGNoZWNrTmFtZShcIiArIG5hbWUgKyBcIilcIik7XG5cbiAgXHRcdGlmICggKCBuYW1lICE9PSB1bmRlZmluZWQgKSAmJiAoIG5hbWUgIT09ICcnICkgKVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm4gL15cXHcrLy50ZXN0KG5hbWUpO1xuICBcdFx0fSBlbHNlXG4gIFx0XHR7XG4gIFx0XHRcdC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tOYW1lKFwiICsgbmFtZSArIFwiKSB1bmRlZmluZWQgb3IgYmxhbmshXCIpO1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG4gIFx0fVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogaXNWYWxpZEVtYWlsKClcbiAgICAgKiBEZXNjcmlwdGlvbjogQ2hlY2tzIHRoYXQgdGhlIGVudGVyZWQgdGV4dCBtYXRjaGVzIHRoZVxuICAgICAqIFx0XHRcdFx0YmFzaWMgcnVsZXMgdG8gYmUgYW4gZW1haWwgYWRkcmVzcy5cbiAgICAgKiBQYXJhbXMgaW46IFRoZSBlbWFpbCBlbnRlcmVkXG4gICAgICogUmV0dXJuICAgOiB0cnVlIG9yIGZhbHNlXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFx0aXNWYWxpZEVtYWlsKCBlbWFpbDogc3RyaW5nICk6IGJvb2xlYW5cbiAgXHR7XG4gIFx0XHQvL3RoaXMubGckLmxvZyhcIi0tLS0+IGNoZWNrRW1haWwoXCIgKyBlbWFpbCArIFwiKVwiKTtcbiAgXHRcdGNvbnNvbGUubG9nKFwiLS0tLT4gY2hlY2tFbWFpbChcIiArIGVtYWlsICsgXCIpXCIpO1xuXG4gIFx0XHRpZiAoICggZW1haWwgIT09IHVuZGVmaW5lZCApICYmICggZW1haWwgIT09ICcnICkgKVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm4gL15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JC9pLnRlc3QoZW1haWwpO1xuICBcdFx0fSBlbHNlXG4gIFx0XHR7XG4gIFx0XHRcdGNvbnNvbGUubG9nKFwiLS0tLT4gY2hlY2tFbWFpbChcIiArIGVtYWlsICsgXCIpIHVuZGVmaW5lZCBvciBibGFuayFcIik7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBpc1ZhbGlkUGhvbmUoKVxuICAgICAqIERlc2NyaXB0aW9uOiBDaGVja3MgdGhhdCB0aGUgZW50ZXJlZCB0ZXh0IG1hdGNoZXMgdGhlXG4gICAgICogXHRcdFx0XHRiYXNpYyBydWxlcyB0byBiZSBhbiBJcmlzaCBwaG9uZSBudW1iZXIuXG4gICAgICogUGFyYW1zIGluOiBUaGUgZW1haWwgZW50ZXJlZFxuICAgICAqIFJldHVybiAgIDogdHJ1ZSBvciBmYWxzZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlzVmFsaWRQaG9uZSggcGhvbmU6IHN0cmluZyApOiBib29sZWFuXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCItLS0tPiBjaGVja1BoKFwiICsgcGhvbmUgKyBcIilcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIj09IFwiICsgL15cXGR7MTB9JC8udGVzdChwaG9uZSkgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT0gXCIgKyAvXlxcK1xcZHsxMn0kLy50ZXN0KHBob25lKSApO1xuXG4gICAgICBpZiAoICggcGhvbmUgIT09IHVuZGVmaW5lZCApICYmICggcGhvbmUgIT09ICcnICkgKVxuICAgICAge1xuICAgICAgICBpZiAoICgvXlxcZHsxMH0kLy50ZXN0KHBob25lKSkgfHwgKC9eXFwrXFxkezEyfSQvLnRlc3QocGhvbmUpKSApXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlXG4gICAgICB7XG4gICAgICAgIC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tQaChcIiArIHBob25lICsgXCIpIHVuZGVmaW5lZCBvciBibGFuayFcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogTmFtZSAgICAgICA6IGlzVmFsaWREb2IoKVxuICAgKiBEZXNjcmlwdGlvbjogQ2hlY2tzIHRoYXQgdGhlIGRvYiBpcyBub3QgZW1wdHlcbiAgICogUGFyYW1zIGluICA6IFRoZSBuYW1lIGVudGVyZWRcbiAgICogUmV0dXJuICAgICA6IHRydWUgb3IgZmFsc2VcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgaXNWYWxpZERvYiggbmFtZTogc3RyaW5nICk6IGJvb2xlYW5cbiAgXHR7XG4gIFx0XHQvL3RoaXMubGckLmxvZyhcIi0tLS0+IGNoZWNrTmFtZShcIiArIG5hbWUgKyBcIilcIik7XG5cbiAgXHRcdGlmICggKCBuYW1lICE9PSB1bmRlZmluZWQgKSAmJiAoIG5hbWUgIT09ICcnICkgKVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm4gL15cXHcrLy50ZXN0KG5hbWUpO1xuICBcdFx0fSBlbHNlXG4gIFx0XHR7XG4gIFx0XHRcdC8vdGhpcy5sZyQubG9nKFwiLS0tLT4gY2hlY2tOYW1lKFwiICsgbmFtZSArIFwiKSB1bmRlZmluZWQgb3IgYmxhbmshXCIpO1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG4gIFx0fVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogaXNFbXB0eSgpXG4gICAgICogRGVzY3JpcHRpb246IENoZWNrcyBpZiBhIGZpZWxkIGlzIGVtcHR5IGVtcHR5XG4gICAgICogUGFyYW1zIGluICA6IFRoZSBmaWVsZCBlbnRlcmVkXG4gICAgICogUmV0dXJuICAgICA6IHRydWUgb3IgZmFsc2VcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBpc0VtcHR5KCBmaWVsZDogc3RyaW5nICk6IGJvb2xlYW5cbiAgXHR7XG4gIFx0XHRpZiAoICggZmllbGQgPT09IHVuZGVmaW5lZCApIHx8ICggZmllbGQgPT09ICcnICkgKVxuICBcdFx0e1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9IGVsc2VcbiAgXHRcdHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG4gIFx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IGNsZWFyQXJyYXkoKVxuICAgICAqIERlc2NyaXB0aW9uOiBDbGVhcnMgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBwYXNzZWQgaW4uXG4gICAgICogU2NvcGUgICAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbiAgOiBUaGUgYXJyYXkgdG8gY2xlYXJcbiAgICAgKiBSZXR1cm4gICAgIDogbm9uZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcdHB1YmxpYyBjbGVhckFycmF5KCBhcnJheSwgbGckOiBMb2dnZXJTZXJ2aWNlIClcbiAgXHR7XG4gIFx0XHRsZyQudHJhY2UoXCItPiBjbGVhckFycmF5KClcIik7XG5cbiAgXHRcdHdoaWxlKCBhcnJheS5sZW5ndGggKVxuICBcdFx0e1xuICBcdFx0XHRsZyQudHJhY2UoXCIuLi4uc2VuZGluZyBhcnJheSB2YWx1ZSB0byB0cmFzaFwiKTtcbiAgXHRcdFx0YXJyYXkucG9wKCk7XG4gIFx0XHR9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogc2V0dXBIZWFkZXJzKClcbiAgICAgKiBEZXNjcmlwdGlvbjogU2V0IHRoZSBKV1QgaW4gdGhlIGhlYWRlciBzbyB3ZSBjYW4gYWNjZXNzXG4gICAgICogICAgICAgICAgICAgIHNlY3VyZSBjb250ZW50IGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBTY29wZSAgICA6IEV4dGVybmFsbHkgYWNjZXNzaWJsZVxuICAgICAqIFBhcmFtcyBpbjogTm9uZVxuICAgICAqIFJldHVybiAgIDogVGhlIGhlYWRlcnMgc3RydWN0XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIHNldHVwSGVhZGVycygpOiBIdHRwSGVhZGVyc1xuICAgIHtcbiAgICAgIC8vdGhpcy5sZyQubG9nKFwic2V0dXBIZWFkZXJzKClcIilcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpXG4gICAgICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICAgICAgLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0Jyk7XG4gICAgICAvLyB0aGlzLmxnJC5sb2coXCJUb2tlbiByZWFkIGZyb20gc3RvcmFnZTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSApO1xuICAgICAgLy8gdGhpcy5sZyQubG9nKFwiQXV0aCBIZHI6IFwiICsgaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKSk7XG4gICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIE5hbWUgICAgICAgOiBjYWxjdWxhdGVDdXJyZW50U2Vhc29uKClcbiAgICAgKiBEZXNjcmlwdGlvbjogRGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IG1vbnRoLCB0aGlzIHJldHVybnNcbiAgICAgKiAgICAgICAgICAgICAgdGhlIGN1cnJlbnQgc2Vhc29uLiBVc2VkIGJ5IFVJIHBhZ2VzLlxuICAgICAqIFNjb3BlICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluOiBOb25lXG4gICAgICogUmV0dXJuICAgOiBUaGUgY3VycmVudCBzZWFzb24sIGUuZy4gXCIyMDE4LzIwMTlcIlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBjYWxjdWxhdGVDdXJyZW50U2Vhc29uKCk6IFN0cmluZ1xuICAgIHtcbiAgICAgIHZhciBzZWFzb24gPSBcIlwiO1xuICAgICAgY29uc3QgZGF0ZTogRGF0ZSAgID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCB5ZWFyICAgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBsZXQgbW9udGggID0gZGF0ZS5nZXRNb250aCgpOyAgICAgLy8gUmVtZW1iZXIgdGhpcyBpcyAwIGZvciBKYW4gZXRjLlxuXG4gICAgICBpZiggbW9udGggPiA2ICYmIG1vbnRoIDw9IDExICkgLy8gRmlyc3QgcGVyaW9kXG4gICAgICAgIHNlYXNvbiA9IHllYXIgKyBcIi9cIiArICh5ZWFyKzEpO1xuICAgICAgZWxzZVxuICAgICAgICBzZWFzb24gPSAoeWVhci0xKSArIFwiL1wiICsgeWVhcjsgIC8vIFNlY29uZCB0ZXJtXG5cbiAgICAgIHJldHVybiBzZWFzb247XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogZ2V0TG9nRGVwdGgoKVxuICAgICAqIERlc2NyaXB0aW9uOiBDb252ZXJ0IGEgbnVtYmVyIHRvIHRoYXQgbnVtYmVyIG9mIHNwYWNlcy5cbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogVGhlIGxvZyBkZXB0aCBhcyBzcGFjZXMuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGdldExvZ0RlcHRoKCBkZXB0aDogbnVtYmVyICk6IHN0cmluZ1xuICAgIHtcbiAgICAgIGxldCBwcmVmaXg6IHN0cmluZyA9ICcnO1xuXG4gICAgICBmb3IoIGxldCBpOm51bWJlcj0wOyBpPGRlcHRoOyBpKysgKVxuICAgICAge1xuICAgICAgICBwcmVmaXguY29uY2F0KCcgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBMb2dUeXBlXG57XG4gIGZ1bmN0aW9uLFxuICBtZXNzYWdlXG59XG5cbi8vQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9naGRyID0gJyc7ICAvLyBUaGUgaGVhZGVyIGZvciB0aGlzIGluc3RhbmNlLCB0byBiZSB1c2VkIGluIGVhY2ggbG9nIG1lc3NhZ2VcbiAgcmVhZG9ubHkgZnVuY3Rpb25QcmVmaXggPSBcInwtPlwiO1xuICByZWFkb25seSBtZXNzYWdlUHJlZml4ICA9IFwiICAgfC0gXCI7XG4gIHJlYWRvbmx5IG1vZHVsZVNwYWNlID0gMjU7XG5cbiAgLy90cmFjZShtc2c6IGFueSwgdHlwZT86c3RyaW5nKSB7IC8qaWYocHJvY2Vzcy5lbnYuREVCVUcpKi8gY29uc29sZS5sb2coIHRoaXMubG9naGRyICsgbXNnKTsgfVxuICBsb2cobXNnOiBhbnksIHByZWZpeD86c3RyaW5nKSAgIHsgY29uc29sZS5sb2codGhpcy5sb2doZHIgKyBtc2cpOyB9XG4gIGVycm9yKG1zZzogYW55LCBwcmVmaXg/OnN0cmluZykgeyBjb25zb2xlLmVycm9yKHRoaXMubG9naGRyICsgbXNnKTsgfVxuICB3YXJuKG1zZzogYW55LCBwcmVmaXg/OnN0cmluZykgIHsgY29uc29sZS53YXJuKHRoaXMubG9naGRyICsgbXNnKTsgfVxuXG4gIHRyYWNlKG1zZzogYW55LCB0eXBlPzpMb2dUeXBlKSBcbiAge1xuICAgICAgc3dpdGNoKCB0eXBlIClcbiAgICAgIHtcbiAgICAgICAgY2FzZSBMb2dUeXBlLmZ1bmN0aW9uOiAvLyBmdW5jdGlvbiBjYWxsXG4gICAgICAgICAgY29uc29sZS5sb2coIHRoaXMubG9naGRyICsgdGhpcy5mdW5jdGlvblByZWZpeCArIG1zZyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTG9nVHlwZS5tZXNzYWdlOiAvLyBmdW5jdGlvbiBjYWxsXG4gICAgICAgICAgY29uc29sZS5sb2coIHRoaXMubG9naGRyICsgdGhpcy5tZXNzYWdlUHJlZml4ICsgbXNnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5sb2doZHIgKyBtc2cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogTmFtZSAgICAgICA6IHNldExvZ0hkcigpXG4gICAqIERlc2NyaXB0aW9uOiBTZXRzIHVwIHRoZSBjb3JyZWN0IGluZGVudGF0aW9uIGFuZCBoZWFkZXJcbiAgICogXHRcdFx0XHRpbmZvcm1hdGlvbiBmb3IgdGhlIGxvZyBtZXNzYWdlcy5cbiAgICogU2NvcGUgICAgOiBJbnRlcm5hbFxuICAgKiBQYXJhbXMgaW46XG4gICAqIFJldHVybiAgIDpcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIHNldExvZ0hkcihsb2dkZXB0aDogbnVtYmVyLCBtb2R1bGVOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbmRlbnQgPSB0aGlzLmdlbmVyYXRlSW5kZW50KCBsb2dkZXB0aCApO1xuICAgIGNvbnNvbGUubG9nKGluZGVudCArICctLT4gU2V0dGluZyBsb2cgaGVhZGVyIGZvciBbJyArIG1vZHVsZU5hbWUgKyAnXScpO1xuICAgIGxldCAgIGkgICAgICAgICAgID0gMDtcbiAgICBjb25zdCBkZXB0aCAgICAgICA9IGxvZ2RlcHRoICogNDtcbiAgICBsZXQgICBoZHIgICAgICAgICA9ICcgJyArICBtb2R1bGVOYW1lO1xuXG4gICAgaWYoIG1vZHVsZU5hbWUubGVuZ3RoID4gdGhpcy5tb2R1bGVTcGFjZSApXG4gICAge1xuICAgICAgaGRyID0gaGRyLnNsaWNlKDAsdGhpcy5tb2R1bGVTcGFjZS0xKVxuICAgIH1cbiAgICBlbHNlIGlmKCBtb2R1bGVOYW1lLmxlbmd0aCA8IHRoaXMubW9kdWxlU3BhY2UgKVxuICAgIHtcbiAgICAgIGxldCBkaWZmID0gdGhpcy5tb2R1bGVTcGFjZSAtIG1vZHVsZU5hbWUubGVuZ3RoO1xuICAgICAgZm9yKCBsZXQgaT0wOyBpPGRpZmY7IGkrKyApXG4gICAgICB7XG4gICAgICAgIGhkciArPSAnICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBmaWVsZCB3aWR0aCBpcyB0aGUgc3RhbmRhcmQsIHBhZCBpZiBuZWNlc3NhcnlcblxuICAgIC8vICgxKSBTZXQgdGhlIGluZGVudGF0aW9uIGFjY29yZGluZyB0byB0aGUgZGVwdGhcbiAgICBmb3IgKCBpID0gMDsgaSA8IGRlcHRoOyBpKysgKSB7XG4gICAgICBoZHIgKz0gJyAnO1xuICAgIH1cblxuICAgIC8vICgyKSBBZGQgb24gY2FsbCBzdGFjayBpbmRpY2F0b3JcbiAgICAvLyBoZHIgKz0gJyB8LSc7XG5cbiAgICB0aGlzLmxvZ2hkciA9IGhkcjtcbiAgfVxuXG4gIGdlbmVyYXRlSW5kZW50KCBzcGFjZXM6IG51bWJlciApIHtcbiAgICBsZXQgc0luZGVudCA9ICcnOyAgLy8gSW5pdGlhbGlzZSB0aGUgbG9nZ2luZyBpbmRlbnRcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHNwYWNlczsgaSsrICkge1xuICAgICAgICBzSW5kZW50ICs9ICcgICAgJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNJbmRlbnQ7XG4gIH1cblxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5ld3NTdG9yeSB9IGZyb20gJy4uL21vZGVsL25ld3Mtc3RvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV3c1NlcnZpY2Uge1xuICAgIE5ld3NTdG9yaWVzOiBBcnJheTxOZXdzU3Rvcnk+O1xuICAgIGN1cnJlbnRTdG9yeTogTmV3c1N0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgY29tJDogQ29tbW9uU2VydmljZSwgXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbGckOiBMb2dnZXJTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwJDogSHR0cENsaWVudCApIHtcbiAgICAgICAgdGhpcy5OZXdzU3RvcmllcyA9IG5ldyBBcnJheTxOZXdzU3Rvcnk+KCk7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBOYW1lICAgICAgIDogbG9hZE5ld3NTdG9yaWVzKClcbiAgICAgKiBEZXNjcmlwdGlvbjogUmV0cmlldmVzIGEgbGlzdCBvZiBOZXd3cyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBTY29wZSAgICAgIDogRXh0ZXJuYWxseSBhY2Nlc3NpYmxlXG4gICAgICogUGFyYW1zIGluICA6IE5vbmVcbiAgICAgKiBSZXR1cm4gICAgIDogT2JzZXJ2YWJsZVxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyBsb2FkTmV3c1N0b3JpZXMoIHR5cGU/OiBzdHJpbmcgKVxuICAgIHtcbiAgICAgICAgdGhpcy5sZyQubG9nKCctLT4nICsgJ2xvYWROZXdzU3RvcmllcygpLi4nKTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb20kLmdldEhvbWUoKTtcblxuICAgICAgICAvLyBJZiBpdCdzIHRoZSBBY2FkZW15IGFza2luZyBmb3IgbmV3cy4uLi5cbiAgICAgICAgLy8gaWYoIHR5cGUgPT09ICdBJyl7XG4gICAgICAgIC8vICAgcmV0dXJuIHRoaXMuaHR0cCQuZ2V0KCB1cmwgKyAncHVibGljL3N0b3JpZXMvQScgKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBFbHNlLi4uXG4gICAgICAgIHRoaXMubGckLmxvZyhcIj09PT4+PiBIaXR0aW5nIGVuZHBvaW5nOiBcIiArIHVybCArICdiYWNrZW5kL3B1YmxpYy9zdG9yaWVzJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAkLmdldCggdXJsICsgJ2JhY2tlbmQvcHVibGljL3N0b3JpZXMnICk7XG4gICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogTmFtZSAgICAgICA6IHNldE5ld3MoKVxuICAgICAqIERlc2NyaXB0aW9uOiBTZXR0ZXIgZm9yIGFycmF5IG9mIG5ld3Mgc3Rvcmllc1xuICAgICAqIFNjb3BlICAgICAgOiBFeHRlcm5hbGx5IGFjY2Vzc2libGVcbiAgICAgKiBQYXJhbXMgaW4gIDogQXJyYXkgb2YgbmV3cyBzdG9yaWVzXG4gICAgICogUmV0dXJuICAgICA6IE5vbmVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgcHVibGljIHNldE5ld3MoIGRhdGE6IFtOZXdzU3RvcnldIClcbiAgICB7XG4gICAgXHR0aGlzLmxnJC5sb2coJy0+JyArICdzZXROZXdzKCkuLi5yZWNpZXZlZCBuZXdzIHN0b3JpZXMnKTtcbiAgICAgICAgdGhpcy5OZXdzU3RvcmllcyA9IGRhdGE7XG4gICAgICAgIHRoaXMuY3VycmVudFN0b3J5ID0gdGhpcy5OZXdzU3Rvcmllc1swXTtcbiAgICAgICAgdGhpcy5sZyQubG9nKCc8LSBzZXROZXdzKCk6IHNldCBjdXJyZW50IHN0b3J5IHRvOiAnICsgdGhpcy5jdXJyZW50U3RvcnkudGl0bGUpO1xuICAgIH1cblxufSIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXG4vLyBgbmcgYnVpbGQgLS0tcHJvZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZVxufTtcblxuLypcbiAqIEluIGRldmVsb3BtZW50IG1vZGUsIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXNcbiAqIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AgZm9yIGVhc2llciBkZWJ1Z2dpbmcsIHlvdSBjYW5cbiAqIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGUsIGJ1dCBwbGVhc2UgY29tbWVudCBpdCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlXG4gKiBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBwZXJmb3JtYW5jZSBpbXBhY3Qgd2hlbiB0aHJvdyBlcnJvclxuICovXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xuICB9XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==