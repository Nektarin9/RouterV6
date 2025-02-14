import { createAsyncThunk } from '@reduxjs/toolkit';
import {PATCH_URL, PATCH_URL_RICK_AND_MORTY} from '../patch';
import {backendApiAxios, rickAndMortyApiAxios} from '../axiosConfig';
import { AxiosResponse } from 'axios';
import {InfoType, ParamsType} from "../../type.ts";


export interface ResultsEpisodes {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	created: string
}

export interface EpisodesType {
	info: InfoType
	results: ResultsEpisodes[]
}


export const fetchEpisodes: any = createAsyncThunk<EpisodesType, ParamsType>(
	'episodes/fetchEpisodes',
	async ({page}) => {
		try {
			const response: AxiosResponse<EpisodesType> = await rickAndMortyApiAxios.get(PATCH_URL_RICK_AND_MORTY.EPISODES,
				{params: {
						page
					}
				});
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

export const fetchOneEpisodes: any = createAsyncThunk<ResultsEpisodes, ParamsType>(
	'oneEpisodes/fetchOneEpisodes',
	async ({ id }) => {
		try {
			const response: AxiosResponse<ResultsEpisodes> = await rickAndMortyApiAxios.get(`${PATCH_URL_RICK_AND_MORTY.EPISODES}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);


