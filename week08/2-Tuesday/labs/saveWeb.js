const prompt = require('prompt-sync')();
const url = prompt('What is your website URL?');
const fileName = prompt('What is the name of the file you want to save the data to?')
const request = require('request');
const fs = require('fs');
request.get(url, function(error,response,body){
    if(error){
        console.log(error.message);
        return;
    }
    fs.writeFile(fileName, body, (error) => {
        if(error){
            console.log(error.message);
            return;
        }
        console.log("HTML saved to file:", fileName);
    })
});