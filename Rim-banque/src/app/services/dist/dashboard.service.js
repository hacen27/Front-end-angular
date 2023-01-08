"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardService = void 0;
var core_1 = require("@angular/core");
var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient, localDbService) {
        this.httpClient = httpClient;
        this.localDbService = localDbService;
        this.API_URL = "http://localhost:9000";
        this.ENDPOINT_COMPTES = "/comptes";
        this.ENDPOINT_SEARCH_COMPTES = "/searchcompte/{codecompte}";
    }
    DashboardService.prototype.getComptes = function () {
        return this.httpClient.get(this.API_URL + this.ENDPOINT_COMPTES);
    };
    DashboardService.prototype.getCount = function () {
        return this.httpClient.get('http://127.0.0.1:9000/api/counter/');
    };
    DashboardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
