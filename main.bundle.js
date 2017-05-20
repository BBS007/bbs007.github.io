webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "/* Global cards style */\r\n.card {\r\n    display: table;\r\n    position: relative;\r\n    width: 12em;\r\n    height: 18em;\r\n    padding: 0.5em;\r\n    margin: 0.5em;\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\r\n    border: 1px solid black;\r\n    border-radius: 25px;\r\n}\r\n\r\n.card-text {\r\n    display: table-cell;\r\n    width: inherit;\r\n    height: inherit;\r\n    margin: 0.5em;\r\n    padding: 0.5em;\r\n    \r\n    text-align: center;\r\n    vertical-align: middle;\r\n\r\n    border-radius: 20px;\r\n}\r\n\r\n/* Question card */\r\n.card-question .card-text {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.card-text .card-pick {\r\n    /*padding: 0.5em;*/\r\n    /*padding-bottom: 0.5em;*/\r\n\r\n    min-width: 2em;\r\n    height: 2em;\r\n\r\n    color: white;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n\r\n    border-top-left-radius: 20px;\r\n    border-left: 1px solid white;\r\n    border-top: 1px solid white;\r\n}\r\n\r\n/* Answer card */\r\n.card-answer {\r\n    background-color: black;\r\n}\r\n\r\n.card-answer .card-text {\r\n    background-color: white;\r\n    color: black;\r\n    border: 1px solid black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(154);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_against_humanity_cards_against_humanity_component__ = __webpack_require__(90);
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
        template: __webpack_require__(216),
        styles: [__webpack_require__(211)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cards_against_humanity_cards_against_humanity_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_card_question_card_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__answer_card_answer_card_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Services

// Components




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
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'cah',
                    component: __WEBPACK_IMPORTED_MODULE_7__cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */]
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__cards_against_humanity_cards_against_humanity_component__["a" /* CardsAgainstHumanityComponent */],
            __WEBPACK_IMPORTED_MODULE_8__question_card_question_card_component__["a" /* QuestionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__answer_card_answer_card_component__["a" /* AnswerCardComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__cards_service__["a" /* CardsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".answer-list {\r\n    float: left;\r\n    margin-right: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-answer\">\n  <div class=\"card-text\">\n    {{card.text}}\n  </div>\n</div>"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<app-cards-against-humanity>\n    \n</app-cards-against-humanity>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-block\">\n<button (click)=\"newGame()\" class=\"btn btn-primary\">New Game</button>\n<button (click)=\"newDeal()\" class=\"btn btn-primary\">New Deal</button>\n</div>\n    \n\n<h1>\n    Bienvenue sur Cards Against Humanity\n</h1>\n\n<h2>Question</h2>\n\n<div *ngIf=\"currentQuestion\">\n    <app-question-card [card]=\"currentQuestion\">\n    </app-question-card>\n</div>\n\n<h2>\n    Answers\n</h2>\n\n<div *ngIf=\"currentAnswers\">\n    <div *ngFor=\"let a of currentAnswers\" >\n        <app-answer-card [card]=\"a\" class=\"answer-list\">\n        </app-answer-card>\n    </div>\n</div>"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-question\">\n  <div class=\"card-text\">\n    {{card.text}}\n\n    <div class=\"card-pick\">\n      {{card.pick}}\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_card__ = __webpack_require__(89);
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
}(__WEBPACK_IMPORTED_MODULE_0_app_card__["a" /* Card */]));

//# sourceMappingURL=answer-card.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_card__ = __webpack_require__(89);
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
    return QuestionCard;
}(__WEBPACK_IMPORTED_MODULE_0_app_card__["a" /* Card */]));

//# sourceMappingURL=question-card.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer_card__ = __webpack_require__(57);
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
        template: __webpack_require__(215),
        styles: [__webpack_require__(210), __webpack_require__(104)]
    }),
    __metadata("design:paramtypes", [])
], AnswerCardComponent);

var _a;
//# sourceMappingURL=answer-card.component.js.map

/***/ }),

/***/ 89:
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
    return Card;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_question_card__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_answer_card__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_card_question_card_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__answer_card_answer_card_component__ = __webpack_require__(88);
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



// Services

// Classes


// Components


