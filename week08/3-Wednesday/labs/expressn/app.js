const express = require ('express');
const { link } = require('fs');
//invoke the fanction
const app = express()


// to link to publick
app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/about'))
app.use(require('./routes/cats'))
app.use(require('./routes/dogs'))
app.use(require('./routes/contact'))
app.use(require('./routes/data'))
app.use(require('./routes/flights'))
app.use(require('./routes/calc'))











// to use the ? having the key and value pair
// http://localhost:3000/contact?name=kanny

// app.get('/contact', (req, res)=>{
//     let userName = req.param('name')
//     console.log(userName);


//     res.send(`<h1>hello there ${userName}</h1>`)
// }) 

// in this case http://localhost:3000/contact/kannyghafour

// calaculation 
// res.send(`Adding ${req.params.num1} ${req.params.num2} equals ${req.params.num1 + req.params.num2}`)


app.listen(3000, () => {
    console.log('running on port 30000');
});