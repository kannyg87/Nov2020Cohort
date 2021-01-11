
//read file
const fs = require('fs');

let file = "./read.txt";
fs.readFile(file,(error,buffer) => {
    if (error){
        console.error(error.message);
return;
    }
    console.log(`file data: ${buffer.toString().toUpperCase()}`);
});