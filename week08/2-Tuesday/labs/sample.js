let name ="kanny"

// let log = require('./log');


// log.info("this is a great day")
// log.warning("polotion is a bit hight")
// log.error("what are you doing stop it")



let stack = require('./stack')
let stack1 = new stack();
stack1.push(3)
stack1.push(30)
stack1.push(39)
stack1.push(355)
console.log(stack1.peek());


const superheroes = require('superheroes');
 
superheroes.all;

console.log(superheroes.all);
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'