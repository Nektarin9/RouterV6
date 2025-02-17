import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL_RICK_AND_MORTY} from '../patch';
import { rickAndMortyApiAxios} from '../axiosConfig';
import { AxiosResponse } from 'axios';
import {InfoType, ParamsType} from "../../type.ts";


export interface ResultsLocation {
	id: number;
	name: string;
	type: string;
	dimension: string;
	created: string;
}

export interface LocationType {
	info: InfoType
	results: ResultsLocation[]
}


export const fetchLocation: any = createAsyncThunk<LocationType, ParamsType>(
	'location/fetchLocation',
	async ({ page }) => {
		try {
			const response: AxiosResponse<LocationType> = await rickAndMortyApiAxios.get(PATCH_URL_RICK_AND_MORTY.LOCATION,
				{params: {
						page: page
					}
				});
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);


export const fetchOneLocation: any = createAsyncThunk<ResultsLocation, ParamsType>(
	'oneLocation/fetchOneLocation',
	async ({ id }) => {
		try {
			const response:AxiosResponse<ResultsLocation> = await rickAndMortyApiAxios.get(`${PATCH_URL_RICK_AND_MORTY.LOCATION}/${id}`)
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);




