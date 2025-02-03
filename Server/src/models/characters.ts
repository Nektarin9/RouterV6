import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CharactersSchema = new Schema({
	name: {
		type: String,
	},
	status: {
		type: String,
	 },
	species: {
		type: String,
	},
    type: {
        type: String,
    },
    gender: {
        type: String,
    },
    image: {
        type: String,
    },
    created: {
        type: String,
    },

});

export const Characters = mongoose.model("Characters", CharactersSchema);



