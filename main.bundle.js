webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/*!\n * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/)\n */.flag{display:inline-block;width:32px;height:32px;background:url(" + __webpack_require__(496) + ") no-repeat}.flag.flag-us{background-position:-32px 0}.flag.flag-fr{background-position:0 0}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_cards_against_humanity_cards_against_humanity_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(223),
        styles: [__webpack_require__(215)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1_app_cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_cards_cards_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_cards_against_humanity_cards_against_humanity_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_cards_question_card_question_card_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_cards_answer_card_answer_card_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_cards_holder_card_holder_card_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_board_board_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Services

// Components







var appRoutes = [
    // Root
    { path: "", redirectTo: "/cah", pathMatch: "full" },
    // Pages
    { path: "cah", component: __WEBPACK_IMPORTED_MODULE_7_app_cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */] },
    {
        path: "board/:lang",
        component: __WEBPACK_IMPORTED_MODULE_11_app_board_board_component__["a" /* BoardComponent */]
    },
    // Not found
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_cards_question_card_question_card_component__["a" /* QuestionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_cards_answer_card_answer_card_component__["a" /* AnswerCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_cards_holder_card_holder_card_component__["a" /* HolderCardComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5_app_cards_cards_service__["a" /* CardsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(229),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Board */\r\n.board-back {\r\n    \r\n    background: url(\"/./assets/board-noise.jpg\");\r\n    background-color: rgba(0, 0, 0, 0.00);\r\n    \r\n    z-index: 99; /* the highest */\r\n}\r\n\r\n.board {\r\n    height: 100%;\r\n    width: 100%;\r\n    min-height: 40em;\r\n    border: 20px solid rgb(65, 34, 34);\r\n    \r\n    background-color: rgba(18, 98, 18, 0.90);\r\n\r\n    box-shadow: inset 0 0 4em black;\r\n\r\n    padding: 1em;\r\n\r\n    z-index: 98;\r\n}\r\n\r\n.card {\r\n    z-index: 90;\r\n}\r\n\r\n.answer:hover {\r\n    /* Bring to front when hovered */\r\n    position: relative;\r\n    z-index: 89;\r\n\r\n}\r\n\r\n/* Row margin */\r\n.row-margin {\r\n    margin-top: 5em;\r\n}\r\n\r\n.question-preview {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "html {\r\n    background: url(\"/./assets/board-noise.jpg\");\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    background-color: rgba(18, 98, 18, 0.90);\r\n    height: 100%;\r\n}\r\n\r\n\r\n.full-height {\r\n    height: 100%;\r\n    margin-bottom: 0;\r\n    border-radius: 0px;\r\n    box-shadow: 0 0 4em black;\r\n\r\n    background-color: whitesmoke;\r\n    padding: 5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Answer card */\r\n.card-answer {\r\n    background-color: black;\r\n\r\n    box-shadow: 0em 0em 1em black;\r\n}\r\n\r\n.card-answer .card-text {\r\n    background-color: ivory;\r\n    color: black;\r\n}\r\n\r\n.card-answer:hover {\r\n    box-shadow: 0 0 4em white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Holder card */\r\n.card-holder {\r\n    background-color: rgba(255, 255, 240, 0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<!-- The main router outlet -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"board-back\">\n\n  <div class=\"board\">\n\n    <!-- Information -->\n    <div class=\"pull-right\">\n      <button (click)=\"newGame()\" class=\"btn btn-block btn-primary\">New Game</button>\n      <button (click)=\"newDeal()\" class=\"btn btn-block btn-success\">New Deal</button>\n    </div>\n\n    <!-- Cards -->\n    <div *ngIf=\"currentQuestion\" class=\"container-fluid\">\n\n      <!-- Question -->\n      <div class=\"row\">\n        <app-question-card [card]=\"currentQuestion\" class=\"col-sm-3\">\n        </app-question-card>\n\n        <div class=\"question-preview col-sm-9\">\n          {{getPreview()}}\n        </div>\n      </div>\n\n      <div class=\"row row-margin\">\n        <div *ngFor=\"let i of getBlanksAnswersArray()\">\n          <app-holder-card [answer]=\"choosenAnswers[i]\" (click)=\"onAnswerDismiss(i)\" class=\"col-sm-3\">\n          </app-holder-card>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"currentAnswers\" class=\"row row-margin\">\n        <div *ngFor=\"let a of currentAnswers\">\n          <app-answer-card [card]=\"a\" (click)=\"onAnswerClick(a)\" class=\"answer col-sm-1\">\n          </app-answer-card>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div class=\"container full-height\">\r\n    \r\n        <h1>\r\n            Cards\r\n        </h1>\r\n        <h2>A card game</h2>\r\n\r\n        <hr>\r\n\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"username\"> Username: </label>\r\n                <input class=\"form-control success\" name=\"username\" required [(ngModel)]=\"username\" placeholder=\"username\" type=\"text\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Language: </label>\r\n                <div *ngIf=\"languages\">\r\n                    <select class=\"form-control\" #select (change)=\"langChanged(select.value)\">\r\n                    <option *ngFor=\"let lang of languages\" [value]=\"lang.value\">\r\n                        {{lang.text}}\r\n                    </option>\r\n                </select>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\">Let's Go!</button>\r\n        </form>\r\n\r\n    \r\n\r\n</div>"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-answer\">\n  <div class=\"card-text\">\n    {{card.text}}\n  </div>\n</div>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!answer\" class=\"card card-holder\">\n\n    <div class=\"card-text\">\n\n    </div>\n\n</div>\n<div *ngIf=\"answer\">\n    <app-answer-card [card]=\"answer\"></app-answer-card>\n</div>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-question\">\n  <div class=\"card-text\">\n    {{card.text}}\n\n    <div class=\"card-pick\">\n      {{card.pick}}\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Page not found.\r\n</p>\r\n"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerCard; });
/**
 * This class represents an answer card.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnswerCard = (function (_super) {
    __extends(AnswerCard, _super);
    function AnswerCard(text) {
        return _super.call(this, text) || this;
    }
    return AnswerCard;
}(__WEBPACK_IMPORTED_MODULE_0__card__["a" /* Card */]));

//# sourceMappingURL=answer-card.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAEtklEQVR4nO2ZX4gVVRzHP2fmXnc1795NEpcSgh7KkupZSSTxwUDBRbCHRcFdE3pIXVE3X8QyXXTFJEpwV2LTIAs2UFnxoYiwp6A/UJH4kEpokLJ/7r+5c+fMOT3M3L2z6/XO3Ntw74N+X37nzD3nfH/zne/5M3OF1ppHGUarE2g1HgvQ6gRaDQGYQJsfmwkXsP1yy/gTQMfatScnTDPcDFev7oo08s0NW8IbGYLnLp1fBBCVvxo+m/dzQ/0wDLouji5KAGnDMFiz5sXGBqqCha+vDG1T/OMGQNrLxWB09C3OnfuBrVtfqysu2R/toVSFGE0ngDYpFbbtMDVVQOPNiyA0IOrYLZ1/7/sd/U5CIPyyBhKdHeiSDZ71kVIxMvId27at5vjQOHv632BoaJz+YDw+Tv+eSv340DgCmHj3g9mJMucGgjfk/250duD8eQOgLQGglMKyShSLTvS7rAFdtB+8Fiiroo2SslJXit7e1Rw9eomBgQ0MDkaLx45dBvdBrlAUi+B4/AkAx1FYloNlxSSAVaz9ezIJpYoAjqM4ceIK+/at59Chrzl4sDtSBFj0yeHGE71wxhNASpdcziafLzU+WABuvlC7gWmgAw6Q0mX37nXs3/8lg4ObGRiIFg8c+Ip7W96pOz8jtRB55x+AsgCKbNYin/fsVG0dqAcqTAAh0HZFbCkVAwMXOHJkMzt3nuPUqS2RIoBy8vUnKECXPP4ZB2QyxdgcoEME0FrPEcDl8OE36esbYXh4O319ZyPFHTvOsuT7TxtPVHxRXgNcslm7yhpQ9kJ9nnBzZQGq99euQpUqAjiOS2/vMMMj2+npOc3n59+mp+c050MiaO6u3ADCH1vrSjlYn3NdtLeD7a1TM4tgJlPEtssClJMul+uDKjzEAX4i2pVQqojtOIozZ/ro3vghY2O72Nh9irGxnXR3e/Xumfrs65s2fYRuL0RPsfwcpIMO7gJSSrJZhePIGr2jQ+Vrz0tRKoFZOflKKVm//iQXL+5m3bohrlzZGykCPHP928YTFaLigFyugOO4jQ8WgDsxVZs3mcRMp2bqjqO4fLmfFSve49q1g5HjqlXvc/upl+pPMJnE7PD4BfBCV9fe67lcCSlrC2BZH0ca//cnn/dL1Y+PIpFApJ5g+c2flgFE5a+G6/O/qbsPPv+zf/24zHeARGuNUvF8HdJKhTTQ6IDb7tw5hmE0981cKQWm6U0BV7poTWwCEEEA5VR2gVtPv0pCuuhSPCfRMIh5SWQyAZR3ASkBk9i+Dyo1eyOZC61RbsUByvUcqFWdU2AuR/Clpya/iXJn7QIa04zPAVrrh5MDQghkYMdZ+vcvtLe3x8IdFZZlwYIF/hRwJaaZiM8BEcYJOuDW4uXMb2tDF6x4+EMgFsyn4L2Oe98ElVII8X9O//VmILxFyIer1OwTXFP4vYeUAM+yzeSfK8DSu7+STqebmABMT09DZ2dQAEEqFc88NFILQ9uowDS53fUKnR2pGq3jx2QmC3gOcEGTzU6Hd5qcjDT4VCYT2sa/fRfASbnc11ORxo4LOgUUcQWwBHgZWNzUDOAe8Jtfbhm/wPswmfJjM2EDWb/cMn7x+M/RRxyPvAD/ASV+uFB9PhhdAAAAAElFTkSuQmCC"

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_card__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerCardComponent = (function () {
    function AnswerCardComponent() {
    }
    AnswerCardComponent.prototype.ngOnInit = function () {
    };
    return AnswerCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__answer_card__["a" /* AnswerCard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__answer_card__["a" /* AnswerCard */]) === "function" && _a || Object)
], AnswerCardComponent.prototype, "card", void 0);
AnswerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-answer-card',
        template: __webpack_require__(226),
        styles: [__webpack_require__(78), __webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], AnswerCardComponent);

