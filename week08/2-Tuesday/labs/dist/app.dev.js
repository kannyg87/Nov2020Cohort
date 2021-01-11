"use strict";

// information that get sent from one computer to the next will communicate with each other with a String.
var http = require("http"); //module


var someName = require('./sample');

console.log(someName);
var server = http.createServer(function (request, response) {
  response.statusCode = 200;

  switch (request.url) {
    case '/':
      response.setHeader('Content-Type', 'text/html');
      response.end("<h1>Hello World</h1>");
      break;

    case '/aboutus':
      response.setHeader('Content-Type', 'text/html');
      response.end('<h1>About us</h1>');
      break;

    case '/data':
      response.setHeader('Content-Type', 'application/json');
      var students = [{
        firstName: "Andrea",
        lastName: "Meyer"
      }, {
        firstName: "Matt",
        lastName: "Roberts"
      }];
      var studentsStr = JSON.stringify(students);
      response.end(studentsStr);
      break;

    default:
      response.setHeader('Content-Type', 'text/html');
      response.end("You've reached an error");
      break;
  }
}); //the "port number" which is the first argument in the listen method represents where this code is runnning

server.listen(3000, function () {
  console.log("Running on port 3000");
});