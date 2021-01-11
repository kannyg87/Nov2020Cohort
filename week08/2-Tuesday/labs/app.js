// information that get sent from one computer to the next will communicate with each other with a String.

const http = require("http");
//module
const someName = require('./sample');
console.log(someName);



const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    switch(request.url){
        case '/':
            response.setHeader('Content-Type', 'text/html');
            response.end(`<h1>Hello World</h1>`)
            break;
        case '/aboutus':
            response.setHeader('Content-Type', 'text/html');
            response.end('<h1>About us</h1>')
            break;
        case '/data':
            response.setHeader('Content-Type', 'application/json');
            let students = [{firstName: "Andrea", lastName: "Meyer"}, {firstName:"Matt", lastName: "Roberts"}];
            let studentsStr = JSON.stringify(students);
            response.end(studentsStr);
            break;
        default:
            response.setHeader('Content-Type', 'text/html');
            response.end( `You've reached an error`)
            break;
    }
});

//the "port number" which is the first argument in the listen method represents where this code is runnning
server.listen(3000, ()=>{
    console.log("Running on port 3000");
})
