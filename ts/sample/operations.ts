function display(x:string):void;
function display(x:number,y:string):void;
function display(x:any,y?:any):void{
   console.log(x);
   console.log(y);
}
display("hello")
display(123,"world")
