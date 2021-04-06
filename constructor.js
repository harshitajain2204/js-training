//class defination
class c {
    //1 properties
    name = " ";


    //2 constructor
    constructor() {
        this.name = "harshita";

    }


    //3 method
    fun1() {
        console.log(`this is fun1 ${this.name}`);
        this.fun2();
    }
    fun2() {
        console.log("this is fun2");
    }


}//end of class c
//creating object of class c
//let obj = new classname();
let x = new c();
x.fun1();