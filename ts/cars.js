"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    Car.prototype.add = function (x, y) {
        return x + y;
    };
    Car.prototype.getMilage = function (distance, liters) {
        return distance / liters;
    };
    return Car;
}());
exports.Car = Car;
