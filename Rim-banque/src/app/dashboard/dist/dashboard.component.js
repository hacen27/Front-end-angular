"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(localDbService, loginService, dashboardService) {
        this.localDbService = localDbService;
        this.loginService = loginService;
        this.dashboardService = dashboardService;
        this.comptes = [];
        this.messages = ['20', '200', '1900', '1500', '500'];
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dashboardService.getComptes().subscribe(function (datas) {
            _this.comptes = datas;
            console.log(datas);
            console.log("finsh *****************dashboard!");
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("Inisialiser dashboard!");
        this.dashboardService.getCount().subscribe(function (data) { return console.log(data); });
    };
    DashboardComponent.prototype.afficheToken = function () {
        console.log("la token : " + this.localDbService.token);
        this.loginService.logOut();
    };
    DashboardComponent.prototype.logout = function () {
        this.loginService.logOut();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
