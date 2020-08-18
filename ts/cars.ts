export class Car{
    engine:string[]
    constructor(engine:string[]){
        this.engine=engine
    }
    getEngine(){
        return this.engine
    }
    add(x,y){
        return x+y

    }
    getMilage(distance,liters){
        return distance/liters
    }
}