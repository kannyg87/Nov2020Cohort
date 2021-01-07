const express = require('express');
const router = express.Router();
//because it is up on dir
let dataFile = require('../data/data.json')

router.get('/', (req,res)=>{
    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];
    pageSpeakers.forEach(speakersObj =>{
        pagePhotos = pagePhotos.concat(speakersObj.artwork)
    })
    console.log(pagePhotos);

    res.render('index',{
        photos:pagePhotos
    })


module.exports = router;