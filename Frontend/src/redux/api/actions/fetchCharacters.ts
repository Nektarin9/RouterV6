import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';
import { AxiosResponse } from 'axios';

export interface Characters {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string
	created: string
}


export const fetchCharacters: any = createAsyncThunk<Characters[], void>(
	'characters/fetchCharacters',
	async () => {
		try {
			const response:AxiosResponse<Characters[]> = await backendApiAxios.get(PATCH_URL.CHARACTERS);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

export const fetchOneCharacters: any = createAsyncThunk(
	'oneCharacters/fetchOneCharacters',
	async (id: number) => {
		try {
			const response:AxiosResponse<Characters> = await backendApiAxios.get(`${PATCH_URL.CHARACTERS}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