var _a;
//# sourceMappingURL=answer-card.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_card_question_card__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_card_answer_card__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsService; });
/**
 * This service helps providing cards.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardsService = (function () {
    function CardsService(http) {
        this.http = http;
        // Urls for different languages
        this.url_en = '../assets/cards_en.json';
        this.url_fr = '../assets/cards_fr.json';
    }
    // Choose the url according to the current lang
    CardsService.prototype.chooseUrl = function (lang) {
        if (lang === void 0) { lang = "fr"; }
        var ret;
        switch (lang) {
            case "fr":
                ret = this.url_fr;
                break;
            case "en":
                ret = this.url_en;
                break;
            default:
                ret = this.url_fr;
        }
        return ret;
    };
    CardsService.prototype.setCurrentLang = function (lang) {
        this.currentLang = lang;
    };
    CardsService.prototype.isLangChanged = function (lang) {
        return this.currentLang != lang;
    };
    CardsService.prototype.getQuestionCards = function (lang) {
        var url = this.chooseUrl(lang);
        if (!this.dataQuestion || this.isLangChanged(lang)) {
            this.dataQuestion = this.http.get(url)
                .map(function (res) {
                return res.json().blackCards.map(function (elt) {
                    return new __WEBPACK_IMPORTED_MODULE_3__question_card_question_card__["a" /* QuestionCard */](elt.text, elt.pick);
                });
            });
        }
        return this.dataQuestion;
    };
    CardsService.prototype.getAnswserCards = function (lang) {
        var url = this.chooseUrl(lang);
        if (!this.dataAnswer || this.isLangChanged(lang)) {
            this.dataAnswer = this.http.get(url)
                .map(function (res) {
                return res.json().whiteCards.map(function (elt) {
                    return new __WEBPACK_IMPORTED_MODULE_4__answer_card_answer_card__["a" /* AnswerCard */](elt);
                });
            });
        }
        return this.dataAnswer;
    };
    CardsService.prototype.getAvailableLanguages = function () {
        return [
            {
                text: "Français",
                value: "fr"
            }, {
                text: "English",
                value: "en"
            }
        ];
    };
    return CardsService;
}());
CardsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CardsService);

