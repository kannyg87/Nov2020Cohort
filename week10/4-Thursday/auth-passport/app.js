const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(helmet());

app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));






app.listen(3000, () => {

    console.log('listening on port 3000');
})