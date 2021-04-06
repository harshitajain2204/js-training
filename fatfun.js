//fat arrow function
fatfun = () => {
    return "hello from fatfun";

}
let x = fatfun();
console.log(x);

//normal function
function f1() {
    console.log("this is normal function");
}
//function calling
f1();
//fat arrow function

fatfun1 = (m) => {
    return `hello from ${m}`;
}
const n = fatfun1("fatfun1");
console.log(n);

//class defination
class C1 {
    //1 properties
    g=100;
    h=200;
    //2 constructor
    //3 method
    //normal function

    f2() {
        console.log("sum is:-"+(this.g+this.h));

    }


}
// creating object
let i=new C1();
i.f2(); 
//class defination
class C2 extends C1{
    //1 properties
    //2 constructer
    //3 method
    fatfun2 =()=>{
        return `multiplication:- ${this.g*this.h}`;
    }
}
//creating object of class C2
let a=new C2;
let z = a.fatfun2();
console.log(z);
