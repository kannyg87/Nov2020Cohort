const express = require('express');
const router = express.Router();

// rout flight http://localhost:3000/flights/houston/ohio

router.get('/flights?/:from/:to', (req, res)=>{
    
    res.send(` Departing from ${req.params.from} Arraving from ${req.params.to}`)
}) 

module.exports = router;