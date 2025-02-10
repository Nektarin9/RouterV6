import mongoose from "mongoose";

const Schema = mongoose.Schema;


const LocationSchema = new Schema({
	name: {
		type: String,
	},
	type: {
		type: String,
	},
	dimension: {
		type: String,
	},
	created: {
		type: String,
	},

});

export const Location = mongoose.model("Location", LocationSchema);

