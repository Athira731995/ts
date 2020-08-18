class Employee{
    constructor(id:string,name:string,salary:number){   
        this.eid=id
        this.name=name
        this.salary=salary

    }
    eid:string;name:string;salary:number;
incSalary(amount:number):number{

        this.salary+=amount

        return this.salary

    }



}


let    e1=new Employee("101","Anna",1000000)

let i:number=100
let s:string=<string><any>i
console.log(s,typeof s)








