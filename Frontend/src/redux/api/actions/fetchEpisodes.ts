import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';
import { AxiosResponse } from 'axios';

export interface Episodes {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	created: string
}


export const fetchEpisodes: any = createAsyncThunk<Episodes[], void>(
	'episodes/fetchEpisodes',
	async () => {
		try {
			const response:AxiosResponse<Episodes[]> = await backendApiAxios.get(PATCH_URL.EPISODES);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

export const fetchOneEpisodes: any = createAsyncThunk(
	'oneEpisodes/fetchOneEpisodes',
	async (id: number) => {
		try {
			const response:AxiosResponse<Episodes> = await backendApiAxios.get(`${PATCH_URL.EPISODES}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
