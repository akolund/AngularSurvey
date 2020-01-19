webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyService = (function () {
    function SurveyService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        console.log('Survey service initialized....');
    }
    ///////IZLISTAJ SVE UPITNIKE
    SurveyService.prototype.getSurveys = function () {
        return this.http.get('http://localhost:3000/api/surveys')
            .map(function (res) { return res.json(); });
    };
    // getSurveysQuestion(){
    //   return this.http.get('http://localhost:3000/api/surveys?_id')
    //   .map(res => res.json());
    // }
    SurveyService.prototype.getSurveysQuestion = function () {
        this.httpClient.get('http://localhost:3000/api' + '/surveys').subscribe(function (res) {
            console.log("getSurveysQuestion", res);
        });
    };
    //////DODAJ NOVI UPITNIK
    SurveyService.prototype.addSurvey = function (newSurvey) {
        console.log(newSurvey);
        console.log("ADD NEW SURVEY FJA");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log(headers);
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/surveys', JSON.stringify(newSurvey), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ///////IZBRIŠI UPITNIK
    SurveyService.prototype.deleteSurvey = function (id) {
        return this.http.delete('http://localhost:3000/api/surveys/' + id)
            .map(function (res) { return res.json(); });
    };
    ///////DODAJ PITANJE
    SurveyService.prototype.addQuestion = function (newQuestion, id) {
        console.log("ADD QUESTION", newQuestion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        console.log(headers);
        return this.http.put('http://localhost:3000/api/surveys/id=' + id, JSON.stringify(newQuestion), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SurveyService.prototype.addAnswers = function (Odgovori_korisnika, id) {
        console.log("ADD QUESTION", Odgovori_korisnika);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        console.log(headers);
        return this.http.put('http://localhost:3000/api/surveys/id=' + id, JSON.stringify(Odgovori_korisnika), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ///////IZBRISI PITANJE
    SurveyService.prototype.removeQuestion = function (remQuestion, id) {
        console.log("ADD QUESTION", remQuestion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        console.log(headers);
        return this.http.put('http://localhost:3000/api/surveys/id=' + id, JSON.stringify(remQuestion), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SurveyService.prototype.renameQuestion = function (renameQuestion, id) {
        console.log("ADD QUESTION", renameQuestion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        console.log(headers);
        return this.http.put('http://localhost:3000/api/surveys/id=' + id, JSON.stringify(renameQuestion), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SurveyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], SurveyService);
    return SurveyService;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/survey.service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/validate.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(693),
            styles: [__webpack_require__(683)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_survey_id_survey_id_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_answers_user_answers_component__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'survey', component: __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__["a" /* SurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'survey/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_survey_id_survey_id_component__["a" /* SurveyIdComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'survey/user_answers/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_user_answers_user_answers_component__["a" /* UserAnswersComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_survey_id_survey_id_component__["a" /* SurveyIdComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_answers_user_answers_component__["a" /* UserAnswersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    // public items: Array<string>;
    function DashboardComponent(router) {
        this.router = router;
        // this.items = ["item1", "item2", "item3"]
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    // public open(event, item) {
    //   alert('Open ' + item);
    // }
    DashboardComponent.prototype.getSurvey = function () {
        // console.log(123);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(694),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(695),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(user.username);
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this._flashMessagesService.show('You are logged in!', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this._flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/login.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this._flashMessagesService.show('You are logged out!', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    //ucitava user kad je inicijaliziran
    //zato se stavlja u ngOnInit()
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getProfile() je funkcija iz auth.service.ts
        // absorbable je, tako da subscribe daje podatke data iz profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/profile.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(ValidateService, _flashMessagesService, AuthService, router) {
        this.ValidateService = ValidateService;
        this._flashMessagesService = _flashMessagesService;
        this.AuthService = AuthService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // console.log(this.name);
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Required Fields
        if (!this.ValidateService.validateRegister(user)) {
            // console.log("Please fill in all fields");
            this._flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
            // console.log("Please fill in all fields");
            return false;
        }
        //Validate email
        if (!this.ValidateService.validateEmail(user.email)) {
            // console.log("Please use a valid email");
            this._flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        //Register user
        this.AuthService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('You are now registered and can login ', { cssClass: 'alert-green', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this._flashMessagesService.show('Something went wrong ', { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/register.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyIdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
var SurveyIdComponent = (function () {
    // //SALJE SE user-answers KOMPONENTU
    // @Output() anketa = new EventEmitter<any>();
    function SurveyIdComponent(surveyService, router, _flashMessagesService, cd) {
        var _this = this;
        this.surveyService = surveyService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.cd = cd;
        this.survey_questions_pom = [];
        this.question_choices = [];
        this.question_typeValue = [
            { id: 1, name: "Single" },
            { id: 2, name: "Multy" },
            { id: 3, name: "Open" }
        ];
        this.question_type = [];
        this.user_answers = [];
        var _a = window.location.pathname.split('/survey/'), currentLocale = _a[0], URLid = _a[1];
        console.log('URL_id', URLid); // ID ANKETE IZ URL-A
        this.id = URLid;
        console.log("errr", this.errors);
        this.survey_questions_pom = [];
        this.surveyService.getSurveys().subscribe(function (surveys) {
            for (var i = 0; i < surveys.length; i++) {
                if (_this.id == surveys[i]._id) {
                    if (surveys[i].survey_questions.length != undefined) {
                        console.log("TO JE TAJ ", surveys[i].survey_questions.length); //varijable su sve unutar [{}]
                        // this.id=surveys[i]._id;
                        _this.survey_questions = surveys[i].survey_questions;
                        _this.survey_questions_pom = surveys[i].survey_questions;
                        _this.user_answers = surveys[i].survey_answers;
                    }
                }
            }
        });
        console.log("aaaaaaa", this.survey_questions_pom);
    }
    SurveyIdComponent.prototype.Otvoreno = function (option) {
        console.log("option", option);
        if (option == 'Open') {
            this.nijeOtvoreno = true;
            this.question_choices = [" "];
        }
        else {
            this.nijeOtvoreno = false;
        }
    };
    SurveyIdComponent.prototype.parseTextArea = function () {
        this.question_choices = this.textarea.split("\n");
    };
    //DODAVANJE PITANJA, MOZE SE BIRATI TIP
    SurveyIdComponent.prototype.addQuestion = function (event) {
        var _this = this;
        if (this.survey_questions_pom == undefined) {
            this.survey_questions_pom = [];
        }
        for (var i = 0; i < this.survey_questions_pom.length; i++) {
            // console.log("PITANJA",this.survey_questions_pom[i]);
            if ((this.question_name == undefined || this.question_name == '') || this.question_type == undefined || (this.question_type[0] != 'O' && (this.question_choices == undefined || this.question_choices == [])) || (this.question_type[0] == 'O' && (this.question_choices == undefined || this.question_choices == []))) {
                console.log("nemoze");
                this.errors = undefined;
                // this.errors= "Ispunite sva polja";
                this._flashMessagesService.show('Ispunite sva polja!', {
                    cssClass: 'alert-danger',
                    timeout: 2000 });
            }
            if (this.question_name == this.survey_questions_pom[i].question_name) {
                console.log("nemoze");
                // this.errors=undefined;
                // this.errors= "Pitanje tog naziva postoji";
                this._flashMessagesService.show('Pitanje tog naziva postoji', {
                    cssClass: 'alert-danger',
                    timeout: 2000 });
                this.question_name = '';
            }
        }
        // event.preventDefault();
        //PROVJERA DA LI JE SVE USPJESNO ISPUNJENO
        if ((this.question_name != undefined && this.question_name != '') && this.question_type.length > 0 && ((this.question_type[0] != 'O' && this.question_choices.length > 0) || (this.question_type[0] === 'O'))) {
            var newQuestion = {
                method: "POST_QUESTION",
                survey_questions: {
                    question_name: this.question_name,
                    question_text: this.question_text,
                    question_type: this.question_type,
                    question_choices: this.question_choices
                }
            };
            var newQuestion_pom = {
                question_name: this.question_name,
                question_text: this.question_text,
                question_type: this.question_type,
                question_choices: this.question_choices
            };
            this.survey_questions_pom.push(newQuestion_pom);
            this.surveyService.addQuestion(newQuestion, this.id).subscribe(function (question) {
                console.log("question", question); //question {n: 1, nModified: 1, ok: 1}
                // this.survey_questions.push(question);
                _this.survey_questions = _this.survey_questions.concat([question]);
                _this.question_name = '';
                _this.question_text = '';
                _this.question_type = [];
                _this.question_choices = [''];
            });
            console.log("NOVAAA", this.survey_questions_pom);
        }
        else {
            console.log(this.question_type[0]);
            // this.errors="Nešto niste ispunili ili ste propustili";
            this._flashMessagesService.show('Nešto niste ispunili', {
                cssClass: 'prazno',
                timeout: 2000 });
        }
    };
    // /////////RENAME QUESTION
    //
    //       renameQuestion(newName){
    //         // event.preventDefault();
    //     for(var i=0; i < this.survey_questions_pom.length; i++){
    //       if(newName==this.survey_questions_pom[i].question_name){
    //             this.redni_br=i;
    //             console.log("redni broj pitanja", this.redni_br);
    //             }
    //           }
    //
    //             var renameQuestion = {
    //               method:"RENAME_QUESTION",
    //               redni_br:this.redni_br,
    //               survey_questions:{
    //                 question_name:newName
    //
    //               }
    //             }
    //             console.log("evo",newName);
    //           //
    //           this.surveyService.renameQuestion(renameQuestion,this.id).subscribe(question => {
    //             console.log("question",question);  //question {n: 1, nModified: 1, ok: 1}
    //             console.log("subscribe this.survey_questions",this.survey_questions);  //question {n: 1, nModified: 1, ok: 1}
    //             this.survey_questions.push(question);
    //
    //           });
    //         }
    SurveyIdComponent.prototype.removeQuestion = function (question_name) {
        var _this = this;
        for (var i = 0; i < this.survey_questions_pom.length; i++) {
            if (this.survey_questions_pom[i].question_name == question_name) {
                this.survey_questions_pom.splice(i, 1);
                console.log(this.survey_questions_pom);
            }
        }
        event.preventDefault();
        //PROVJERA DA LI JE SVE USPJESNO ISPUNJENO
        var remQuestion = {
            method: "DELETE_QUESTION",
            survey_questions: {
                question_name: question_name
            }
        };
        console.log("evo", remQuestion);
        this.surveyService.addQuestion(remQuestion, this.id).subscribe(function (question) {
            console.log("question", question); //question {n: 1, nModified: 1, ok: 1}
            _this.survey_questions.push(question);
        });
    };
    SurveyIdComponent.prototype.getSurveysAnswers = function () {
        console.log("preuzmi odgovore");
        var sJson = JSON.stringify(this.user_answers);
        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
        element.setAttribute('download', "primer-server-task.json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); // simulate click
        document.body.removeChild(element);
    };
    SurveyIdComponent.prototype.ngOnInit = function () {
    };
    SurveyIdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-id',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], SurveyIdComponent);
    return SurveyIdComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/survey-id.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyComponent = (function () {
    // @Input() link: string;
    // @Output() linkEvent = new EventEmitter<string>();
    function SurveyComponent(route, surveyService, authService, router) {
        var _this = this;
        this.route = route;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
        this.profile_surveys = [];
        // console.log('authService',authService);
        this.surveyService.getSurveys()
            .subscribe(function (surveys) {
            for (var i = 0; i < surveys.length; i++) {
                console.log("surveys");
                _this.surveys = surveys;
            }
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user._id;
            _this.user_name = profile.user.name;
            console.log("LISTA ", _this.surveys);
            // var profile_surveys=[];
            for (var i = 0; i < _this.surveys.length; i++) {
                if (_this.user == _this.surveys[i].survey_author) {
                    // console.log("IF surveys",this.surveys[i]);
                    _this.profile_surveys.push(_this.surveys[i]);
                }
            }
            // console.log("IF TRUE",this.profile_surveys);
            console.log("profile.user._id: ", profile.user._id);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    SurveyComponent.prototype.addSurvey = function (event) {
        var _this = this;
        event.preventDefault();
        var newSurvey = {
            survey_name: this.survey_name,
            survey_description: this.survey_description,
            survey_author: this.user
        };
        var newprofile_surveys = this.profile_surveys.slice();
        console.log("aaa", newprofile_surveys);
        this.surveyService.addSurvey(newSurvey)
            .subscribe(function (survey) {
            // this.surveys.push(survey);
            _this.surveys = _this.surveys.concat([survey]);
            _this.survey_name = '';
            _this.survey_description = '';
            // this.profile_surveys = [...this.surveys, survey];
            _this.profile_surveys.push(survey);
        });
    };
    SurveyComponent.prototype.deleteSurvey = function (id) {
        var surveys = this.surveys;
        for (var i = 0; i < this.profile_surveys.length; i++) {
            if (this.profile_surveys[i]._id == id) {
                this.profile_surveys.splice(i, 1);
            }
        }
        console.log("profile_surveys", this.profile_surveys);
        this.surveyService.deleteSurvey(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < surveys.length; i++) {
                    if (surveys[i]._id == id) {
                        surveys.splice(i, 1);
                    }
                }
            }
        });
    };
    ///////////////// UPDATE!!!! VIDEO MEAN App From Scratch - MongoDB, Express, Angular 2 & NodeJS
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SurveyComponent);
    return SurveyComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/survey.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAnswersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAnswersComponent = (function () {
    // @Output() answersEvent = new EventEmitter<string>();
    // @ViewChild('radioGroup') radioGroup: NgForm;
    function UserAnswersComponent(surveyService, formBuilder) {
        var _this = this;
        this.surveyService = surveyService;
        this.formBuilder = formBuilder;
        this.question_choices = [];
        this.mr_answers = {};
        this.newOdgovori = [];
        this.result = [];
        this.selectedValue = [];
        this.answers = "user answer!";
        var _a = window.location.pathname.split('/survey/user_answers/'), currentLocale = _a[0], URLid = _a[1];
        console.log("URL ", URLid);
        this.id = URLid;
        this.surveyService.getSurveys().subscribe(function (surveys) {
            for (var i = 0; i < surveys.length; i++) {
                if (URLid == surveys[i]._id) {
                    _this.survey_questions = surveys[i].survey_questions;
                }
            }
        });
    }
    UserAnswersComponent.prototype.sendAnswers = function (values, ans, q_name) {
        // var pitanjazaodgovore=[];
        // if (pitanjazaodgovore.has(q_name)) {console.log("aaa");}
        // var obj = {};
        var _this = this;
        var pitanje_odg = [q_name, ans];
        // console.log(a);
        if (values.currentTarget.checked == true) {
            // this.mr_answers.push(q_name);
            // this.mr_answers.push(ans);
            this.result = pitanje_odg.reduce(function (obj, arrValue) { return (_this.mr_answers[obj] += (',[' + arrValue + ']')); });
        }
        // if(values.currentTarget.checked==false){
        //
        //   }
        return this.mr_answers;
    };
    UserAnswersComponent.prototype.getOdgovori = function (odgovoriForm) {
        var _this = this;
        this.izvrseno = false;
        if (odgovoriForm._submitted == true) {
            var odgovori = {};
            // odgovori += odgovoriForm.value+this.mr_answers;
            console.log("heeej", odgovori);
            this.newOdgovori.push(odgovoriForm.value, this.mr_answers);
            // this.newOdgovori.push(this.mr_answers);
            // console.log(odgovoriForm.value);
            console.log("  this.newOdgovori ", this.newOdgovori);
            var Odgovori_korisnika = {
                method: "POST_ANSWERS",
                survey_answers: {
                    user_answers: this.newOdgovori
                }
            };
            this.izvrseno = true;
            if (this.izvrseno) {
                alert("Hvala Vam na Vašim odgovorima!");
                window.close();
                this.surveyService.addAnswers(Odgovori_korisnika, this.id).subscribe(function (answers) {
                    console.log("answers", answers); //question {n: 1, nModified: 1, ok: 1}
                    _this.survey_questions.push(answers);
                    _this.mr_answers = [];
                    odgovoriForm.value = [];
                });
            }
        }
    };
    UserAnswersComponent.prototype.ngOnInit = function () {
    };
    UserAnswersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-answers',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object])
    ], UserAnswersComponent);
    return UserAnswersComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/user-answers.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/environment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](); // set header value
        headers.append('Content-Type', 'application/json'); // this is how to add value to header. Its going to be json form
        //we want to return in absorbable with the response
        //itsgoing to be post request
        //url is our backend 3000
        //pass alonguser(the data) and optionst (headers)
        //  return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //  return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //[ Part 9 ]
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken); //here we have added extra header
        headers.append('Content-Type', 'application/json');
        //    return this.http.get('http://localhost:3000/users/profile',   {headers: headers})
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //[ Part 9 ]
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token; //set that authToken what we have pulled from local storage
        //authToken isa class property from line 9 so we can access it from anywhere
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //[ Part 9 ]
    // loggedIn(){
    // return tokenNotExpired();
    // return tokenNotExpired('id_token')
    AuthService.prototype.loggedIn = function () { if ('id_token') {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    } };
    // }
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/AnelaSurvey/angular-src/src/auth.service.js.map

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "body{\r\n  position: relative;\r\n  padding-bottom: 200px;\r\n}\r\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "\r\n#pocetna_slika{\r\n  background-image:  url(\"./assets/img/slika1.jpg\");\r\n  height: 700px;\r\n  width:138.4%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  left:-20%;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  margin: 0  0 5% 0 ;\r\n\r\n}\r\n\r\n.pocetna_slika1{\r\n\r\n    background-color: #000;\r\n    opacity: 0.6;\r\n    height: 700px;\r\n\r\n    font-weight: 400!important;\r\n}\r\n\r\n.pocetna_tekst h1 {\r\n  color:#a2f1db;\r\n  font-weight: 600!important;\r\n}\r\n.pocetna_tekst {\r\n  opacity: 1;\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n\r\n}\r\n\r\n.wrapper{\r\n  position:relative;\r\n  display:inline;\r\n  width:100%;\r\n}\r\n.left{float:left;   width:100%;margin-right:70%;margin-bottom: 5%; text-align: left; display:inline-block;}\r\n.right{float:right;   width:100%;margin-left:70%;margin-bottom: 5%; text-align: right; display:inline-block;}\r\n\r\n.wrapper>.left p{\r\n  display:inline;\r\n  width:50%;\r\n  float: left;\r\n  padding-top:2%\r\n}\r\n.wrapper>.right p{\r\n  display:inline;\r\n  width:50%;\r\n  float: right;\r\n  padding-top:2%\r\n}\r\n.wrapper h3{\r\n  padding-top:1%;\r\n}\r\n\r\n.left img{\r\n  float: left;\r\n  width: 450px;\r\n  display: inline;\r\n  width:50%;\r\n  padding-top: 0%;\r\n  /* margin-left: 50%;\r\n  margin-top: -17%; */\r\n}\r\n.right img{\r\n  float: left;\r\n  width: 450px;\r\n\r\n  display:inline;\r\n  padding-top: 0%;\r\n  /* margin-right: -50%; */\r\n\r\n}\r\n\r\n.footer{\r\n  z-index: 1000!important;\r\n  position: absolute!important;\r\n  right: 0!important;\r\n  left: 0!important;\r\n  top: 2900px!important;\r\n  /* margin-top: 140%; */\r\n  padding: 1rem;\r\n  background-color: #efefef;\r\n  text-align: left;\r\n  height: 200px;\r\n  border-top:solid 2px #78C2AD ;\r\n  padding-left: 15%;\r\n}\r\n#kontakt{\r\n  width:50%;\r\n  display: inline;\r\n}\r\n#onama{\r\n    float:left;\r\n    text-align:left;\r\n    display: inline;\r\n}\r\nsvg{\r\n  float:left;\r\n  display: inline;\r\n  width:1%;\r\n  margin-right: 2%;\r\n}\r\n#onama>p{\r\n  display: inline;\r\n  width:45%;\r\n}\r\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".navigacija{position:-webkit-sticky;position:sticky; top:0; z-index: 999;}\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".pitanje-lista:nth-child(odd){\r\n  background-color: #ededed;\r\n}\r\n.pitanje{\r\n  padding:5px;\r\n}\r\n\r\n\r\n.pitanje-lista input{\r\n\r\n    float: left;\r\n    margin-left: 67.5%;\r\n    position: absolute;\r\n    margin-top: -3%;\r\n}\r\n.pitanje-lista{\r\n  width:100%;\r\n  padding: 1%;\r\n  border-left:solid 2px #78C2AD;\r\n  border-right:solid 2px #78C2AD;\r\n  margin-left: 1%;\r\n}\r\n.tekst-pitanja{\r\n  word-wrap: break-word;\r\n\r\n}\r\n#brisi-pitanje{\r\n  float: left;\r\n    margin-left: 79.5%;\r\n    position: absolute;\r\n    margin-top: -7.7%;\r\n}\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".row:nth-child(odd){\r\n  background-color: #ededed;\r\n}\r\n.row{\r\n  padding: 10px;\r\n}\r\n\r\n.row_child{\r\n  width:100%;\r\n  padding-bottom: 1%;\r\n}\r\n.row_child a{\r\n    line-height: 1.6;\r\n}\r\n.row_child input{\r\n\r\n    float: left;\r\n    margin-left: 67.5%;\r\n    position: absolute;\r\n    margin-top: -3%;\r\n}\r\n#opis{\r\n  height: 200px;\r\n  width:70%;\r\n}\r\n#dodaj{\r\n\r\n  width:70%;\r\n}\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".cijelopitanje:nth-child(even){\r\n  background-color: lightgoldenrodyellow;\r\n  border-radius: 15px;\r\n  padding:5px;\r\n  margin:2% 0 2% 0;\r\n}\r\nh3{\r\n   text-align: center;\r\n}\r\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  <div class=\"container\">\n\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n\n  </div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  dashboard works!\n</p> -->\n<h2 class=\"page-header\"> Dashboard </h2>\n\n<div class=\"tekst\">\n  <p>\n    Tvrtke i istraživači u svim industrijama provode istraživanja kako bi otkrili odgovore na određena, važna pitanja. Ta pitanja su mogu biti raznolika, pokrivaju široki raspon tema i mogu se postaviti u više formata.\n\n    Pitanja trebaju biti strateški isplanirana i strukturirana na najbolji mogući način kako bi dobili najtočnije podatke.\n    Prilikom strukturiranja pitanja ankete razmotrite sljedeće:\n\n  </p>\n  <ul>\n    <li> Glavni cilj istraživanja </li>\n    <li> Kako namjeravate primijeniti podatke ankete </li>\n    <li> Odluke koje ćete donijeti kao rezultat podataka ankete </li>\n  </ul>\n</div>\n<!-- <ul id = \"answers\"> <li>aaa</li></ul> <!NIŠTA NE IDE UNUTRA, HVATA GA FOR PETLJA  -->\n<!--<button (click)=\"getSurvey()\" id=\"getSurvey\">Get Survey</button>-->\n  <app-survey></app-survey>\n\n\n\n<script>\n</script>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<!--<main role=\"main\" >-->\n\n<div id=\"pocetna_slika\" >\n  <div class=\"pocetna_slika1\">  </div>\n    <div class=\"pocetna_tekst\">\n      <h1>Dobrodošli na SurveySite</h1>\n        <p class=\"lead\">\n          Kroz par koraka kreirajte anketu i donesite bolje odluke nakon rezultata!\n          <br>Prijavite se ili registrirajte ako niste još!</p>\n    </div>\n\n</div>\n<!-- <div class=\"row\"> -->\n<div class=\"wrapper\">\n  <div class = \"left\">\n    <h3>1) Definirajte svoje ciljeve</h3>\n    <p>Prije nego što napišete svoj upitnik, napravite popis ciljeva istraživanja i suzite ga na 3-5 najbitnijih.\n      Nema smisla gnjaviti ispitanike ako ne znate što Vam je potrebno na prvom mjestu.\n    </p>\n    <img src=\"./assets/img/slika14.jpg\">\n  </div>\n  <div class = \"right\">\n    <h3>2) Izradite popis pitanja</h3>\n    <p>Razmislite o svim mogućim pitanjima koja se odnosi na svaki Vaš cilj. Nemojte se ograničavati prema tipu pitanja ili broju pitanja.\n       Jednostavno napišite sve što biste tražili od potencijalnog ispitanika, ako biste mogli. </p>\n    <img src=\"./assets/img/slika3.png\">\n  </div>\n  <div class = \"left\">\n    <h3>3) Definirajte tip pitanja </h3>\n    <p>Odredite tip pitanja koji je najprikladniji za odgovor na pitanje.\n      Treba također razmišljati o vrsti podataka koja su proizvedena određenom vrstom pitanja.</p>\n    <img src=\"./assets/img/slika5.png\">\n  </div>\n  <div class = \"right\">\n    <h3>4) Odredite grupu ispitanika</h3>\n    <p>Da bi imali što bolje rezultate, odredite ciljanu publiku ili grupu ispitanika koja će odgovarati na Vaša pitanja. </p>\n    <img src=\"./assets/img/slika11.png\">\n  </div>\n  <div class = \"left\">\n    <h3>5) Analizirajte odgovore</h3>\n    <p>Pogledajte podatke koje ste prikupili, po mogućnosti s alatom za vizualnu analitiku.\n    To će Vam pomoći da razumijete kako ispitnici razmišljaju i što žele. </p>\n      <img src=\"./assets/img/slika15.jpg\">\n  </div>\n\n</div>\n<div class=\"footer\" >\n  <div class=\"row\">\n  <div id=\"kontakt\" class=\"col-md-4\">\n  <p>Kontakt </p>\n    <ul>\n      <li>Mobitel: + 385 97 123 456\n      <li>Tel: + 385 21 123 456\n      <li>E-mail: anela.kolundzic@hotmail.com\n    </ul>\n  </div>\n  <div id=\"onama\" class=\"col-md-4\">\n    <div>\n    <svg height=\"150\" width=\"200\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"200\" style=\"stroke:rgb(120, 194, 173);stroke-width:3\" />\n\n    </svg>\n  </div>\n  <div>\n    <p>O nama<br /><p>\n    <p>SurveySite.com skupina je potrošača koja utječu na buduće proizvode i usluge volontiranjem tako da sudjeluju u istraživanju potrošača.\n      Istraživanje potrošača otkriva ono što ljudi vole i trebaju tražeći mišljenje o proizvodima i uslugama putem anketiranja i testiranjem proizvoda.\n    </p>\n  </div>\n  </div>\n</div>\n</div>\n\n<!--  </main> -->\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Upišite korisničko ime\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"navigacija\" >\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">SurveySite</a>\n    <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n           <a class=\"nav-link\" [routerLink]=\"['/profile']\"  *ngIf=\"user\"> Dobrodošli, {{user.username}}</a>\n        </li>\n      </ul>\n\n\n      <ul class=\"navbar-nav navbar-right\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\"  [routerLink]=\"['/']\">Početna</a>\n        </li>\n        <li  *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profil</a>\n        </li>\n\n\n        <li *ngIf=\"!authService.loggedIn()\"  class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Prijava</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Registracija</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" >\n          <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\" >Odjava</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" action=\"https://www.google.com/search\" method=\"GET\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"q\"  placeholder=\"Guglaj\" aria-label=\"Guglaj\">\n        <input class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\n      </form>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Podaci o Vašem profilu</h2>\n\n<br />\n<br />\n\n\n<div *ngIf=\"user\"> <!--  -->\n<h4 class=\"page-header\">{{user.username}}</h4>\n<br />\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Korisničko ime: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Registracija</h2>\n\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label>Ime</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Upišite ime ovdje...\">\n  </div>\n  <div class=\"form-group\">\n    <label>Korisničko ime</label>\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"username\" name=\"username\"  placeholder=\"Upišite korisničko ime ovdje...\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email adresa</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"  [(ngModel)]=\"email\" name=\"email\"  aria-describedby=\"emailHelp\" placeholder=\"Upišite e-mail\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Vaša e-mail adresa je na sigurnom mjestu</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Lozinka</label>\n    <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\"  id=\"exampleInputPassword1\" placeholder=\"Lozinka\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-6\">\n<h3>Izrada upitnika</h3>\n\n\n<!-- <form> -->\n<form #pitanjaForm=\"ngForm\"  (ngSubmit)=\"addQuestion($event)\" >\n\n\n  <!-- <a [routerLink]=\"['/survey', survey._id ]\" component={SurveyIdComponent} [routerLinkActive]=\"['active']\" >{{survey.survey_name}} </a> -->\n\n    <div class=\"prazno\">\n      <p class=\"prazno\" >Naziv pitanja</p>\n      <input  type=\"text\" width=\"100px\"  [(ngModel)]=\"this.question_name\" name=\"this.question_name\" class=\"form-control\" #reference >\n        <p>Tekst pitanja</p>\n      <textarea width=\"60%\" rows=\"5\" placeholder=\"\"  [(ngModel)]=\"question_text\" name=\"question_text\" class=\"form-control\" #reference ></textarea>\n    </div>\n      <!-- <input type=\"text\" [(ngModel)]=\"question_type\" name=\"question_type\" class=\"form-control\" placeholder=\"Add question type\"> -->\n      <p>Tip pitanja</p>\n      <form #f=\"ngForm\">\n        <select   name=\"name\"  [(ngModel)]=\"question_type\"  class=\"custom-select\"(ngModelChange)=\"Otvoreno($event)\">\n          <option [ngValue]=\"null\"> </option>\n            <option *ngFor=\"let type of question_typeValue\" [value]=\"type.name\"  name=\"option\">\n            {{ type.name }}\n          </option>\n        </select>\n      </form>\n      <br />\n      <!-- <div>  *ngIf=\"!nijeOtvoreno\" -->\n     <div *ngIf=\"!nijeOtvoreno\">\n       <p>Ponuđeni odgovori</p>\n        <!-- <input type=\"text\" [(ngModel)]=\"question_choices\" name=\"question_choices\" class=\"form-control\" placeholder=\"\"> -->\n      <textarea [(ngModel)]=\"textarea\" rows=\"5\" name=\"textarea\" (ngModelChange)=\"parseTextArea()\"class=\"form-control\" placeholder=\"\"></textarea>\n      </div>\n      <br/>\n\n      <!-- <input type=\"button\" (click)=\"addQuestion($event)\" value=\"Dodaj\" class=\"btn btn-success\"> -->\n      <button type=\"submit\" class=\"btn btn-primary\">Dodaj</button>\n      <div *ngIf=\"errors\" class=\"alert alert-danger\">{{ errors }}</div>\n            <!--IZLISTANA PITANJA -->\n</form>\n\n<div class=\"upute-izrada\">\n\n\n<!-- odgovori {{answers}} -->\n<!-- <button (click)=\"getSurveysQuestion()\"> JSON </button> -->\n\n<br />\n<p>Izradite upitnik tako da unesete prvo naziv pitanja, tj. varijablu pitanja. U polje ispod upišite tekst pitanja.\n   Zatim odaberite jedno od tri ponuđena tipa pitanja. </p>\n      <ul>\n        <li> Single - od ponuđenih odgovora moguć samo jedan odabir</li>\n        <li> Multy - od ponuđenih odgovora moguće više odabira</li>\n        <li> Open - otvoreno pitanje, bez ponuđenih odgovora</li>\n      </ul>\n      <p>U polje za ponuđene odgovore nabrojite odgovore te ih razdvajajte novim redom, tipka \"Enter\". </p>\n\n      <p>\n      Ovaj link vodi na anketu:\n      <a [routerLink]=\"['/survey/user_answers', id ]\" component={UserAnswersComponent} [routerLinkActive]=\"['active']\" target=\"_blank\" > Link za anketu  </a>\n      </p>\n      <!-- <br /> -->\n      <p>Ovdje preuzmite odovore u JSON formatu:</p>\n      <button (click)=\"getSurveysAnswers()\" download=\"download.json\" type=\"button\" class=\"btn btn-info\"> Preuzmi odgovore </button>\n\n      <br />\n\n</div>\n<br/>\n</div>\n<!-- ISPIS  PITANJA -->\n<div class=\"col-6\">\n  <!-- <div class=\"question-list\" > -->\n    <div *ngFor=\"let item of survey_questions_pom\" class=\"pitanje-lista\" >\n\n    <div class=\"pitanje\">\n      <p class=\"naziv-pitanja\">&#10148; {{item.question_name}} </p>\n      <p class=\"tekst-pitanja\"> {{item.question_text}} </p>\n    </div>\n      <svg height=\"2px\" width=\"100%\">\n        <line x1=\"0\" y1=\"0\" x2=\"100%\" y2=\"0\" style=\"stroke:rgb(136,136,136);stroke-width:3\" />\n      </svg>\n\n      <div *ngFor=\"let question of item.question_choices\" class=\"odgovori\">\n        <div>\n          <p>&#10004; {{question}}</p></div>\n        <!-- <div>  {{item.question_type}}</div>\n        <div> {{item.question_choices}}</div> -->\n        <!-- <input type=\"button\" (click)=\"updateQuestion(item.question_name)\" value=\"Update\" class=\"btn btn-green\"> -->\n        </div>\n      <input type=\"button\" (click)=\"removeQuestion(item.question_name)\" value=\"Izbriši\" id=\"brisi-pitanje\" class=\"btn btn-danger\">\n\n  </div>\n\n</div>\n  <br/>\n<!-- </div> -->\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<p>\nKreirajte upitnik!\n</p>\n\n  <form>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"survey_name\" name=\"survey_name\" class=\"form-control\" id=\"dodaj\" placeholder=\"Naziv\" required>\n        <br>\n        <textarea [(ngModel)]=\"survey_description\" name=\"survey_description\" class=\"form-control\" id=\"opis\" placeholder=\"Opis\"></textarea>\n        <br>\n        <input type=\"button\" (click)=\"addSurvey($event)\" value=\"Dodaj\" class=\"btn btn-success\">\n      </div>\n    </form>\n\n\n<div class=\"survey-list\">\n  <div *ngFor=\"let survey of profile_surveys\" class=\"row\">\n    <div class=\"row_child\" >\n    Naziv: <a [routerLink]=\"['/survey', survey._id ]\" component={SurveyIdComponent} [routerLinkActive]=\"['active']\" (click)=\"clickLink(survey._id)\" >\n     {{survey.survey_name}}\n    </a><br />\n    Opis:<br />    {{survey.survey_description}}\n        <br />\n      <input type=\"button\" (click)=\"deleteSurvey(survey._id)\" value=\"Izbriši\" class=\"btn btn-danger\">\n          </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<h3>\nDobrodošli u anketu! <br />\nKoncetraciju iskoristite, na pitanja odgovorite!\n\n</h3>\n\n\n<!--   (submit)=\"getOdgovori(item.answer)\" -->\n\n<form #odgovoriForm=\"ngForm\"  (ngSubmit)=\"getOdgovori(odgovoriForm)\" >\n<!-- <form [formGroup]=\"formAnswers\" (ngSubmit)=\"getOdgovori()\" > -->\n\n\n  <div  class=\"form-group\">\n    <div *ngFor=\"let item of survey_questions\" class=\"cijelopitanje\" >\n      <!-- <label>&#10148; {{item.question_name}}<br /> -->\n      <label>&#10148; \n     {{item.question_text}}\n      </label>\n       <!-- //////////////////ODGOVORI -->\n         <!-- <div *ngFor=\"let answer of item.question_choices;  let i = index\"   [ngSwitch]=\"item.question_type\"> -->\n         <div *ngFor=\"let answer of item.question_choices;  let i = index\"   [ngSwitch]=\"item.question_type\">\n         <input *ngSwitchCase=\"'Single'\" type=\"radio\" id=\"question_name\"   [name]=\"item.question_name\"   [(ngModel)]=\"item.answer\" [value]=\"answer\"/>\n\n         <input *ngSwitchCase=\"'Multy'\" type=\"checkbox\" id=\"question_name\"    name=\"item.answer\"\n       value=\"{{item.answer}}\"  [checked]=\"item.answer\" value=\"\"\n       (change)=\"sendAnswers($event, answer,item.question_name)\">\n\n       <input *ngSwitchCase=\"'Open'\" class=\"form-control\" id=\"question_name\"  type=\"text\" [name]=\"item.question_name\"   [(ngModel)]=\"item.answer\"  />\n         <!-- <input *ngSwitchCase=\"'Open'\" id=\"question_name\"  type=\"text\" [name]=\"item.question_name\"   [(ngModel)]=\"item.answer\"  >{{item.question_type}} -->\n         <div *ngSwitchDefault>Nije pronađen tip pitanja.</div>\n\n\n\n        <span>{{answer}}</span>\n\n      </div>\n    </div>\n</div>\n\n<button type=\"submit\" class=\"btn btn-primary\">Pošalji</button>\n  <!-- <button>submit</button> -->\n  <br />\n  <br />\n</form>\n<!-- {{odgovoriForm.value | json}} -->\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ })

},[740]);
//# sourceMappingURL=main.bundle.map