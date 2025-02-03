import mongoose from "mongoose";

const Schema = mongoose.Schema;


const EpisodesSchema = new Schema({
	name: {
		type: String,
	},
	air_date: {
		type: String,
	},
	episode: {
		type: String,
	},
	created: {
		type: String,
	},
});

export const Episodes = mongoose.model("Episodes", EpisodesSchema);

