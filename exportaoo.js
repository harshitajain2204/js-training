//export array of object
let array=[
    {
        //1 property
        name:'A',

        //2 method
        getName:()=>{
            return this.name;
        }

    },
    {
         //1 property
         name:'B',

        //2 method
        getName:function(){
            return this.name;
        }

    },
    {
         //1 property
         name:'C',


        //2 method
        getName:function(){
            return this.name;
        }

    }]//end of array of obj
    //object.property={};
    module.exports=array;