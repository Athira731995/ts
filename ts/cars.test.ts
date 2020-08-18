import {Car  } from "./cars";
import {expect,assert} from 'chai'
// import {it} from 'mocha'
describe("testing the class Car",()=>{
    it("Should run the method getEngine",()=>{

        let obj=new Car(["1.1 Liter"])
        expect(obj.getEngine()[0]).to.equal("1.1 Liter")


    }),
    it("Validating The method add",()=>{
        let obj=new Car(["1.1 Liter"])
        expect(obj.add(3,4)).to.equal(7)
    })
    it("Validating the milage",()=>{
        let obj=new Car(["1.1 Liter"])
        // expect(obj.getMilage(5000,100)).to.equal(50)
        assert.equal(obj.getMilage(1000,100),10)
    })

})