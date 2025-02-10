import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	Episodes,
	Characters,
	Location,
	fetchEpisodes,
	fetchLocation, fetchOneEpisodes,
	fetchOneLocation,
	fetchOneCharacters,
	fetchCharacters,
} from '../api/actions';


export interface AppSliceType {
	characters: null | Characters[];
	oneCharacters: null | Characters;
	location: null | Location[];
	oneLocation: null | Location;
	episodes: null | Episodes[];
	oneEpisodes: null | Episodes
}
const initialState: AppSliceType = {
	characters: null,
	oneCharacters: null,
	location: null,
	oneLocation: null,
	episodes: null,
	oneEpisodes: null
};
export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		clear: (state) => {
			state.oneCharacters = null;
			state.oneLocation = null;
			state.oneEpisodes = null;
		},
	},
	extraReducers: (builder) => {
		// Персонажи
		builder.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<Characters[]>) => {
			state.characters = action.payload;
		});
		builder.addCase(fetchOneCharacters.fulfilled, (state, action: PayloadAction<Characters>) => {
			state.oneCharacters = action.payload;
		});
		// Локации
		builder.addCase(fetchLocation.fulfilled, (state, action: PayloadAction<Location[]>) => {
			state.location = action.payload;
		});
		builder.addCase(fetchOneLocation.fulfilled, (state, action: PayloadAction<Location>) => {
			state.oneLocation = action.payload;
		});
		// Эпизоды
		builder.addCase(fetchEpisodes.fulfilled, (state, action: PayloadAction<Episodes[]>) => {
			state.episodes = action.payload;
		});
		builder.addCase(fetchOneEpisodes.fulfilled, (state, action: PayloadAction<Episodes>) => {
			state.oneEpisodes = action.payload;
		});
	},
});

// Экспортируем редукторы
export const { clear } = appSlice.actions;
export default appSlice.reducer;
