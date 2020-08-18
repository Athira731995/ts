// class Person{
//     constructor(){
//         console.log("constructor called")
//     }

//     name:string="Anna"
//     age:number=12
//     address:string="H101 ,EKM"
//     view(){
//         console.log("member function")
//     }

// }

// let obj=new Person()
// console.log(obj,typeof obj)
class Person{
    constructor(name:string,age:number,address:string){
        this.Name=name
        this.Age=age
        this.Address=address
    }
    Name:string
    Age:number
    Address:string
    view(){
        console.log("Name ",this.Name)
        console.log("Age ",this.Age)
        console.log("Address ",this.Address)
    }
}
let p1=new Person("Rose",34,"H101 NYC")
let p2=new Person("Anna",30,"H102 NYC")
let p3=new Person("Bibin",31,"H103 NYC")
// console.log(p1.Name)
// console.log(p2.Address)
p1.view()
console.log("*********************")
p2.view()


