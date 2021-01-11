"use strict";

var dns = require('dns');

dns.lookup('yahoo.com', function (err, address, family) {
  console.log('address: %j family: IPv%s', address, family);
}); // 2. DNS lookup from input Clude
// const dns = require('dns');
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//     });
// readline.question('Domain name: ', name => {
//     dns.lookup(`${name}`, (err, address) => {
//         if (err) {
//             console.log("invalid domain");
//         }
//         console.log(`${address}`);
//     });
// });