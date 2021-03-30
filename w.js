let m= "actual arguement"; //global variable
//function declaration

function formal(n) //formal parameter

{
    console.log( n+", formal arguement");
    
    //local variable
    let a= 27;
    const b= 22;
    console.log(a*b);
    console.log(a/b);
}

//function calling
formal(m); //actual parameter