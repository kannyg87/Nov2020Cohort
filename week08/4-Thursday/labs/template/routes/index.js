const express = require('express');
const router = express.Router();
const axios = require('axios');

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]

let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]

let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]

router.get('/', (req, res) => {
    axios.get('https://corona.lmao.ninja/v2/states')
    .then(data =>{
        console.log(data);
    })

    res.render('index', {
        pic: pictures
    })

    // res.render('index', {
    //     pic1: pictures[0],
    //     pic2: pictures[1],
    //     pic3: pictures[2],
    //     Atlanta: cities[0],
    //     Houston: cities[1],
    //     Seattle: cities[2],


    // })
    
    // res.render('index', {
    //     firstName: "Michael",
    //     lastName: "Jackson"

    // })   
})

router.get('/:id', (req, res) => {
  
    let id = req.params.id;
    res.render('index', {
        pic: pictures[id],
        names: nameArr
    })
})



module.exports = router;


// router.get('/index' ,(request, response) =>{
    // response.send("who will win the battle?");
    //res.render(veiw, obj) The objec has key value pairs
        // response.render('index', {
        //     firstName: "Matthew",
        //     lastName: "Roberts"
        // })
    // response.render('index', {
    //     pic1: pictures[0],
    //     pic2: pictures[1],
    //     pic3: pictures[2], 
    //     city1: cities[0],
    //     city2: cities[1],
    //     city3: cities[2],
    //     city4: cities[3],
    // })
   