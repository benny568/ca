(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/information/clubhistory/clubhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubHistoryComponent", function() { return ClubHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/common.service.ts");






class ClubHistoryComponent {
    constructor(lg$, common$) {
        this.lg$ = lg$;
        this.common$ = common$;
        this.componentName = 'ClubHistoryComponent';
        this.logdepth = 2;
        this.history = "Avenue United was founded on April 12th 1983 at a meeting in Mickey Kerin's Bar in the \
Lifford area of Ennis. The founding members were David Connellan, Anthony McMahon, Sean Downes and Gerard \
O'Grady who were all from the Marian Avenue and Steele's Terrace area of Ennis. These and other lads from \
'the road' had previously been involved with various soccer teams in Ennis, particularly Lifford F.C. But \
they decided the time was right to branch out and form their own club, based in Marian Avenue and the \
nearby fairgreen pitch.\n\n \
In the club's first season in the Clare & District Soccer League (Div.2 1983-84) the Avenue panel \
comprised exclusively of players from Marian Avenue & Steele's Terrace and included seven sets of \
brothers; Caseys, Mounseys, Purtills, McMahons, Connellans, Lyons and Guilfoyles. They captured the \
Div.2 League and Shield titles without losing a single match and in the subsequent season (1984-85) \
added the Div.1 League and Shield trophies - in the process creating a record of going 42 matches \
without defeat.\n\n \
With promotion to the Premier League in 1985-86 new 'outside' players were drafted in to strengthen the \
panel. During this 3rd season, Avenue reached the semi-final of the Munster Junior Cup, beaten by \
Ballincollig of Cork 2 - nil, at Turner's Cross.  They won their first Munster Junior (Clare Area) \
final against a previously dominant Newmarket Celtic and won the prestigious Haughey Cup also against \
Newmarket after a replay. This was to be the first of an historic three-in-a-row Haughey Cup wins. \
'The Avenue' had truly arrived at this stage but the best was yet to come. In 1987-88 the club won the \
only ever Clare 'Grand Slam' of Premier League and Shield, Haughey Cup, Munster & FAI Clare Area Finals \
. Such was their supremacy at the time that their Haughey Cup final win was by a score line of 6-nil! \
In the following years the club progressed, fielding successful Youths and 'B' teams, and later again, \
Schoolboys teams. In 1990 Avenue United became the first Clare Club ever to reach the FAI Junior Cup \
Final after a great campaign. In the final in Dalymount, they were beaten by a superb Cherry Orchard \
side, 2-nil.\n\n \
Throughout the following years Avenue United maintained a high standard, capturing the Clare Cup in its \
various guises, the Cheers Cup, Carling Cup, Prego Cup and the Clare Junior Cup. In addition, regular \
Premier League titles were captured since 1988. The club has also fielded a very successful 'B' team \
over the years. Up to 2007, no season had ever passed without some Junior silverware being won or \
shared.\n\n \
In 1996 the club expanded by gradually adding Schoolboys teams and have since fielded U/8 to U/17 teams \
plus Youths (U/18) with great success. The club also runs a successful 'Avenue Academy' for over one \
hundred 5-10 year olds who subsequently feed into the club's various schoolboy's teams. \
In 2008, the club celebrated their 25th Anniversary with a series of events including the publication of \
a book on the history of the club by local author Ollie Byrnes. In 2012 Avenue United purchased their \
own grounds at Roslevan, Ennis and have made that their home for the years ahead.";
        // imageUrl: string = "https://via.placeholder.com/20";
        this.imageUrl = "http://avenueunited.ie.mocha6004.mochahost.com/galleries/2019/JuniorA/JuniorA-2019.jpg";
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }
    ngOnInit() {
    }
}
ClubHistoryComponent.ɵfac = function ClubHistoryComponent_Factory(t) { return new (t || ClubHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ClubHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClubHistoryComponent, selectors: [["app-club-history"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])], decls: 3, vars: 2, consts: [["orientation", "vertical"], ["width", "100%", 3, "src"], [1, "history", 3, "text"]], template: function ClubHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "TextView", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx.history);
    } }, styles: [".history[_ngcontent-%COMP%] {\n    color: black;\n    background-color: white;\n    font-size: 18pc;\n    padding-bottom: 10 10 20 10; \n    \n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClubHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-club-history',
                templateUrl: './clubhistory.component.html',
                styleUrls: ['./clubhistory.component.css'],
                providers: [_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]]
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./app/information/downloads/downloads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/common.service.ts");






