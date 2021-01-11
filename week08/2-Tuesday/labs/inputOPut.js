const fs = require("fs");
const prompt = require("prompt-sync")();
function readWrite(){
    let Input = prompt("Input File:");
    let Output = prompt("Output File:");
    fs.readFile(Input,(error, buffer) => {
        if (error) throw error;
    let result = buffer.toString().toUpperCase();
    fs.writeFile(`${Output}`, result, (error) => {
        if (error) throw error; 
      console.log(`Wrote to file ${Output}`)
        });
    });
}
readWrite();