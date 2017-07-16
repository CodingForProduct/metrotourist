const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSiteSchema = new Schema({
	tourName: String,
	descShort: String
}); 

module.exports = tourSiteSchema;