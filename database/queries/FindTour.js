const Tour = require('../models/tour');

module.exports = (_id) => {
	return Tour.findOne({_id: _id});

	//return TourSchema.findById(_id);
};

////
//Hollywood replaced by req.body...click event



// app.post("/update/:id", function(req, res) {
// 	Tour.findOne({_id: req.params.id}, req.body,
// 		function(err, doc){
// 			if(err) {
// 			res.send("err");
// 		}
// 		else{
// 			res.send(doc);
// 		}
// 		});
// });