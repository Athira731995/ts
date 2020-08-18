var AgriLoan = /** @class */ (function () {
    function AgriLoan(interset, rebate) {
        this.interest = interset;
        this.rebate = rebate;
    }
    AgriLoan.prototype.getDetails = function () {
        console.log("interest rate is", this.interest);
        console.log("rebate rate", this.rebate);
    };
    return AgriLoan;
}());
var o1 = new AgriLoan(.5, .2);
console.log(o1.getDetails());