var CardsAgainstHumanityComponent = (function () {
    function CardsAgainstHumanityComponent(cardsService, route, location) {
        var _this = this;
        this.cardsService = cardsService;
        this.route = route;
        this.location = location;
        this.currentQuestion = null;
        this.currentAnswers = null;
        // Init the cards and deal when the promises are resolved
        this.initCardsLists()
            .then(function (res) {
            _this.newDeal();
        });
    }
    /**
     * Will fetch the lists in a promise.
     * @return a promise that is resolved when lists are reset.
     */
    CardsAgainstHumanityComponent.prototype.initCardsLists = function () {
        var _this = this;
        // Questions promise, resolved when the result is set
        var promiseQuestions = new Promise(function (resolve) {
            _this.cardsService.getQuestionCards().subscribe(function (res) {
                _this.questions = res;
                console.log("Questions set");
                resolve(true);
            });
        });
        // Answers promise, resolved when the result is set
        var promiseAnswers = new Promise(function (resolve) {
            _this.cardsService.getAnswserCards().subscribe(function (res) {
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
    CardsAgainstHumanityComponent.prototype.randomQuestion = function () {
        var ret = new __WEBPACK_IMPORTED_MODULE_4_app_question_card__["a" /* QuestionCard */]("No more questions", 0);
        if (0 != this.questions.length) {
            // Random number to pick in tab
            var randNumber = Math.random() * this.questions.length;
            // Get the random question and delete it from the list
            ret = this.questions.splice(randNumber, 1)[0];
        }
        return ret;
    };
    CardsAgainstHumanityComponent.prototype.randomAnswers = function (howMany) {
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
                ret.push(new __WEBPACK_IMPORTED_MODULE_5_app_answer_card__["a" /* AnswerCard */]("No more answers"));
            }
        }
        return ret;
    };
    CardsAgainstHumanityComponent.prototype.newDeal = function () {
        console.log("New deal");
        this.currentQuestion = this.randomQuestion();
        this.currentAnswers = this.randomAnswers();
        console.log("Remaining questions " + this.questions.length);
        console.log("Remaining answers " + this.answers.length);
    };
    CardsAgainstHumanityComponent.prototype.newGame = function () {
        var _this = this;
        console.log("New game");
        this.initCardsLists()
            .then(function (res) {
            console.log("Promise res : " + res);
            _this.newDeal();
        });
    };
    CardsAgainstHumanityComponent.prototype.ngOnInit = function () {
    };
    return CardsAgainstHumanityComponent;
}());
CardsAgainstHumanityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-cards-against-humanity',
        template: __webpack_require__(217),
        styles: [__webpack_require__(212)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__cards_service__["a" /* CardsService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__question_card_question_card_component__["a" /* QuestionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__answer_card_answer_card_component__["a" /* AnswerCardComponent */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === "function" && _c || Object])
], CardsAgainstHumanityComponent);

var _a, _b, _c;
//# sourceMappingURL=cards-against-humanity.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_card__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__answer_card__ = __webpack_require__(57);
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
        this.url_fr = '../assets/cards_en.json';
    }
    // Choose the url according to the current lang
    CardsService.prototype.chooseUrl = function () {
        return this.url_fr;
    };
    CardsService.prototype.getQuestionCards = function () {
        var url = this.chooseUrl();
        if (!this.dataQuestion) {
            this.dataQuestion = this.http.get(url)
                .map(function (res) {
                return res.json().blackCards.map(function (elt) {
                    return new __WEBPACK_IMPORTED_MODULE_3__question_card__["a" /* QuestionCard */](elt.text, elt.pick);
                });
            });
        }
        return this.dataQuestion;
    };
    CardsService.prototype.getAnswserCards = function () {
        var url = this.chooseUrl();
        if (!this.dataAnswer) {
            this.dataAnswer = this.http.get(url)
                .map(function (res) {
                return res.json().whiteCards.map(function (elt) {
                    return new __WEBPACK_IMPORTED_MODULE_4__answer_card__["a" /* AnswerCard */](elt);
                });
            });
        }
        return this.dataAnswer;
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_card__ = __webpack_require__(58);
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
        template: __webpack_require__(218),
        styles: [__webpack_require__(104)]
    }),
    __metadata("design:paramtypes", [])
], QuestionCardComponent);

var _a;
//# sourceMappingURL=question-card.component.js.map

/***/ })

},[487]);
//# sourceMappingURL=main.bundle.js.map