var _a;
//# sourceMappingURL=cards.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCard; });
/**
 * This class represents a question. This is basically some text with blanks or
 * just requiring an answer.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var QuestionCard = (function (_super) {
    __extends(QuestionCard, _super);
    function QuestionCard(text, pick) {
        var _this = _super.call(this, text) || this;
        _this.pick = pick;
        return _this;
    }
    QuestionCard.prototype.getPick = function () {
        return this.pick;
    };
    /**
     * Return whether we answer a wuestion or fill blanks.
     */
    QuestionCard.prototype.isSimple = function () {
        return -1 == this.text.indexOf(QuestionCard.BLANK_CHAR);
    };
    /**
     * Generate a preview of the answer in the question.
     * @param answers The list containg the answers for each blanks or null
     * if there is no answer for a blank
     */
    QuestionCard.prototype.getPreview = function (answers) {
        var ret = "";
        if (!this.isSimple()) {
            var splitted = this.text.split(QuestionCard.BLANK_CHAR);
            ret += splitted[0];
            for (var i = 0; i < this.pick; ++i) {
                if (null != answers[i]) {
                    ret += answers[i].getText().replace(".", "");
                }
                else {
                    ret += QuestionCard.BLANK_CHAR;
                }
                ret += splitted[i + 1];
            }
        }
        else {
            ret = this.text;
            if (null != answers[0]) {
                ret += "\n" + answers[0].getText();
            }
        }
        return ret;
    };
    return QuestionCard;
}(__WEBPACK_IMPORTED_MODULE_0__card__["a" /* Card */]));

