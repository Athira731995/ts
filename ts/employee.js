var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.eid = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.incSalary = function (amount) {
        this.salary += amount;
        return this.salary;
    };
    return Employee;
}());
var e1 = new Employee("101", "Anna", 1000000);
var i = 100;
var s = i;
console.log(s, typeof s);
