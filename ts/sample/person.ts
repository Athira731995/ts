class Person{

    name:string
    age:number
    address:string
    constructor(Name:string,age:number,address:string){
        this.name=Name
        this.age=age
        this.address=address
    }


}
let p1=new Person("Anna",18,"H101")
let p2=new Person("Anna",18,"H101")
console.log(p1==p2)
console.log(p1===p2)
console.log(typeof p1)
console.log(p1 instanceof Person)
console.log(p1 instanceof String)