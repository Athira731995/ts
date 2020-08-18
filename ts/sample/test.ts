let age=17
var result=age>=18?"Eligible":"ineligible"
console.log(result)

// function add(a:number,b:number):number{
//     console.log(a+b)
//     return a+b
    
// }
// add(10,20)
let add=function(a:number,b:number):number{

    return a+b

}
let sub=function(a:number,b:number){
    return a-b
}
// let result1=add(1,2)
// console.log(result1)
// delete result1
// function calculate(f,a,b){
//   console.log(f(a,b))
// }
// calculate(add,10,20)
// calculate(add,1,2)


function calulate(opr){

    if(opr=="+"){
        return add
    }
    if(opr=='-'){
        return sub
    }
}
let f=calulate("+")
console.log(f(10,20))
let f1=calulate("-")
console.log(f1(10,5))

function getValues(args:number|string|boolean){
    console.log("value =",args)

}
getValues(1)
getValues("Good morning")
//rest parameter
function getNumbers(...args:number[]){
    console.table(args)
}    

getNumbers(1,2,33,44,55)