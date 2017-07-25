const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema ({
	siteName: String,
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

// const Site = mongoose.model('site', SiteSchema);

module.exports = SiteSchema;