class DownloadsComponent {
    constructor(lg$, com$) {
        this.lg$ = lg$;
        this.com$ = com$;
        this.componentName = 'DownloadsComponent';
        this.logdepth = 2;
    }
    ngOnInit() {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.currentSeason = this.com$.calculateCurrentSeason();
    }
}
DownloadsComponent.ɵfac = function DownloadsComponent_Factory(t) { return new (t || DownloadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
DownloadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadsComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])], decls: 2, vars: 0, consts: [["text", "THIS IS THE DOWNLOADS PAGE !!!!!!!!!!"]], template: function DownloadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './downloads.component.html',
                styleUrls: ['./downloads.component.css'],
                providers: [_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]]
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./app/information/find-us/find-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindUsComponent", function() { return FindUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");


class FindUsComponent {
}
FindUsComponent.ɵfac = function FindUsComponent_Factory(t) { return new (t || FindUsComponent)(); };
FindUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FindUsComponent, selectors: [["ng-component"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-6"], [1, "panel"], [1, "panel-heading", "avenue-heading"], [1, "fa", "fa-bus"], [1, "fa", "fa-car", 2, "float", "right"], [1, "panel-body", "avenue-body"], ["width", "100%", "height", "450", "frameborder", "0", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1204.552290771011!2d-8.959630757672151!3d52\n                                          .85651802772733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6d3fd88608c3%3A0xe149b3\n                                          68df7aa3a1!2sInnovation+House%2C+Roslevan+Shopping+Centre%2C+Tulla+Rd%2C+Ennis%2C+Co.+Clare!5e0\n                                          !3m2!1sen!2sie!4v1437242650719", 2, "border", "0"]], template: function FindUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "How to find us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Take exit 13 off the M18 motorway (Limerick - Galway) for Ennis town. Take a left at the exit roundabout for Ennis town. At the next roundabout take a right. Take the first right 100m after the roundabout. Turn left into the Avenue United grounds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './find-us.component.html',
                styleUrls: ['./find-us.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/information/information-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationRoutingModule", function() { return InformationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _src_app_information_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/information/information.component.ts");
/* harmony import */ var _src_app_information_clubhistory_clubhistory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/information/clubhistory/clubhistory.component.ts");
/* harmony import */ var _src_app_information_links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/information/links/links.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/information/downloads/downloads.component.ts");
/* harmony import */ var _find_us_find_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/information/find-us/find-us.component.ts");
/* harmony import */ var _message_us_message_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/information/message-us/message-us.component.ts");










const routes = [
    { path: "", component: _src_app_information_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"] },
    { path: "clubhistory", component: _src_app_information_clubhistory_clubhistory_component__WEBPACK_IMPORTED_MODULE_3__["ClubHistoryComponent"] },
    { path: "links", component: _src_app_information_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"] },
    { path: "downloads", component: _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_5__["DownloadsComponent"] },
    { path: "find-us", component: _find_us_find_us_component__WEBPACK_IMPORTED_MODULE_6__["FindUsComponent"] },
    { path: "message-us", component: _message_us_message_us_component__WEBPACK_IMPORTED_MODULE_7__["MessageUsComponent"] }
];
class InformationRoutingModule {
}
InformationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InformationRoutingModule });
InformationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InformationRoutingModule_Factory(t) { return new (t || InformationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InformationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/logger.service.ts");
/* harmony import */ var _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/common.service.ts");








const _c0 = function () { return ["find-us"]; };
const _c1 = function () { return ["message-us"]; };
const _c2 = function () { return ["clubhistory"]; };
const _c3 = function () { return ["links"]; };
const _c4 = function () { return ["downloads"]; };
class InformationComponent {
    constructor(lg$, common$, router) {
        this.lg$ = lg$;
        this.common$ = common$;
        this.router = router;
        this.componentName = 'InformationComponent';
        this.logdepth = 2;
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["information"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], decls: 6, vars: 10, consts: [["text", "Find Us", "pageTransition", "slide", 1, "my-button", 3, "nsRouterLink"], ["text", "Message Us", "pageTransition", "slide", 1, "my-button", 3, "nsRouterLink"], ["text", "Club History", "pageTransition", "slide", 1, "my-button", 3, "nsRouterLink"], ["text", "Links", "pageTransition", "slide", 1, "my-button", 3, "nsRouterLink"], ["text", "Downloads", "pageTransition", "slide", 1, "my-button", 3, "nsRouterLink"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, styles: [".my-button[_ngcontent-%COMP%] {\n    android-elevation: 4;\n    background-color: lightseagreen;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: whitesmoke;\n    font-size: 18;\n    font-weight: bold;\n}\n\n.my-button[_ngcontent-%COMP%]:active {\n    android-elevation: 8;\n    background-color: whitesmoke;\n    border-color: darkolivegreen;\n    border-radius: 20;\n    border-width: 1;\n    color: lightseagreen;\n    font-size: 18;\n    font-weight: bold;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.css'],
                providers: [_src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]]
            }]
    }], function () { return [{ type: _src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/information/information.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_information_information_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/information/information-routing.module.ts");
/* harmony import */ var _src_app_information_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/information/information.component.ts");
/* harmony import */ var _src_app_information_clubhistory_clubhistory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/information/clubhistory/clubhistory.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/information/links/links.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/information/downloads/downloads.component.ts");
/* harmony import */ var _find_us_find_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/information/find-us/find-us.component.ts");
/* harmony import */ var _message_us_message_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/information/message-us/message-us.component.ts");









class InformationModule {
}
InformationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InformationModule });
InformationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InformationModule_Factory(t) { return new (t || InformationModule)(); }, imports: [[
            _src_app_information_information_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InformationModule, { declarations: [_src_app_information_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"],
        _src_app_information_clubhistory_clubhistory_component__WEBPACK_IMPORTED_MODULE_3__["ClubHistoryComponent"],
        _links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"],
        _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_5__["DownloadsComponent"],
        _find_us_find_us_component__WEBPACK_IMPORTED_MODULE_6__["FindUsComponent"],
        _message_us_message_us_component__WEBPACK_IMPORTED_MODULE_7__["MessageUsComponent"]], imports: [_src_app_information_information_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _src_app_information_information_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformationRoutingModule"]
                ],
                declarations: [
                    _src_app_information_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"],
                    _src_app_information_clubhistory_clubhistory_component__WEBPACK_IMPORTED_MODULE_3__["ClubHistoryComponent"],
                    _links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"],
                    _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_5__["DownloadsComponent"],
                    _find_us_find_us_component__WEBPACK_IMPORTED_MODULE_6__["FindUsComponent"],
                    _message_us_message_us_component__WEBPACK_IMPORTED_MODULE_7__["MessageUsComponent"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/information/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");


class LinksComponent {
    constructor() {
        this.cdslImage = "@src/assets/img/links/CDSL_Crest.jpg";
        this.csslImage = "../../assets/img/links/cssl.jpeg";
        this.faiImage = "../../assets/img/links/fai-crest.png";
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [["text", "THIS IS THE LINKS PAGE !!!!!!!!!!"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './links.component.html',
                styleUrls: ['./links.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/information/message-us/message-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageUsComponent", function() { return MessageUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm2015/core.js");


class MessageUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessageUsComponent.ɵfac = function MessageUsComponent_Factory(t) { return new (t || MessageUsComponent)(); };
MessageUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageUsComponent, selectors: [["app-message-us"]], decls: 2, vars: 0, consts: [["text", "THIS IS THE Message Us PAGE !!!!!!!!!!"]], template: function MessageUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-us',
                templateUrl: './message-us.component.html',
                styleUrls: ['./message-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vY2x1Ymhpc3RvcnkvY2x1Ymhpc3RvcnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pbmZvcm1hdGlvbi9jbHViaGlzdG9yeS9jbHViaGlzdG9yeS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZm9ybWF0aW9uL2Rvd25sb2Fkcy9kb3dubG9hZHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZm9ybWF0aW9uL2ZpbmQtdXMvZmluZC11cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZm9ybWF0aW9uL2ZpbmQtdXMvZmluZC11cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vbGlua3MvbGlua3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pbmZvcm1hdGlvbi9saW5rcy9saW5rcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vbWVzc2FnZS11cy9tZXNzYWdlLXVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5mb3JtYXRpb24vbWVzc2FnZS11cy9tZXNzYWdlLXVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpb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QiwyR0FBb0I7b0JBQ3BCLHFFQUFjO29CQUNkLGlGQUFrQjtvQkFDbEIsMEVBQWU7b0JBQ2YsbUZBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsOERBQWdCO2lCQUNuQjthQUNKOzs7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUEwQzs7QUFPbkMsTUFBTSxjQUFjO0lBTDNCO1FBTVMsY0FBUyxHQUFHLHNDQUFzQyxDQUFDO1FBQ25ELGNBQVMsR0FBRyxrQ0FBa0MsQ0FBQztRQUMvQyxhQUFRLEdBQUcsc0NBQXNDLENBQUM7S0FFMUQ7OzRFQUxZLGNBQWM7OEZBQWQsY0FBYztRQ1AzQiw4RUFDSTtRQUFBLHNFQUF3RDtRQUM1RCw0REFBYzs7NkZES0QsY0FBYztjQUwxQix1REFBUztlQUFDO2dCQUNULFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOzs7Ozs7Ozs7O0FFTEQ7QUFBQTtBQUFBO0FBQWtEOztBQU8zQyxNQUFNLGtCQUFrQjtJQUU3QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7b0ZBTFUsa0JBQWtCO2tHQUFsQixrQkFBa0I7UUNQL0IsOEVBQ0k7UUFBQSxzRUFBNkQ7UUFDakUsNERBQWM7OzZGREtELGtCQUFrQjtjQUw5Qix1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY2x1Yi1oaXN0b3J5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2x1Ymhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NsdWJoaXN0b3J5LmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnMgIDogWyBMb2dnZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2x1Ykhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbXBvbmVudE5hbWUgPSAnQ2x1Ykhpc3RvcnlDb21wb25lbnQnO1xuICAgIGxvZ2RlcHRoICAgICAgPSAyO1xuICAgIGhpc3Rvcnk6IHN0cmluZyA9IFwiQXZlbnVlIFVuaXRlZCB3YXMgZm91bmRlZCBvbiBBcHJpbCAxMnRoIDE5ODMgYXQgYSBtZWV0aW5nIGluIE1pY2tleSBLZXJpbidzIEJhciBpbiB0aGUgXFxcbkxpZmZvcmQgYXJlYSBvZiBFbm5pcy4gVGhlIGZvdW5kaW5nIG1lbWJlcnMgd2VyZSBEYXZpZCBDb25uZWxsYW4sIEFudGhvbnkgTWNNYWhvbiwgU2VhbiBEb3duZXMgYW5kIEdlcmFyZCBcXFxuTydHcmFkeSB3aG8gd2VyZSBhbGwgZnJvbSB0aGUgTWFyaWFuIEF2ZW51ZSBhbmQgU3RlZWxlJ3MgVGVycmFjZSBhcmVhIG9mIEVubmlzLiBUaGVzZSBhbmQgb3RoZXIgbGFkcyBmcm9tIFxcXG4ndGhlIHJvYWQnIGhhZCBwcmV2aW91c2x5IGJlZW4gaW52b2x2ZWQgd2l0aCB2YXJpb3VzIHNvY2NlciB0ZWFtcyBpbiBFbm5pcywgcGFydGljdWxhcmx5IExpZmZvcmQgRi5DLiBCdXQgXFxcbnRoZXkgZGVjaWRlZCB0aGUgdGltZSB3YXMgcmlnaHQgdG8gYnJhbmNoIG91dCBhbmQgZm9ybSB0aGVpciBvd24gY2x1YiwgYmFzZWQgaW4gTWFyaWFuIEF2ZW51ZSBhbmQgdGhlIFxcXG5uZWFyYnkgZmFpcmdyZWVuIHBpdGNoLlxcblxcbiBcXFxuSW4gdGhlIGNsdWIncyBmaXJzdCBzZWFzb24gaW4gdGhlIENsYXJlICYgRGlzdHJpY3QgU29jY2VyIExlYWd1ZSAoRGl2LjIgMTk4My04NCkgdGhlIEF2ZW51ZSBwYW5lbCBcXFxuY29tcHJpc2VkIGV4Y2x1c2l2ZWx5IG9mIHBsYXllcnMgZnJvbSBNYXJpYW4gQXZlbnVlICYgU3RlZWxlJ3MgVGVycmFjZSBhbmQgaW5jbHVkZWQgc2V2ZW4gc2V0cyBvZiBcXFxuYnJvdGhlcnM7IENhc2V5cywgTW91bnNleXMsIFB1cnRpbGxzLCBNY01haG9ucywgQ29ubmVsbGFucywgTHlvbnMgYW5kIEd1aWxmb3lsZXMuIFRoZXkgY2FwdHVyZWQgdGhlIFxcXG5EaXYuMiBMZWFndWUgYW5kIFNoaWVsZCB0aXRsZXMgd2l0aG91dCBsb3NpbmcgYSBzaW5nbGUgbWF0Y2ggYW5kIGluIHRoZSBzdWJzZXF1ZW50IHNlYXNvbiAoMTk4NC04NSkgXFxcbmFkZGVkIHRoZSBEaXYuMSBMZWFndWUgYW5kIFNoaWVsZCB0cm9waGllcyAtIGluIHRoZSBwcm9jZXNzIGNyZWF0aW5nIGEgcmVjb3JkIG9mIGdvaW5nIDQyIG1hdGNoZXMgXFxcbndpdGhvdXQgZGVmZWF0LlxcblxcbiBcXFxuV2l0aCBwcm9tb3Rpb24gdG8gdGhlIFByZW1pZXIgTGVhZ3VlIGluIDE5ODUtODYgbmV3ICdvdXRzaWRlJyBwbGF5ZXJzIHdlcmUgZHJhZnRlZCBpbiB0byBzdHJlbmd0aGVuIHRoZSBcXFxucGFuZWwuIER1cmluZyB0aGlzIDNyZCBzZWFzb24sIEF2ZW51ZSByZWFjaGVkIHRoZSBzZW1pLWZpbmFsIG9mIHRoZSBNdW5zdGVyIEp1bmlvciBDdXAsIGJlYXRlbiBieSBcXFxuQmFsbGluY29sbGlnIG9mIENvcmsgMiAtIG5pbCwgYXQgVHVybmVyJ3MgQ3Jvc3MuICBUaGV5IHdvbiB0aGVpciBmaXJzdCBNdW5zdGVyIEp1bmlvciAoQ2xhcmUgQXJlYSkgXFxcbmZpbmFsIGFnYWluc3QgYSBwcmV2aW91c2x5IGRvbWluYW50IE5ld21hcmtldCBDZWx0aWMgYW5kIHdvbiB0aGUgcHJlc3RpZ2lvdXMgSGF1Z2hleSBDdXAgYWxzbyBhZ2FpbnN0IFxcXG5OZXdtYXJrZXQgYWZ0ZXIgYSByZXBsYXkuIFRoaXMgd2FzIHRvIGJlIHRoZSBmaXJzdCBvZiBhbiBoaXN0b3JpYyB0aHJlZS1pbi1hLXJvdyBIYXVnaGV5IEN1cCB3aW5zLiBcXFxuJ1RoZSBBdmVudWUnIGhhZCB0cnVseSBhcnJpdmVkIGF0IHRoaXMgc3RhZ2UgYnV0IHRoZSBiZXN0IHdhcyB5ZXQgdG8gY29tZS4gSW4gMTk4Ny04OCB0aGUgY2x1YiB3b24gdGhlIFxcXG5vbmx5IGV2ZXIgQ2xhcmUgJ0dyYW5kIFNsYW0nIG9mIFByZW1pZXIgTGVhZ3VlIGFuZCBTaGllbGQsIEhhdWdoZXkgQ3VwLCBNdW5zdGVyICYgRkFJIENsYXJlIEFyZWEgRmluYWxzIFxcXG4uIFN1Y2ggd2FzIHRoZWlyIHN1cHJlbWFjeSBhdCB0aGUgdGltZSB0aGF0IHRoZWlyIEhhdWdoZXkgQ3VwIGZpbmFsIHdpbiB3YXMgYnkgYSBzY29yZSBsaW5lIG9mIDYtbmlsISBcXFxuSW4gdGhlIGZvbGxvd2luZyB5ZWFycyB0aGUgY2x1YiBwcm9ncmVzc2VkLCBmaWVsZGluZyBzdWNjZXNzZnVsIFlvdXRocyBhbmQgJ0InIHRlYW1zLCBhbmQgbGF0ZXIgYWdhaW4sIFxcXG5TY2hvb2xib3lzIHRlYW1zLiBJbiAxOTkwIEF2ZW51ZSBVbml0ZWQgYmVjYW1lIHRoZSBmaXJzdCBDbGFyZSBDbHViIGV2ZXIgdG8gcmVhY2ggdGhlIEZBSSBKdW5pb3IgQ3VwIFxcXG5GaW5hbCBhZnRlciBhIGdyZWF0IGNhbXBhaWduLiBJbiB0aGUgZmluYWwgaW4gRGFseW1vdW50LCB0aGV5IHdlcmUgYmVhdGVuIGJ5IGEgc3VwZXJiIENoZXJyeSBPcmNoYXJkIFxcXG5zaWRlLCAyLW5pbC5cXG5cXG4gXFxcblRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyB5ZWFycyBBdmVudWUgVW5pdGVkIG1haW50YWluZWQgYSBoaWdoIHN0YW5kYXJkLCBjYXB0dXJpbmcgdGhlIENsYXJlIEN1cCBpbiBpdHMgXFxcbnZhcmlvdXMgZ3Vpc2VzLCB0aGUgQ2hlZXJzIEN1cCwgQ2FybGluZyBDdXAsIFByZWdvIEN1cCBhbmQgdGhlIENsYXJlIEp1bmlvciBDdXAuIEluIGFkZGl0aW9uLCByZWd1bGFyIFxcXG5QcmVtaWVyIExlYWd1ZSB0aXRsZXMgd2VyZSBjYXB0dXJlZCBzaW5jZSAxOTg4LiBUaGUgY2x1YiBoYXMgYWxzbyBmaWVsZGVkIGEgdmVyeSBzdWNjZXNzZnVsICdCJyB0ZWFtIFxcXG5vdmVyIHRoZSB5ZWFycy4gVXAgdG8gMjAwNywgbm8gc2Vhc29uIGhhZCBldmVyIHBhc3NlZCB3aXRob3V0IHNvbWUgSnVuaW9yIHNpbHZlcndhcmUgYmVpbmcgd29uIG9yIFxcXG5zaGFyZWQuXFxuXFxuIFxcXG5JbiAxOTk2IHRoZSBjbHViIGV4cGFuZGVkIGJ5IGdyYWR1YWxseSBhZGRpbmcgU2Nob29sYm95cyB0ZWFtcyBhbmQgaGF2ZSBzaW5jZSBmaWVsZGVkIFUvOCB0byBVLzE3IHRlYW1zIFxcXG5wbHVzIFlvdXRocyAoVS8xOCkgd2l0aCBncmVhdCBzdWNjZXNzLiBUaGUgY2x1YiBhbHNvIHJ1bnMgYSBzdWNjZXNzZnVsICdBdmVudWUgQWNhZGVteScgZm9yIG92ZXIgb25lIFxcXG5odW5kcmVkIDUtMTAgeWVhciBvbGRzIHdobyBzdWJzZXF1ZW50bHkgZmVlZCBpbnRvIHRoZSBjbHViJ3MgdmFyaW91cyBzY2hvb2xib3kncyB0ZWFtcy4gXFxcbkluIDIwMDgsIHRoZSBjbHViIGNlbGVicmF0ZWQgdGhlaXIgMjV0aCBBbm5pdmVyc2FyeSB3aXRoIGEgc2VyaWVzIG9mIGV2ZW50cyBpbmNsdWRpbmcgdGhlIHB1YmxpY2F0aW9uIG9mIFxcXG5hIGJvb2sgb24gdGhlIGhpc3Rvcnkgb2YgdGhlIGNsdWIgYnkgbG9jYWwgYXV0aG9yIE9sbGllIEJ5cm5lcy4gSW4gMjAxMiBBdmVudWUgVW5pdGVkIHB1cmNoYXNlZCB0aGVpciBcXFxub3duIGdyb3VuZHMgYXQgUm9zbGV2YW4sIEVubmlzIGFuZCBoYXZlIG1hZGUgdGhhdCB0aGVpciBob21lIGZvciB0aGUgeWVhcnMgYWhlYWQuXCI7XG5cbiAgICAvLyBpbWFnZVVybDogc3RyaW5nID0gXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjBcIjtcbiAgICBpbWFnZVVybDogc3RyaW5nID0gXCJodHRwOi8vYXZlbnVldW5pdGVkLmllLm1vY2hhNjAwNC5tb2NoYWhvc3QuY29tL2dhbGxlcmllcy8yMDE5L0p1bmlvckEvSnVuaW9yQS0yMDE5LmpwZ1wiO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGxnJCAgICA6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgY29tbW9uJDogQ29tbW9uU2VydmljZSApIHtcbiAgICAgICAgdGhpcy5sZyQuc2V0TG9nSGRyKHRoaXMubG9nZGVwdGgsIHRoaXMuY29tcG9uZW50TmFtZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59IiwiPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICA8SW1hZ2Ugc3JjPVwie3tpbWFnZVVybH19XCIgd2lkdGg9XCIxMDAlXCI+PC9JbWFnZT5cbiAgICA8VGV4dFZpZXcgdGV4dD1cInt7aGlzdG9yeX19XCIgY2xhc3M9XCJoaXN0b3J5XCI+PC9UZXh0Vmlldz5cbjwvU3RhY2tMYXlvdXQ+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2Rvd25sb2Fkcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rvd25sb2Fkcy5jb21wb25lbnQuY3NzJyBdLFxuICBwcm92aWRlcnMgIDogWyBMb2dnZXJTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEb3dubG9hZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb21wb25lbnROYW1lID0gJ0Rvd25sb2Fkc0NvbXBvbmVudCc7XG4gIGxvZ2RlcHRoICAgICAgPSAyO1xuICBjdXJyZW50U2Vhc29uOiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoICBwcml2YXRlIGxnJDogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbSQ6IENvbW1vblNlcnZpY2UgKSB7IH1cblxuICBuZ09uSW5pdCgpXG4gIHtcbiAgICB0aGlzLmxnJC5zZXRMb2dIZHIodGhpcy5sb2dkZXB0aCwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgICB0aGlzLmN1cnJlbnRTZWFzb24gPSB0aGlzLmNvbSQuY2FsY3VsYXRlQ3VycmVudFNlYXNvbigpO1xuICB9XG5cbn0iLCI8U3RhY2tMYXlvdXQ+XG4gICAgPExhYmVsIHRleHQ9XCJUSElTIElTIFRIRSBET1dOTE9BRFMgUEFHRSAhISEhISEhISEhXCI+PC9MYWJlbD5cbjwvU3RhY2tMYXlvdXQ+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZmluZC11cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbmQtdXMuY29tcG9uZW50LmNzcycgXVxufSlcblxuZXhwb3J0IGNsYXNzIEZpbmRVc0NvbXBvbmVudCB7XG5cbn0iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBhdmVudWUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1idXNcIj48L2k+PGkgY2xhc3M9XCJmYSBmYS1jYXJcIiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgPGgzPkhvdyB0byBmaW5kIHVzOjwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgYXZlbnVlLWJvZHlcIj5cbiAgICAgICAgICAgIFRha2UgZXhpdCAxMyBvZmYgdGhlIE0xOCBtb3RvcndheSAoTGltZXJpY2sgLSBHYWx3YXkpIGZvciBFbm5pcyB0b3duLlxuICAgICAgICAgICAgVGFrZSBhIGxlZnQgYXQgdGhlIGV4aXQgcm91bmRhYm91dCBmb3IgRW5uaXMgdG93bi5cbiAgICAgICAgICAgIEF0IHRoZSBuZXh0IHJvdW5kYWJvdXQgdGFrZSBhIHJpZ2h0LiBUYWtlIHRoZSBmaXJzdCByaWdodCAxMDBtIGFmdGVyIHRoZSByb3VuZGFib3V0LlxuICAgICAgICAgICAgVHVybiBsZWZ0IGludG8gdGhlIEF2ZW51ZSBVbml0ZWQgZ3JvdW5kcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgPC9kaXY+IDwhLS0gZW5kIGNvbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjQ1MFwiXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJib3JkZXI6MFwiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTIwNC41NTIyOTA3NzEwMTEhMmQtOC45NTk2MzA3NTc2NzIxNTEhM2Q1MlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLjg1NjUxODAyNzcyNzMzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0ODViNmQzZmQ4ODYwOGMzJTNBMHhlMTQ5YjNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY4ZGY3YWEzYTEhMnNJbm5vdmF0aW9uK0hvdXNlJTJDK1Jvc2xldmFuK1Nob3BwaW5nK0NlbnRyZSUyQytUdWxsYStSZCUyQytFbm5pcyUyQytDby4rQ2xhcmUhNWUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhM20yITFzZW4hMnNpZSE0djE0MzcyNDI2NTA3MTlcIj5cbiAgICAgICAgPC9pZnJhbWU+XG4gICAgICA8L2Rpdj4gPCEtLSBlbmQgY29sIC0tPlxuICAgIDwvZGl2PiA8IS0tIGVuZCByb3cgLS0+XG4gIDwvZGl2PiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDbHViSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCJAc3JjL2FwcC9pbmZvcm1hdGlvbi9jbHViaGlzdG9yeS9jbHViaGlzdG9yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIkBzcmMvYXBwL2luZm9ybWF0aW9uL2xpbmtzL2xpbmtzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG93bmxvYWRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbmRVc0NvbXBvbmVudCB9IGZyb20gXCIuL2ZpbmQtdXMvZmluZC11cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VVc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UtdXMvbWVzc2FnZS11cy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEluZm9ybWF0aW9uQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNsdWJoaXN0b3J5XCIsIGNvbXBvbmVudDogQ2x1Ykhpc3RvcnlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibGlua3NcIiwgY29tcG9uZW50OiBMaW5rc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJkb3dubG9hZHNcIiwgY29tcG9uZW50OiBEb3dubG9hZHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZmluZC11c1wiLCBjb21wb25lbnQ6IEZpbmRVc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJtZXNzYWdlLXVzXCIsIGNvbXBvbmVudDogTWVzc2FnZVVzQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9ybWF0aW9uUm91dGluZ01vZHVsZSB7IH0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2luZm9ybWF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyAnLi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzJyBdLFxuICAgIHByb3ZpZGVycyAgOiBbIExvZ2dlclNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIEluZm9ybWF0aW9uQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnROYW1lID0gJ0luZm9ybWF0aW9uQ29tcG9uZW50JztcbiAgICBsb2dkZXB0aCAgICAgID0gMjtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGxnJDogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21tb24kOiBDb21tb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIgKSB7XG4gICAgICAgIHRoaXMubGckLnNldExvZ0hkcih0aGlzLmxvZ2RlcHRoLCB0aGlzLmNvbXBvbmVudE5hbWUpO1xuICAgIH1cbn0iLCJcbjxTdGFja0xheW91dD5cbiAgICA8QnV0dG9uIHRleHQ9XCJGaW5kIFVzXCIgY2xhc3M9XCJteS1idXR0b25cIiBbbnNSb3V0ZXJMaW5rXT1cIlsnZmluZC11cyddXCIgcGFnZVRyYW5zaXRpb249XCJzbGlkZVwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gdGV4dD1cIk1lc3NhZ2UgVXNcIiBjbGFzcz1cIm15LWJ1dHRvblwiIFtuc1JvdXRlckxpbmtdPVwiWydtZXNzYWdlLXVzJ11cIiBwYWdlVHJhbnNpdGlvbj1cInNsaWRlXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiQ2x1YiBIaXN0b3J5XCIgY2xhc3M9XCJteS1idXR0b25cIiBbbnNSb3V0ZXJMaW5rXT1cIlsnY2x1Ymhpc3RvcnknXVwiIHBhZ2VUcmFuc2l0aW9uPVwic2xpZGVcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIHRleHQ9XCJMaW5rc1wiIGNsYXNzPVwibXktYnV0dG9uXCIgW25zUm91dGVyTGlua109XCJbJ2xpbmtzJ11cIiBwYWdlVHJhbnNpdGlvbj1cInNsaWRlXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiRG93bmxvYWRzXCIgY2xhc3M9XCJteS1idXR0b25cIiBbbnNSb3V0ZXJMaW5rXT1cIlsnZG93bmxvYWRzJ11cIiBwYWdlVHJhbnNpdGlvbj1cInNsaWRlXCI+PC9CdXR0b24+XG48L1N0YWNrTGF5b3V0PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJbmZvcm1hdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiQHNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEluZm9ybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIkBzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2x1Ykhpc3RvcnlDb21wb25lbnQgfSBmcm9tIFwiQHNyYy9hcHAvaW5mb3JtYXRpb24vY2x1Ymhpc3RvcnkvY2x1Ymhpc3RvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2xpbmtzL2xpbmtzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG93bmxvYWRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbmRVc0NvbXBvbmVudCB9IGZyb20gXCIuL2ZpbmQtdXMvZmluZC11cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VVc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UtdXMvbWVzc2FnZS11cy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEluZm9ybWF0aW9uUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEluZm9ybWF0aW9uQ29tcG9uZW50LFxuICAgICAgICBDbHViSGlzdG9yeUNvbXBvbmVudCxcbiAgICAgICAgTGlua3NDb21wb25lbnQsXG4gICAgICAgIERvd25sb2Fkc0NvbXBvbmVudCxcbiAgICAgICAgRmluZFVzQ29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlVXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Nb2R1bGUgeyB9IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vbGlua3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5rcy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaW5rc0NvbXBvbmVudCB7XG4gIHB1YmxpYyBjZHNsSW1hZ2UgPSBcIkBzcmMvYXNzZXRzL2ltZy9saW5rcy9DRFNMX0NyZXN0LmpwZ1wiO1xuICBwdWJsaWMgY3NzbEltYWdlID0gXCIuLi8uLi9hc3NldHMvaW1nL2xpbmtzL2Nzc2wuanBlZ1wiO1xuICBwdWJsaWMgZmFpSW1hZ2UgPSBcIi4uLy4uL2Fzc2V0cy9pbWcvbGlua3MvZmFpLWNyZXN0LnBuZ1wiO1xuXG59IiwiPFN0YWNrTGF5b3V0PlxuICAgIDxMYWJlbCB0ZXh0PVwiVEhJUyBJUyBUSEUgTElOS1MgUEFHRSAhISEhISEhISEhXCI+PC9MYWJlbD5cbjwvU3RhY2tMYXlvdXQ+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtdXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS11cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtdXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VVc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59IiwiPFN0YWNrTGF5b3V0PlxuICAgIDxMYWJlbCB0ZXh0PVwiVEhJUyBJUyBUSEUgTWVzc2FnZSBVcyBQQUdFICEhISEhISEhISFcIj48L0xhYmVsPlxuPC9TdGFja0xheW91dD4iXSwic291cmNlUm9vdCI6IiJ9