const pw = require("../config")
let config = {
    host: 'localhost',
    port: 5432,
    database: 'todo2020',
    user: 'postgres',
    password: pw
}

let pgp = require('pg-promise')();

let db = pgp(config);

module.exports = db;