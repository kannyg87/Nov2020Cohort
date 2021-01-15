
const express = require('express');
const app = express();
const socket = require('socket.io');


const PORT = 3000

//ejs
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.render('index')
    
})
//public
//app.use(express.static('public'))

//route references
//app.use(require('./routes/index'))
//app.use(require('./routes/aboutus'))

let server = app.listen(PORT, () => {
  
    console.log(`listening on port ${PORT}`);
})
//npm install body-parser
let io = socket(server);
io.on('connection',(socket)=>{

    socket.emit('chatMessage', {msg:"hello from our backend"})
    socket.on('msgFromClient', (msgClient)=>{
        io.emit('msgFromServer', msgClient)
    })
})