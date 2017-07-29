const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const dbConnect = process.env.REACT_APP_SECRETDB;
const mongoLab = process.env.REACT_APP_MONGOLAB_URI;
const dotenv = require('dotenv');


const app = express();
const tests = require('./routes/tests');


app.use(cors());

//!important place the app.use call ABOVE the routes call
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// --------Static files --------------
// get reference to the client build directory CRAE
// const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// app.use(staticFiles)  CRAE
// pass the static files (react app) to the express app.

// const staticFiles = express.static(path.join(__dirname, 'public'));
// app.use('/*', staticFiles); //for deployment maybe
app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static('./public'));



// ----- MongoDB Configuration configuration -----
mongoose.Promise = global.Promise;
const URI = mongoLab;

//||'mongodb://localhost/metrotourist'; //, ({useMongoClient:true})

// mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true })
//stackoverflow: mongoose.MongoClient.connect  Cannot read property 'connect' of undefined
mongoose.connect(URI, function(err,res){
  if (err){
    console.log("Error connecting to " + URI + "  "+ err);
  }else{
    console.log("Succeeded conneted to " + URI);
  }
});

// --------Routes-------------

//Hello World route '/' to be removed
app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

//array of tours --
const tourOptions = [
  { id: 1, name: "Hollywood", destinations: ["HardRock", "Chinese Theater", "Walk of Stars"]},
  { id: 2, name: "Downtown LA", destinations: ["Pershing Square", "Angel's Flight"]},
  { id: 3, name: "Santa Monica", destinations: ["The Pier", "3rd Street Promenade"] },
  { id: 4, name: "Culver City", destinations: ["Culver Hotel", "The Culver City Stairs", "Baldwin Hills Scenic Overlook"]},
];

// display list of tours
app.get('/tours', function (request, response) {
    response.status(200)
  .send(tourOptions);
});

// ---------initialize api routes---------
app.use('/api', require('./routes/api_routes'));
app.use('/api/tests', tests);


//AFTER routes! Error handler
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message });
});

const PORT = process.env.PORT || 3001; // Sets an initial port.
// app.listen(PORT, function() etc)
app.listen(PORT, function () {
    console.log('Metrotourist app listening on port: ' + PORT)
});

module.exports = app;
