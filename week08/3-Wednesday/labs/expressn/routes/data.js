const express = require('express');
const router = express.Router();

// http://localhost:3000/dogs/0
let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

router.get('/dogs/:id',(req, res)=>{
    let id = req.params.id
    res.send(`
    
    <h1>hello there ${data.data[id].name}</h1>

    <ul>
        <li> <a href = "/dogs/0>${data.data[0].name}  </a> </li>
        <li> <a href = "/dogs/1>${data.data[1].name}  </a> </li>
        <li> <a href = "/dogs/2>${data.data[2].name}  </a> </li>
        <li> <a href = "/dogs/3>${data.data[3].name}  </a> </li>
    </ul>

    <img height = "300px" src = " ${data.data[id].img}" >
    
    `)
    
}) 

module.exports = router;