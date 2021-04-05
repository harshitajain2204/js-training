//creating array
var cat=['jenny', 'catta'];
let kitten=['snowie','brownie',];  
let tom=['chotu','laddu','chillu'];
const jerry=['mouse'];
const bigcat=['lion','tiger','leopard'];
//using fat arrow fn
kitten.forEach(y=>{  //y is formal arg
    console.log(y);

});
cat.forEach(catlover);

function catlover(x){   
    console.log(x);
}
tom.forEach(baby=>{  //baby is formal arg

    console.log(baby);
});
jerry.forEach(z=>{ //z is formal arg
    console.log(z);
});
bigcat.forEach(bc);
function bc(l){
    console.log(l);

}


