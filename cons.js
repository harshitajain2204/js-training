//class defination
class First {
    // 1 properties
    contact = {};
    // 2 constructor
    constructor(o) {
        console.log("hello from constructor");
        this.contact=o;
        //calling method using internal obj
        this.getcontact();

    }
    // 3 method
    getcontact() {

        console.log(this.contact);
    }



}//end of class first
//creating object of class first
//let obj=new classname();
let m = {
    name: "harshita",
    sub: "java Script",
    contact: "00000000",
};
let n=new First(m);
n.getcontact();
