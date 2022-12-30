"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, 
    // private route: ActivatedRoute,
    // private router: Router,
    utilService, registerService) {
        this.formBuilder = formBuilder;
        this.utilService = utilService;
        this.registerService = registerService;
        this.form = {};
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngAfterViewInit = function () {
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            username: ['', forms_1.Validators.required],
            telephone: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var userObj = {
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            username: this.form.value.username,
            telephone: this.form.value.telephone,
            email: this.form.value.email,
            password: this.form.value.password,
            confirmPassword: this.form.value.confirmPassword
        };
        // reset alerts on submit
        // this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.registerService.register(userObj)
            .subscribe(function (registerResp) {
            console.log(registerResp);
            // / registerResp.key maybee is not definitive 
            // try some thing link registerResp.status ==200 or some thing like that 
            if (registerResp.key) {
                _this.utilService.navigateTo('login');
                // this.localDbService.token = "Token " + loginResp.key;
            }
            else {
                console.log(" else ========== ");
                // this.showError = true;
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
