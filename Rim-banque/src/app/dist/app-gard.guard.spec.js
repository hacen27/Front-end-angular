"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var app_gard_guard_1 = require("./app-gard.guard");
describe('AppGardGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(app_gard_guard_1.AppGardGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
