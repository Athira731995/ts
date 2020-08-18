class User{



        constructor(uname:string,password:string)
        {
            this.username=uname
            this.password=password
        }
    username:string;
    password:string;
        display(){
            console.log(this.username)

        }


}
let obj=new User("Anna","abcd")
let obj1=new User("Annu","wwww")

console.log(obj.username)