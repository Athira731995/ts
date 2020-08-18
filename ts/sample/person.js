var Person = /** @class */ (function () {
    function Person(Name, age, address) {
        this.name = Name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var p1 = new Person("Anna", 18, "H101");
var p2 = new Person("Anna", 18, "H101");
console.log(p1 == p2);
console.log(p1 === p2);
console.log(typeof p1);
console.log(p1 instanceof Person);
console.log(p1 instanceof String);
