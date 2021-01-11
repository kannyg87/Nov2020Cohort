// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.




// const reducer = (...arg) => accumulator + currentValue;
// console.log(reduce(1,2));
// var Sum= (...agr) => ()

let sum = (...args) =>{
    let sum = 0;
    sum= args.reduce((acc,val)=> {
        return acc+val
    },0)
    return sum;
}

sum(1,3);
sum(10, 20, 5);


