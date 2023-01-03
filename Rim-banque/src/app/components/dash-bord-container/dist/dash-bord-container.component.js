"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashBordContainerComponent = void 0;
var core_1 = require("@angular/core");
var dash_card_component_1 = require("../dash-card/dash-card.component");
var DashBordContainerComponent = /** @class */ (function () {
    // @Inject(cfr: ComponentFactoryResolver)
    function DashBordContainerComponent(viewContainerRef, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        /**
         *
         */
        // @ViewChild(NavbarComponent) navbarComponent!:NavbarComponent ;
        this.messages = ['20', '200', '1900', '1500', '500'];
        this.componentList = [];
        // super();
        this.messageContainer = viewContainerRef;
    }
    DashBordContainerComponent.prototype.ngOnInit = function () {
        // this.loadNewDashComponentToList();
        console.log(this.messageContainer);
    };
    DashBordContainerComponent.prototype.ngAfterViewInit = function () {
        console.log('this.dashComponents', this.dashCardComponents.length);
        // this.loadNewDashComponentToList();
    };
    DashBordContainerComponent.prototype.createComponent = function (compClass) {
        // const compFactory = this.cfr.resolveComponentFactory(compClass);
        return this.viewContainerRef.createComponent(compClass);
    };
    DashBordContainerComponent.prototype.loadNewDashComponentToList = function () {
        var _this = this;
        this.messages.forEach(function (msg, idx) {
            // this.destroyCompFromList(this.componentList[idx]);
            var comp = _this.createComponent(dash_card_component_1.DashCardComponent);
            console.log(comp);
            // const div = this.renderer.createElement('div');
            // this.renderer.addClass(div,'col-lg-4 col-md-6 mb-4')
            // (comp.instance as any).counter = msg;
            comp.setInput('counter', msg);
            // this.renderer.appendChild(div, comp);
            // comp.instance = this.viewContainerRef
            // comp.changeDetectorRef.detectChanges();
            _this.componentList[idx] = comp;
        });
    };
    __decorate([
        core_1.ViewChildren(dash_card_component_1.DashCardComponent)
    ], DashBordContainerComponent.prototype, "dashCardComponents");
    __decorate([
        core_1.ViewChild('messageContainer', { read: core_1.ViewContainerRef, static: true })
    ], DashBordContainerComponent.prototype, "messageContainer");
    __decorate([
        core_1.Input()
    ], DashBordContainerComponent.prototype, "componentList");
    DashBordContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-dash-bord-container',
            templateUrl: './dash-bord-container.component.html',
            styleUrls: ['./dash-bord-container.component.css']
        })
    ], DashBordContainerComponent);
    return DashBordContainerComponent;
}());
exports.DashBordContainerComponent = DashBordContainerComponent;
