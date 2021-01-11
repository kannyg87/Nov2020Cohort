"use strict";

var prompt = require('prompt-sync')();

var url = prompt('What is your website URL?');
var fileName = prompt('What is the name of the file you want to save the data to?');

var request = require('request');

var fs = require('fs');

request.get(url, function (error, response, body) {
  if (error) {
    console.log(error.message);
    return;
  }

  fs.writeFile(fileName, body, function (error) {
    if (error) {
      console.log(error.message);
      return;
    }

    console.log("HTML saved to file:", fileName);
  });
});