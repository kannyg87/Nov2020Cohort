// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

function isNumber(a) {
    if (typeof a === "number") {
        return "that's a number";
    }
    else {
        return "That's not a number";

    }

    var isNumber = a => typeof (a)=="number"? "hat is a number" : "that os not a number"

    console.log( "(a==number) ? that is a number : that os not a number");
}
console.log(isNumber(10));
console.log(isNumber('hey there'));
console.log(isNumber(true));

let isNumber = a=> typeof(a) =="number"? that is a number : that os not a number"