QuestionCard.BLANK_CHAR = '_';
//# sourceMappingURL=question-card.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Global cards style */\r\n.card {\r\n    display: table;\r\n    position: relative;\r\n    width: 12em;\r\n    height: 16em;\r\n    padding: 0.5em;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\r\n    border: 1px solid black;\r\n    border-radius: 2em;\r\n\r\n    background-color: ivory;\r\n\r\n}\r\n\r\n.card-text {\r\n    display: table-cell;\r\n    width: inherit;\r\n    height: inherit;\r\n    margin: 0.5em;\r\n    padding: 0.5em;\r\n    \r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n    border: 1px solid black;\r\n    border-radius: 1.5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "/* Question card */\r\n.card-question {\r\n    background: ivory;\r\n\r\n    box-shadow: 0em 0em 1em black;\r\n}\r\n\r\n.card-question .card-text {\r\n    background-color: black;\r\n    color: ivory;\r\n}\r\n\r\n.card-text .card-pick {\r\n    /*padding: 0.5em;*/\r\n    /*padding-bottom: 0.5em;*/\r\n\r\n    min-width: 2.5em;\r\n    height: 2.5em;\r\n\r\n    color: ivory;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n\r\n    border-top-left-radius: 20px;\r\n    border-left: 1px solid ivory;\r\n    border-top: 1px solid ivory;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cards_question_card_question_card__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_cards_answer_card_answer_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_cards_question_card_question_card_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_cards_answer_card_answer_card_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_cards_holder_card_holder_card_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services

// Classes


// Components



