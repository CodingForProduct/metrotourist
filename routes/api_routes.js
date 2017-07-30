const express = require ('express');
const router = express.Router();
const Tour = require('../database/models/tour');
const Site = require('../database/models/site');


// get a list of all tours from the tour collection
router.get('/tourlist', function(req, res, next){
    // res.send({type: 'GET'});
    Tour.find({}).sort({tourName:1}).then(function(tours){
    	res.send(tours);
    });
});

// get a list of all sites from the site collection
router.get('/sitelistall', function(req, res, next){
    Site.find({}).sort({siteName:1}).then(function(sites){
        res.send(sites);
    });
});

// get a list of all sites that belong to specified tour (Downtown 2b replaced by req.body.params)
router.get('/tours/:tourName/sites', function(req, res, next){
    console.log(req.params.tourName)
    Site.find({tourTitle : req.params.tourName}).sort({siteName:1}).then(function(sites){
        res.send(sites);
    });
});



// create method that creates new tour and saves to the tour collection
router.post('/tourlist/create', function(req, res, next){
    Tour.create(req.body).then(function(tour){
        res.send(tour);
    }).catch(next);
});

// update a tour in the tour collection
router.put('/tourlist/:id', function(req, res, next){
    Tour.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Tour.findOne({_id: req.params.id}).then(function(tour){
            res.send(tour);
        });
    }).catch(next);
});
// delete a tour from the tour collection
router.delete('/tourlist/:id', function(req, res, next){
    Tour.findByIdAndRemove({_id: req.params.id}).then(function(tour){
        res.send(tour);
    }).catch(next);
});

module.exports = router;
