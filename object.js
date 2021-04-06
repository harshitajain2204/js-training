//creating object

let object = {
    // properties area
    name: "harshita",
    surname: "jain",
    contact: '0000000000',
    email_address: 'harshitajain2204@gmail.com',

    // method area
    getcontact : function(){
        return this.contact;
    }

};
//object.member
console.log("name:-"+(object.name));
console.log("surname:-"+(object.surname));
console.log("contact:-"+object.getcontact());
console.log("email_address:-"+object.email_address);