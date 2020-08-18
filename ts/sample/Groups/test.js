///<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Drawing a circle");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
///<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    var Square = /** @class */ (function () {
        function Square() {
        }
        Square.prototype.draw = function () {
            console.log("Drawing a Square");
        };
        return Square;
    }());
    Drawing.Square = Square;
})(Drawing || (Drawing = {}));
///<reference path="IShape.ts"/>
///<reference path="circle.ts"/>
///<reference path="square.ts"/>
function DrawSahpes(obj) {
    obj.draw();
}
var o1 = new Drawing.Circle();
DrawSahpes(o1);
var o2 = new Drawing.Square();
DrawSahpes(o2);
