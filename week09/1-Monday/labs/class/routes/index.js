const express = require("express");
const router = express.Router();
// let dataFile = require('../data/data.json');

app.use(express.urlencoded({extended: false}));
router.use(express.jason());

router.get('/', (req, res) => {
  
    res.render('index')
})
router.post('/', (req, res) => {
  res.render('regist')
})
module.exports = router;
