const Tour = require('../models/tour');

module.exports = (_id) => {
	return Tour.findOne({_id: _id});
	//return TourSchema.findById(_id);
};

