//export inhereted class
//class defination
class A {
    //1 properties
    name = 'harshita'
    //2 constructor
    //3 method
    myname(){
        console.log('name:-' +this.name);
    }

}//end of class A
class B extends A{
    // 1 properties
    surname='jain';
    //2 constructor
    //3 method
    mysurname(){


        return(this.name);
    }

}//end of class B

//creating object of child class B
//let obj=new classname();
let obj=new B();
console.log(obj.surname);
//export class B
//object.property={};
module.exports=B;