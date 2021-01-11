const fs = require('fs');

// let file = "./stack.js";
// fs.readFile(file,(error,buffer) => {
//     if (error){
//         console.error(error.message);
// return;
//     }
//     console.log(`file data: ${buffer.toString()}`);
// });

let filename = './test.txt'
fs.writeFile(filename, "I love node",(error) => {
    if(error){
        console.error(error.message);
        return;
    
    }
    console.log("file saved ar", filename);
})