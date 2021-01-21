// pass word


const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = "some user password";

let salt = crypto.randomBytes(20).toString('hex');


let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');



let hash = key.toString('hex');


let stored_pass =`pbkdf2_sha256*3600*${salt}*${hash}`;


let pass_parts =stored_pass.split('*');


let newPassword = 'some user password';

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

let hashNewLogin = keyNewLogin.toString('hex');

if(hashNewLogin ===pass_parts[3]){

    console.log('Password match');

}
else{
    console.log('try agian!');
}

