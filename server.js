const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbLocal = process.env.REACT_APP_SECRETDB;
const mongoLab = process.env.REACT_APP_MONGOLAB_URI;


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

// --------Routes-------------
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
