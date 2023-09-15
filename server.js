
const express = require('express');
const socketIO = require('./utils/socket');
const app = express();


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})


const port = process.env.PORT || 3000;

const server = app.listen(port, () => { 
    console.log(`Server is Running!!`) 
});

const io = socketIO(server);





