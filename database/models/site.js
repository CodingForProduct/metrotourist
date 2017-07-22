const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SiteSchema = require('./tour');


const SiteSchema = new Schema ({
	siteName: {
		type: String,
		required: [true, "Site name is required"]
	},
	tourName: {
		type: String,
		required: [true, "You must include which tour this site belongs to"]
		},
	image: String,
	longDescription: String,
	website: String,
	address: String,
	phone: String
});

const Site = mongoose.model('site', SiteSchema);

module.exports = Site;
