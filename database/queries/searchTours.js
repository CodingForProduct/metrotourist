const Tour = require('../models/tour');


module.exports = (_id) => {

const query = Tour.find({tourName: "Hollywood"})
	.find('sites')
	.limit(10)
	.sort({siteName});
	return query;
};

