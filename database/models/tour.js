const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SiteSchema = require('./site');

const TourSchema = new Schema({
	tourName: String,
	description: String,
	image: String,
	tourStation: String,
	tourLines: Array,
	userStartLocation: String,
	sites: [SiteSchema]
});

//Turn the schema into a model
const Tour = mongoose.model('tour', TourSchema);

module.exports = Tour;