//array
let x = ["harshita", //string   index 0
    21, //integer       index 1
    5.2, //float        index 2
    ["jain"],//array of array  index 3
    { MyName: "harshita" },//object    index 4
    [                                   //index 5
        {
            fatherName: "ramesh", //properties
            motherName: "indra",

        }, {
            //properties
            'brother': "trilok",
             "sister":"minakshi",
             //method
             sibling: function(){
                 return this.brother;
                 
             }


        }]//array of object
]//end of array
console.log("name:-",x[0], "age:-", x[1], "float:-", x[2],"surname:-", x[3],x[4].MyName );
console.log("sibling:-", x[5][1].brother,",", x[5][1].sister);
console.log("parents:-", x[5][0].fatherName,",", x[5][0].motherName);
console.log(x[5][1].sibling());
//console.log(x);