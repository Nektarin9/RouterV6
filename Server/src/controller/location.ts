import { Location } from "../models/location";

export async function getLocation() {
	return Location.find();
}

export async function getOneLocation(params: string | number) {
	return Location.findById(params);
}

