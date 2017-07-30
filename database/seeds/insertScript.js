const Tour = require('../models/tour');
const Site = require('../models/site');
const mongoose = require('mongoose');

//Create tour objects and insert them:


//read in the file
//parse json into array of tour objects
const toursJson = require('./tours.json')
const sitesJson = require('./sites.json')

//console.log(sitesJson)
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/metrotourist', { useMongoClient: true });

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');

  //loop over tour objects to call create on each one
  for(let i = 0; i < toursJson.length; i++) {
      console.log('Creating: ', toursJson[i].tourName)
      Tour.create(toursJson[i])
      .then(() => {
          console.log("inserted ", toursJson[i].tourName)
      })
  }

  //repeat for sites
  for(let i = 0; i < sitesJson.length; i++) {
      console.log('Creating: ', sitesJson[i].siteName)
      Site.create(sitesJson[i])
      .then(() => {
          console.log("inserted ", sitesJson[i].siteName)
      })
  }



});
