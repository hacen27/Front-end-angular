"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var forms_1 = require("@angular/forms");
var navbar_component_1 = require("./components/navbar/navbar.component");
var dash_bord_container_component_1 = require("./components/dash-bord-container/dash-bord-container.component");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var history_component_component_1 = require("./history-component/history-component.component");
var admin_component_1 = require("./layouts/auth-layout/admin/admin.component");
var login_component_1 = require("./layouts/auth-layout/login/login.component");
var http_1 = require("@angular/common/http");
var login_service_1 = require("./services/login.service");
var register_component_1 = require("./layouts/auth-layout/register/register.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                // HomeComponent,
                // SingupComponent,
                // LoginComponent,
                dashboard_component_1.DashboardComponent,
                // DashCardComponent,
                navbar_component_1.NavbarComponent,
                dash_bord_container_component_1.DashBordContainerComponent,
                side_bar_component_1.SideBarComponent,
                history_component_component_1.HistoryComponentComponent,
                admin_component_1.AdminComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            providers: [login_service_1.LoginService],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
