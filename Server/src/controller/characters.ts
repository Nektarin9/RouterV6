import {Characters} from "../models/characters"

export async function getCharacters() {
	return Characters.find();
}

export async function getOneCharacter(params: string | number) {
	return Characters.findById(params);
}
