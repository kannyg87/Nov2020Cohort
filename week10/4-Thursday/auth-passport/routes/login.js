const express = require("express")
const router = express.Router();

router("/login", (req,res) => {
    res.send("homepage");
    
})

module.exports =router;