var BoardComponent = (function () {
    function BoardComponent(cardsService, route, location) {
        this.cardsService = cardsService;
        this.route = route;
        this.location = location;
        // Init lists to null so nothing is displayed
        this.currentQuestion = null;
        this.currentAnswers = null;
        this.choosenAnswers = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Recover the URL parameters
        this.route.params.subscribe(function (params) {
            if (null != params) {
                _this.lang = params.lang;
            }
            _this.newGame();
        });
    };
    /**
     * Will fetch the lists in a promise.
     * @return a promise that is resolved when lists are reset.
     */
    BoardComponent.prototype.initCardsLists = function () {
        var _this = this;
        // Questions promise, resolved when the result is set
        var promiseQuestions = new Promise(function (resolve) {
            _this.cardsService.getQuestionCards(_this.lang).subscribe(function (res) {
                _this.questions = res;
                console.log("Questions set");
                resolve(true);
            });
        });
        // Answers promise, resolved when the result is set
        var promiseAnswers = new Promise(function (resolve) {
            _this.cardsService.getAnswserCards(_this.lang).subscribe(function (res) {
                _this.answers = res;
                console.log("Answers set");
                resolve(true);
            });
        });
        // This promise is resolved after both are resolved
        return Promise.all([
            promiseQuestions,
            promiseAnswers
        ]);
    };
    BoardComponent.prototype.randomQuestion = function () {
        var ret = new __WEBPACK_IMPORTED_MODULE_4_app_cards_question_card_question_card__["a" /* QuestionCard */]("No more questions", 0);
        if (0 != this.questions.length) {
            // Random number to pick in tab
            var randNumber = Math.random() * this.questions.length;
            // Get the random question and delete it from the list
            ret = this.questions.splice(randNumber, 1)[0];
        }
        return ret;
    };
    BoardComponent.prototype.randomAnswers = function (howMany) {
        if (howMany === void 0) { howMany = 5; }
        var ret = new Array(howMany);
        if (howMany < this.answers.length) {
            for (var i = 0; i < howMany; ++i) {
                // Random number to pick in tab
                var randNumber = Math.random() * this.answers.length;
                ret[i] = this.answers.splice(randNumber, 1)[0];
            }
        }
        else {
            for (var i = 0; i < howMany; ++i) {
                ret[i] = new __WEBPACK_IMPORTED_MODULE_5_app_cards_answer_card_answer_card__["a" /* AnswerCard */]("No more answers");
            }
        }
        return ret;
    };
    BoardComponent.prototype.newDeal = function () {
        console.log("New deal");
        this.currentQuestion = this.randomQuestion();
        this.currentAnswers = this.randomAnswers();
        this.choosenAnswers = new Array(this.currentQuestion.getPick());
        // console.log("Remaining questions " + this.questions.length);
        // console.log("Remaining answers " + this.answers.length);
    };
    BoardComponent.prototype.newGame = function () {
        var _this = this;
        console.log("New game");
        this.initCardsLists()
            .then(function (res) {
            _this.cardsService.setCurrentLang(_this.lang);
            _this.newDeal();
        });
    };
    /**
     * Generate an array of index for the blanks cards.
     */
    BoardComponent.prototype.getBlanksAnswersArray = function () {
        var arr = [];
        for (var i = 0; i < this.currentQuestion.getPick(); ++i) {
            arr.push(i);
        }
        return arr;
    };
    /**
     * When an answer is selected from the hand. It places them in order or
     * "push" them to the next index
     * @param a The answer clicked
     */
    BoardComponent.prototype.onAnswerClick = function (answer) {
        // Trying to add only of the answer is not already here
        if (!this.choosenAnswers.find(function (el, idx, arr) {
            return (null != el && el.getText() == answer.getText());
        })) {
            var index = 0;
            // Search the greatest index we can push answer
            while (this.choosenAnswers[index] != null) {
                ++index;
            }
            // If we are out of the array, we insert at first
            if (index >= this.choosenAnswers.length) {
                index = 0;
            }
            // Shift all existing cards until there is another blank
            var i = 0;
            var tmpAnswers = this.choosenAnswers.slice(0);
            while (index + i < this.choosenAnswers.length - 1 &&
                this.choosenAnswers[index + i] != null) {
                this.choosenAnswers[index + i + 1] = tmpAnswers[index + i];
                ++i;
            }
            // Update the view
            this.choosenAnswers[index] = answer;
        }
    };
    /**
     * When clicking an answer in the preselected
     * @param index The index of the answer card to dismiss
     */
    BoardComponent.prototype.onAnswerDismiss = function (index) {
        this.choosenAnswers[index] = null;
    };
    /**
     * Get the question preview using the selected answers
     */
    BoardComponent.prototype.getPreview = function () {
        return this.currentQuestion.getPreview(this.choosenAnswers);
    };
    return BoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], BoardComponent.prototype, "lang", void 0);
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__(224),
        styles: [__webpack_require__(216), __webpack_require__(79), __webpack_require__(108)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6_app_cards_question_card_question_card_component__["a" /* QuestionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_cards_answer_card_answer_card_component__["a" /* AnswerCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_cards_holder_card_holder_card_component__["a" /* HolderCardComponent */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */]) === "function" && _c || Object])
], BoardComponent);

