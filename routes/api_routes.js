const express = require ('express');
const router = express.Router();
const Tour = require('../database/models/tour');
const Site = require('../database/models/site');

// find one tour only
// router.get('/findtour', (req, res, next) => {
//     return Tour.findOne({_id: _id});
// });

//alternatively for find all tours using ES6
// router.get('/tourlist', (req, res, next) => {
//     return Tour.find({}).sort({tourName :1});
// });

//get a list of all tours from the db
router.get('/tourlist', function(req, res, next){
    // res.send({type: 'GET'});
    Tour.find({}).sort({tourName:1}).then(function(tours){
     res.send(tours);
    });
});

router.post('/tourlist', function(req, res, next){
    // res.send({type: 'POST'});
    Tour.find({}).sort({tourName:1}).then(function(tours){
        res.send(tours);
    });
});



// find list of sites that belong to specific tourTitle using Site schema
// replace hard code with : const query = Site.find({tourTitle: req.params.tourTitle});

router.get('/sitelist', (req, res) => {
  const query = Site.find({tourTitle: "Hollywood Classic"})
  .limit(10)
  .sort({siteName});
  return query;
});

router.post('/sitelist', (req, res, next) => {
    return Site.find({tourTitle:"Hollywood Classic"}).sort({siteName});
});

router.post('/sitelistall', (req, res, next) => {
    return Site.find({}).sort({siteName});
});

// router.post('/sitelist', function(req, res, next){
//     Site.find({}).then(function(sites){
//         res.send(sites);
//     });
// });
 // find all sites -- for testing - can be deleted.

// versus above??
// router.post('/sitelist', function(req, res, next){
//     const query = Site.find({});
//     query.sort({siteName: 'siteName'})
//          .limit(10)
//          .exec(function(err,results){
//             res.render('/sitelist', {siteName: "Sites Available", sites:results});
//          });
// });



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

// for testing only
// app.get('/api', (req, res) => {
//   res.send ({hi:"there"});
// });

//back up to be deleted
// --------------------------------------------------

//alternatively for find all tours using ES6 - not functioning
// router.get('/tourlist', (req, res, next) => {
//     return Tour.find({}).sort({tourName :1});
// });

//alternatively for send all tours using ES6 - not functioning
// router.post('/tourlist', (req, res, next) => {
//     return Tour.find({}).sort({tourName :1});
// });


// router.get('/sitelist', function(req, res, next){
//     // res.send({type: 'GET'});
//     Site.find({}).then(function(sites){
//         res.send(sites);
//     });
// });

// app.get('/findsites', (req, res) => {
//   const query = Tour.find({tourName: "Hollywood"})
//   .find('sites')
//   .limit(10)
//   .sort({siteName});
//   return query;
// });

// get a list of all tours from the db
// router.get('/tourlist', function(req, res, next){
//     // res.send({type: 'GET'});
//     Tour.find({}).then(function(tours){
//      res.send(tours);
//     });
// });

// router.post('/tourlist', function(req, res, next){
//     // res.send({type: 'POST'});
//     Tour.find({}).then(function(tours){
//         res.send(tours);
//     });
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
//     });

// });


module.exports = router;


