var Name="Athira"
let num:number=123
let x;
let y:boolean;
let z:string='welcome'
console.log(Name,typeof Name)
// let k:number="abc"
// console.log(k,typeof k)
number:function add(x:number,y:number){

    return x+y

}

console.log(add(10,30))

// add("a","b")

//type assertions
let a=123
let s:string=<string><any>a
