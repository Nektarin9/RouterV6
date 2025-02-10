import { Episodes } from "../models/episodes"

export async function getEpisodes() {
	return Episodes.find();
}

export async function getOneEpisodes(params: number | string) {
	return Episodes.findById(params);
}





