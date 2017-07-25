const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const SiteSchema = require('./site');

const DummySchema = new Schema({
	dummyName: {
		type: String,
		required: [true, "Dummy name is required"],
		unique: true
	},
	description: String,
	image: String,
	dummyStation: {
		type: String,
		required: [true, "Dummy Station is required"],
	},
	dummyLines: Array,
	// userStartLocation: String,
	// sites: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: Site
	// 	}]
});

// alternative to type/ref  I think [SiteSchema]
//Turn the schema into a model
const Dummy = mongoose.model('dummy', DummySchema);

module.exports = Dummy;