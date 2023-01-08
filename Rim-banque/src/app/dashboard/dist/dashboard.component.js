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
var dashboard_service_1 = require("../services/dashboard.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(localDbService, loginService, dashboardService) {
        this.localDbService = localDbService;
        this.loginService = loginService;
        this.dashboardService = dashboardService;
        this.cmpt_total = 0;
        this.counters = [];
        this.counts = {};
        this.messages = [];
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dashboardService.getComptes().subscribe(function (datas) {
            _this.comptes = datas;
            _this.cmpt_total = Object.keys(_this.comptes).length;
            console.log(datas);
            console.log("finsh *****************dashboard!", _this.comptes);
            // this.messages[0]=this.cmpt_total as unknown as string;
            console.log("nombres totals", _this.cmpt_total);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.localDbService.getRole() == 'Admin') {
            this.dashboardService.getCount().subscribe(function (data) {
                _this.counts = data;
                // console.log(this.counts);
                Object.keys(_this.counts).map(function (key) {
                    console.log(key);
                    console.log(_this.counts[key]);
                    //  this.counters[index] =this.counts[key]
                    //  this.messages[index] =key;
                    _this.counters.push(_this.counts[key]);
                    _this.messages.push(key);
                    console.log('messages', _this.messages);
                    // append(counts[k])
                });
            });
            // console.log(this.counters);
        }
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
            providers: [dashboard_service_1.DashboardService],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
