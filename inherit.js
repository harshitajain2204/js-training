//class defination
class Inherit {
    //1 properties

    //2 constructor
    constructor() {


    }

    //3 method
    funb() {
        console.log("this is funb");
    }

}// end of class inherit

class A extends Inherit {
    //1 properties
    //2 constructor
    constructor() {
        super();

    }
    //3 method
    funa() {
        console.log("this is funa");
        this.funa();
        this.funb();
    }
}//end of class a
//creating an object of child class a
let obj = new A();
//calling method of parent class using child class object
obj.funb();
obj.funa();