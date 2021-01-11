const express = require('express');
const router = express.Router();

router.get('/about', (req, res)=>{
    
    res.send(` <link rel= "stylesheet" href ="css/global.css">
    <h1> about as express</h1>`)
})

module.exports = router;