import { createAsyncThunk } from '@reduxjs/toolkit';
import {PATCH_URL, PATCH_URL_RICK_AND_MORTY} from '../patch';
import {backendApiAxios, rickAndMortyApiAxios} from '../axiosConfig';
import { AxiosResponse } from 'axios';
import {InfoType, ParamsType} from "../../type.ts";

export interface ResultsCharacters {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string
	created: string
}

export interface CharactersType {
	info: InfoType
	results: ResultsCharacters[]
}



export const fetchCharacters: any = createAsyncThunk<CharactersType, ParamsType>(
	'characters/fetchCharacters',
	async ({page}) => {
		try {
			const response: AxiosResponse<CharactersType> = await rickAndMortyApiAxios.get(PATCH_URL_RICK_AND_MORTY.CHARACTERS,
				{params: {
						page
					}
				});
			return response.data

		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);


export const fetchOneCharacters: any = createAsyncThunk<ResultsCharacters, ParamsType>(
	'oneCharacters/fetchOneCharacters',
	async ({ id }) => {
		try {
			const response: AxiosResponse<ResultsCharacters> = await rickAndMortyApiAxios.get(`${PATCH_URL_RICK_AND_MORTY.CHARACTERS}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);


