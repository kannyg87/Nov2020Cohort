const express = require('express');
const router = express.Router();

// in this case http://localhost:3000/contact/kannyghafour
router.get('/contact/:name', (req, res)=>{
    let userName = req.params.name
    console.log(userName);
    res.send(`<h1>hello there ${userName}</h1>`)
}) 

module.exports = router;