const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema ({
	siteName: String,
	image: String,
	longDescription: String,
	website: String,
	address: String,
	phone: String
});

// const Site = mongoose.model('site', SiteSchema);

module.exports = SiteSchema;