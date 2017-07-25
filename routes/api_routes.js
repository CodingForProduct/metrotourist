const express = require ('express');
const router = express.Router();
const Tour = require('../database/models/tour');
const Site = require('../database/models/site');
const Dummy = require('../database/models/dummy');



// get a list of all tours from the db
router.get('/tourlist', function(req, res, next){
    // res.send({type: 'GET'});
    Tour.find({}).then(function(tours){
    	res.send(tours);
    });
});

router.get('/toursites', function(req, res, next){
	Tour.find({tourName: "Hollywood Classic"}).populate('sites').
	exec(function(err, Tour){
		if(err) return handleError(err);
		console.log('This is the list of sites for Hollywood Tour', sites.siteName)
	});
});
// router.get('/sitelist', function(req, res, next){
// 	sites.find({tourName:"Hollywood"})
// 		.sort('siteNames')
// 		.populate('siteNames')
// 		.run(function(err, docs){
// 			if(err)
// 		})
// })


// router.get('/siteList', function(req, res, next){
// 	// const query = Tour.find({req.body.tourName})
// 	const query = Tour.find({Hollywood})

// 		query.select('sites')
// 		query.sort({siteName})
// 		query.exec(function(err, sites){
// 			if(err) 
// 				return handle error (err);
// });

// or search the sites collection for all that have tourName reqbody


router.post('/tourlist', function(req, res, next){
    // res.send({type: 'POST'});
    Tour.find({}).sort({tourName:1}).then(function(tours){
        res.send(tours);
    });
});


//get a list of all tours from the db
router.get('/sitelist', function(req, res, next){
    // res.send({type: 'GET'});
    Site.find({}).sort({siteName:1}).then(function(sites){
     res.send(sites);
    });
});

router.post('/sitelist', function(req, res, next){
    // res.send({type: 'POST'});
    Site.find({}).sort({siteName:1}).then(function(sites){
        res.send(sites);
    });
});

router.post('/sitelistall', (req, res, next) => {
    return Site.find({}).sort({siteName:1});
});

// find list of sites that belong to specific tourTitle using Site schema
// replace hard code with : const query = Site.find({tourTitle: req.params.tourTitle});


//troubleshot ES6 version later
// router.get('/sitelist', (req, res) => {
//   const query = Site.find({tourTitle: "Hollywood Classic"})
//   .limit(10)
//   .sort({siteName});
//   return query;
// });

// router.post('/sitelist', (req, res, next) => {
//     return Site.find({tourTitle:"Hollywood Classic"}).sort({siteName});
// });

// router.post('/sitelistall', (req, res, next) => {
//     return Site.find({}).sort({siteName});
// });

// router.post('/sitelist', function(req, res, next){
//     Site.find({}).then(function(sites){
//         res.send(sites);

// instead can use the create method that creates new tour and saves to the db
router.post('/tourlist', function(req, res, next){
    Tour.create(req.body).then(function(tour){
        res.send(tour);
    }).catch(next);
});

// update a tour in the db
router.put('/tourlist/:id', function(req, res, next){
    Tour.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Tour.findOne({_id: req.params.id}).then(function(tour){
            res.send(tour);
        });
    }).catch(next);
});
// delete a tour from the db
router.delete('/tourlist/:id', function(req, res, next){
    Tour.findByIdAndRemove({_id: req.params.id}).then(function(tour){
        res.send(tour);
    }).catch(next);
});

module.exports = router;

// app.get('/api/findtour', (req, res) => {
//     return Tour.findOne({_id: _id});
// });

// app.get('/api/findsites', (req, res) => {
//   const query = Tour.find({tourName: "Hollywood"})
//   .find('sites')
//   .limit(10)
//   .sort({siteName});
//   return query;
// });
// add a new tour to the db
// router.post('/api/tours', function(req, res){
//     res.send({
//         type: 'POST',
//         tourName: req.body.name,
//         description: req.body.description,
//         image: req.body.image,
//         tourStation: req.body.tourStation,
//         tourLines: req.body.tourLines,
//         userStartLocation: req.body.userStartLocation




