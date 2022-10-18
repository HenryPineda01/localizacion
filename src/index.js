const express = require('express');

const engine = require('ejs-mate');
const path = require('path');
const { dirname } = require('path');
const { json } = require('express/lib/response');
// inicializacion
const app = express();

//settings

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));   
// routes
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(require('./routes'));
app.use(express.static(path.join(__dirname,'public'))); 
//Staring the server
app.listen(4000,() => {
    console.log('Server On Run Port 4000');
});