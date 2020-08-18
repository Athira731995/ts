///<reference path="IShape.ts"/>
///<reference path="circle.ts"/>
///<reference path="square.ts"/>

function DrawSahpes(obj){
    obj.draw()
}
let o1:Drawing.Circle=new Drawing.Circle()
DrawSahpes(o1)
let o2:Drawing.Square=new Drawing.Square()
DrawSahpes(o2)