interface IPolygon{
    name:string

}
interface ISAmple{
    test:number

}
interface Ishape  extends IPolygon,ISAmple{
    sides:number
    area():number
    getName():string
}

class Square implements Ishape{
    test:number=124
    sides:number
    side:number
    name="square"
    constructor(sides:number,length:number){
        this.sides=sides
        this.side=length

    }
    area():number{
        return this.side**2 
    }
    getName():string{
        return "Its a Square"

    }

}
class Rectangle implements Ishape{
    sides:number
    l:number
    b:number
    constructor(sides:number,length:number,breadth){
        this.sides=sides
        this.l=length
        this.b=breadth

    }
    area():number{
        return this.l*this.b
    }
    getName():string{
        return "Its a Rectangle"

    }

}


