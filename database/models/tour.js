const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const PostSchema = require('./postSchema');

const TourSchema = new Schema({
	tourName: {
		type: String,
		validate: {
			validator: (name) => name.length > 2,
			message: "Name must be longer than 2 characters."
		},
		required: [true, "Name is required."]
	},
	descShort: String,
	stationName: String,
	line: Array,
	image: String,

	tourDetails: [{
		type: Schema.Types.ObjectId,
		ref: 'tourDetail'
	}]
});

const Tour = mongoose.model("tour", TourSchema);

module.exports = Tour;