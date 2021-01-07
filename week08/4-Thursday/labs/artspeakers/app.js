const express = require ('express')
const app = express();

app.set('view engine', 'ejs')


app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


app.listen(3000); 
console.log('listining on port 3000')