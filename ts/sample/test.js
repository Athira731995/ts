var age = 17;
var result = age >= 18 ? "Eligible" : "ineligible";
console.log(result);
// function add(a:number,b:number):number{
//     console.log(a+b)
//     return a+b
// }
// add(10,20)
var add = function (a, b) {
    return a + b;
};
var sub = function (a, b) {
    return a - b;
};
// let result1=add(1,2)
// console.log(result1)
// delete result1
// function calculate(f,a,b){
//   console.log(f(a,b))
// }
// calculate(add,10,20)
// calculate(add,1,2)
function calulate(opr) {
    if (opr == "+") {
        return add;
    }
    if (opr == '-') {
        return sub;
    }
}
var f = calulate("+");
console.log(f(10, 20));
var f1 = calulate("-");
console.log(f1(10, 5));
function getValues(args) {
    console.log("value =", args);
}
getValues(1);
getValues("Good morning");
//rest parameter
function getNumbers() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.table(args);
}
getNumbers(1, 2, 33, 44, 55);
