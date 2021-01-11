"use strict";

var fs = require('fs');

var file = "./read.txt";
fs.readFile(file, function (error, buffer) {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log("file data: ".concat(buffer.toString().toUpperCase()));
});