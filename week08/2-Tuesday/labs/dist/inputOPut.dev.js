"use strict";

var fs = require("fs");

var prompt = require("prompt-sync")();

function readWrite() {
  var Input = prompt("Input File:");
  var Output = prompt("Output File:");
  fs.readFile(Input, function (error, buffer) {
    if (error) throw error;
    var result = buffer.toString().toUpperCase();
    fs.writeFile("".concat(Output), result, function (error) {
      if (error) throw error;
      console.log("Wrote to file ".concat(Output));
    });
  });
}

readWrite();