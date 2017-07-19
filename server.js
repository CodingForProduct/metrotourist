const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

//Require Schemas
// var Article = require('./server/model.js');

const app = express();
const PORT = process.env.PORT || 3001; // Sets an initial port. used later in listener at bottom of page



app.use(cors());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// app.use(express.static('./public'));


// MongoDB Configuration configuration
// mongoose.connect('mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


// separate routes forward planned.
// require('./app/routing/api-routes.js')(app); 
// require('./app/routing/html-routes.js')(app);


app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

//array of tours
const tourOptions = [
  { id: 1, name: "Hollywood", destinations: ["HardRock", "Chinese Theater", "Walk of Stars"]},
  { id: 2, name: "Downtown LA", destinations: ["Pershing Square", "Angel's Flight"]},
  { id: 3, name: "Santa Monica", destinations: ["The Pier", "3rd Street Promenade"] },
  { id: 4, name: "Culver City", destinations: ["Culver Hotel", "The Culver City Stairs", "Baldwin Hills Scenic Overlook"]},
];

// display list of users
app.get('/tours', function (request, response) {
    response.status(200)
  .send(tourOptions);
});

    
app.get('/add', function (req, res) {
    res.status(200)
    .send({
        sum: parseInt(req.query.a) + parseInt(req.query.b)
    });
});

// start server on port

app.listen(3001, function () {
    console.log('Metrotourist app listening on port: ' + PORT)
});

module.exports = app;
