const express = require("express");
const router = express.Router();
const authReq = require('../auth');

router.get("/", (req, res) => {
  res.send("home page");
});

router.get('/protected', authReq, (req, res) => {
  console.log('authentiated');
  res.send('protected')
})

router.get('/error', (req, res) => {
  
  res.send('error')
})

router.get('/logout', (req, res) => {
  //session is cleared
  req.logout();

  res.redirect('/')
})

module.exports = router;
