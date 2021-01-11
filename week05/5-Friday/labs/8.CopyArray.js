/* 
***Copy Array b from a and push a new element 4 into b 
*/
var a = [1, 2, 3];
var b =[...a];


console.log(a);
// [1, 2, 3];
b.push(4);
console.log(b);

//[1, 2, 3, 4];

/* 
***Copy Array d from c and push new element 6  into sub array.
*/
var c = [1, 2, 3, [4, 5]];
var d =[...c]
console.log(c)
// [1, 2, 3, [4, 5]]
d[3].push(6)

console.log(d);
// [1, 2, 3, [4, 5, 6]]

