"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, localDbService, formBuilder, utilService) {
        this.loginService = loginService;
        this.localDbService = localDbService;
        this.formBuilder = formBuilder;
        this.utilService = utilService;
        this.formLogin = {};
        //   myGroup = new FormGroup({
        //     firstName: new FormControl()
        // });
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formLogin = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        console.warn('EERRERERERERE');
    };
    LoginComponent.prototype.loginIn = function () {
        var _this = this;
        var loginObj = {
            username: this.formLogin.value.username,
            password: this.formLogin.value.password
        };
        this.loginService.logIn(loginObj)
            .subscribe(function (loginResp) {
            console.log(loginResp);
            if (loginResp.key) {
                _this.utilService.navigateTo('apropos');
                _this.localDbService.token = "Token " + loginResp.key;
            }
            else {
                console.log(" else ========== ");
                _this.showError = true;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
