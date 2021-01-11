
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10,5, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPlusMinus() {
    var sum = 0;
    for (var val of nums){
        if( val>=0){
            sum =+ val}
            return sum;
        } 
    }

console.log(sumPlusMinus(nums));


