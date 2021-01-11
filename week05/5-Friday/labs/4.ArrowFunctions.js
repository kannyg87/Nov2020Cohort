// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

var mult= (a,b)=>a*b;


setTimeout(function () {
    
}, 1000)

var setTimeout = (() =>{
    console.log(mult(5, 10));
},100)

