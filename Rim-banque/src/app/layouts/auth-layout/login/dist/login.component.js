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
    LoginComponent.prototype.message = function (message) {
        window.alert(message);
    };
    LoginComponent.prototype.loginIn = function () {
        var _this = this;
        console.log("Start Login");
        console.log(this.formLogin);
        try {
            var loginObj = {
                // username: "mohamed",
                // password: "sidi1212"
                username: this.formLogin.value.username,
                password: this.formLogin.value.password
            };
            console.log(loginObj);
            this.loginService.logIn(loginObj)
                .subscribe(function (loginResp) {
                console.log(loginResp);
                if (loginResp.token != null) {
                    sessionStorage.setItem('token', loginResp.token);
                    if (loginResp.roles) {
                        sessionStorage.setItem('userRole', JSON.stringify(loginResp.roles));
                    }
                    _this.localDbService.token = loginResp.token;
                    // this.localDbService.
                    console.log(_this.localDbService.token);
                    _this.utilService.navigateTo('');
                    console.log("last check : " + _this.localDbService.token);
                }
                else {
                    console.log(" else ========== ");
                    console.log(sessionStorage.getItem("token"));
                    _this.message("username ou le mot de pass n'est valide !");
                    _this.showError = true;
                }
            });
        }
        catch (Exception) {
            console.log(Exception);
        }
        console.log("End Login");
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
