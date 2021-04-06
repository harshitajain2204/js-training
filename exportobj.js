//export object
class B{
    //1 property
    name='harshita';
    surname="jain";

    //2 constructor

    //3 method
    getname(){
        console.log(this.name);
    }
    getsurname(){
        console.log(this.surname);
    }
}//end of class B
//creating object of class B
let x=new B;
// exporting object
//object.property={}
module.exports=x;