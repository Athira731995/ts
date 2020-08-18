class Company{
    protected lno:string="LH10290394"
    name="ABC "

}
class Employee extends Company{
    private code="C!01"
    eid:string
    name:string
    salary:string
    constructor(eid,name,salary){
        super()
        this.eid=eid
        this.name=name  
        this.salary=salary
        console.log(this.lno)
    }
}
let obj:Employee=new Employee("101","Anna","1000000")
// console.log(obj.)
let obj1=new Company()
// obj1.lno