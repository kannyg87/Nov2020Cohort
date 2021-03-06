
const express = require('express');
const app = express();
const pw = require("./congig")


const PORT = 3000

//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))

const config = {
    host: 'localhost',
    port: 5432,
    database: 'employees_database',
    user: 'postgres',
    password :pw
};


let pgp = require('pg-promise')();
let db = pgp(config);
console.log(db);

db.query(`SELECT * FROM employees.department`)
  .then(records => {
    console.log(records);
  })






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
//npm install body-parser