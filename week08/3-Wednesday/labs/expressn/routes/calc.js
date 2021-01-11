const express = require('express');
const router = express.Router();

router.get('/calc?/:num1/:num2', (req, res)=>{
    
    // res.send(` The sum of  ${req.params.num1} + ${req.params.num2} ${req.params.num1 + req.params.num2}`)
    // res.send(`Adding ${req.params.num1} ${req.params.num2} equals ${req.params.num1 + req.params.num2}`)
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = parseInt(num1) + parseInt(num2);
    res.send(`Result of adding ${num1} and ${num2} is ${sum}`)

    
// adam solution
// app.get('/calculate/:num1/:num2', (req, res) => {
//     let num1 = req.params.num1;
//     let num2 = req.params.num2;
//     let sum = parseInt(num1) + parseInt(num2);
//     res.send(`Result of adding ${num1} and ${num2} is ${sum}`)
// })
})

module.exports = router;