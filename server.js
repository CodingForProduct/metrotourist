const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');


const app = express();
const tests = require('./routes/tests')


app.use(cors());

//!important place the app.use call ABOVE the routes call
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// app.use(express.static('./public'));


// ----- MongoDB Configuration configuration -----

// for Heroku deployment mlab provides a mongodb instance
// To connect using the mongo shell:
// mongo ds127063.mlab.com:27063/metrotourist -u <admin> -p <password4KatKy>
// To connect using a driver via the standard MongoDB URI (what's this?):

// mongodb://<admin>:<password4KatKy>@ds127063.mlab.com:27063/metrotourist

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/metrotourist', { useMongoClient: true }); //above doesn't work
}
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Routes

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

app.get('/add', function (req, res) {
    res.status(200)
    .send({
        sum: parseInt(req.query.a) + parseInt(req.query.b)
    });
});

// initialize api routes
app.use('/api', require('./routes/api_routes'));
app.use('/api/tests', tests);
// routes(app);
// require('./routes/api-routes.js')(app);
// require('./routes/html-routes.js')(app);

//AFTER routes! Error handler
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message });
});


// error handling middleware - old school can delete the following
// app.use(function(err, req, res, next){
//     console.log(err); // to see properties of message in our console
//     res.status(422).send({error: err.message});
// });


// start server on port
const PORT = process.env.PORT || 3001; // Sets an initial port.
// app.listen(PORT, function() etc)
app.listen(PORT, function () {
    console.log('Metrotourist app listening on port: ' + PORT)
});

module.exports = app;
