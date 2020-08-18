"use strict";
exports.__esModule = true;
var cars_1 = require("./cars");
var chai_1 = require("chai");
// import {it} from 'mocha'
describe("testing the class Car", function () {
    it("Should run the method getEngine", function () {
        var obj = new cars_1.Car(["1.1 Liter"]);
        chai_1.expect(obj.getEngine()[0]).to.equal("1.1 Liter");
    }),
        it("Validating The method add", function () {
            var obj = new cars_1.Car(["1.1 Liter"]);
            chai_1.expect(obj.add(3, 4)).to.equal(7);
        });
    it("Validating the milage", function () {
        var obj = new cars_1.Car(["1.1 Liter"]);
        // expect(obj.getMilage(5000,100)).to.equal(50)
        chai_1.assert.equal(obj.getMilage(1000, 100), 10);
    });
});
