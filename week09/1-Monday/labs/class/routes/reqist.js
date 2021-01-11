const express = require("express");
const router = express.Router();


router.get('/:reqist', (req, res) => {
  
    res.send('regist')
})
module.exports = router;



