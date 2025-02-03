import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';
import { AxiosResponse } from 'axios';

export interface Location {
	id: number;
	name: string;
	type: string;
	dimension: string;
	created: string;
}


export const fetchLocation: any = createAsyncThunk<Location[], void>(
	'location/fetchLocation',
	async () => {
		try {
			const response:AxiosResponse<Location[]> = await backendApiAxios.get(PATCH_URL.LOCATION);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

export const fetchOneLocation: any = createAsyncThunk(
	'oneLocation/fetchOneLocation',
	async (id: number) => {
		try {
			const response:AxiosResponse<Location> = await backendApiAxios.get(`${PATCH_URL.LOCATION}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