var _a, _b, _c;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_board_board_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsAgainstHumanityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Components

// Services

var CardsAgainstHumanityComponent = (function () {
    function CardsAgainstHumanityComponent(cardsService, router) {
        this.cardsService = cardsService;
        this.router = router;
        this.username = "";
        // TODO: create a Lang class to format it properly
        this.languages = this.cardsService.getAvailableLanguages();
        this.language = this.languages[0].value;
    }
    CardsAgainstHumanityComponent.prototype.onSubmit = function () {
        // Checking that the username is provided
        if ("" != this.username) {
            console.log("Submited\n" + this.username + "\n" + this.language);
            // Navigate to board using the given information
            this.router.navigate(['/board', this.language]);
        }
    };
    CardsAgainstHumanityComponent.prototype.langChanged = function (value) {
        console.log("langChanged " + value);
        this.language = value;
    };
    return CardsAgainstHumanityComponent;
}());
CardsAgainstHumanityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-cards-against-humanity',
        template: __webpack_require__(225),
        styles: [__webpack_require__(217), __webpack_require__(79), __webpack_require__(108)],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2_app_board_board_component__["a" /* BoardComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */]
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewEncapsulation */].None // Allows to change elements from other view (styling)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_cards_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CardsAgainstHumanityComponent);

var _a, _b;
//# sourceMappingURL=cards-against-humanity.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/**
 * This structure is the base for every card in the game.
 */
var Card = (function () {
    function Card(text) {
        this.text = text;
    }
    Card.prototype.getText = function () {
        return this.text;
    };
    return Card;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_card_answer_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_card_answer_card_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolderCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolderCardComponent = (function () {
    function HolderCardComponent() {
    }
    return HolderCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__answer_card_answer_card__["a" /* AnswerCard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__answer_card_answer_card__["a" /* AnswerCard */]) === "function" && _a || Object)
], HolderCardComponent.prototype, "answer", void 0);
HolderCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-holder-card',
        template: __webpack_require__(227),
        styles: [__webpack_require__(78), __webpack_require__(219)],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__answer_card_answer_card_component__["a" /* AnswerCardComponent */]
        ]
    }),
    __metadata("design:paramtypes", [])
], HolderCardComponent);

var _a;
//# sourceMappingURL=holder-card.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_card__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionCardComponent = (function () {
    function QuestionCardComponent() {
    }
    QuestionCardComponent.prototype.ngOnInit = function () {
    };
    return QuestionCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_card__["a" /* QuestionCard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_card__["a" /* QuestionCard */]) === "function" && _a || Object)
], QuestionCardComponent.prototype, "card", void 0);
QuestionCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-question-card',
        template: __webpack_require__(228),
        styles: [__webpack_require__(78), __webpack_require__(79)]
    }),
    __metadata("design:paramtypes", [])
], QuestionCardComponent);

var _a;
//# sourceMappingURL=question-card.component.js.map

/***/ })

},[499]);
//# sourceMappingURL=main.bundle.js.map