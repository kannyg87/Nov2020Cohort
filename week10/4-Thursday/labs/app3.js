
const express = require('express');
const app = express();
const helmet = require('helmet');
let urlencoded = function(val){
    return function(req, res, next){
        next()
    }
}
// app.use(urlencoded({extended:false})
app.use(express.static('public'));
app.use(function(req,res,next){next()});
app.use(helmet());
app.all('/' ,(req, res, next) =>{
    console.log('log some data');
    next();
});
app.get('/', (req,res) =>{
    res.send('home')
})
app.get('/', (req, res) =>{
    res.send('post')
})
app.get('/', (req, res) =>{
    res.send('put')
})
app.get('/about', (req, res) =>{
    res.send('about')
})

app.use(function(err,req))

app.listen("4000" ,() =>{
console.log('listening on 4k')
});