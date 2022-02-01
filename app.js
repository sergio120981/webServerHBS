
require('dotenv').config();
const express = require ('express');
const port = process.env.PORT;
const app = express();

const  hbs=require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/comun');



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'nombre',
        titulo: 'node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'nombre',
        titulo: 'node'
    });
    //res.sendFile(__dirname+'/public/generic.html');
});

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname+'/public/elements.html');
    res.render('elements', {
        nombre: 'nombre',
        titulo: 'node'
    });
});

app.get('/*', (req, res) => {
    res.send('404');
});
app.listen(port);