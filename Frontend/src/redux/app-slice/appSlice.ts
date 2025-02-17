import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fetchEpisodes,
	fetchLocation,
	fetchCharacters,
	fetchOneCharacters,
	fetchOneLocation,
	fetchOneEpisodes,
	ResultsCharacters,
	ResultsLocation,
	EpisodesType,
	ResultsEpisodes,
	CharactersType,
	LocationType,
} from '../api/actions';
import { WritableDraft } from 'immer';
import {InfoType} from "../type.ts";

export interface AppSliceType {
	characters: ResultsCharacters[];
	oneCharacters: ResultsCharacters | null;
	location: ResultsLocation[];
	oneLocation: ResultsLocation | null;
	episodes: ResultsEpisodes[];
	oneEpisodes: ResultsEpisodes | null;
	loading: boolean;
	page: number;
	hasMode: boolean;
}

const initialState: AppSliceType = {
	characters: [],
	oneCharacters: null,
	location: [],
	oneLocation: null,
	episodes: [],
	oneEpisodes: null,
	loading: false,
	page: 1,
	hasMode: true
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		reset: () => structuredClone(initialState)
	},
	extraReducers: (builder) => {
		const handlePending = (state:  WritableDraft<AppSliceType>) => {
			state.loading = true;
		};

		const handleFulfilled = (state: WritableDraft<AppSliceType>,info: InfoType) => {
			state.loading = false;
			state.page += 1;
			state.hasMode = state.page < info.pages

		};

		const handleRejected = (state: WritableDraft<AppSliceType>) => {
			state.loading = false;
		};

		// Персонажи
		builder
			.addCase(fetchCharacters.pending, handlePending)
			.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<CharactersType>) => {
				handleFulfilled(state, action.payload.info);
				state.characters.push(...action.payload.results);
			})
			.addCase(fetchCharacters.rejected, handleRejected)
			.addCase(fetchOneCharacters.fulfilled, (state, action: PayloadAction<ResultsCharacters>) => {
				state.oneCharacters = action.payload;
			});

		// Локации
		builder
			.addCase(fetchLocation.pending, handlePending)
			.addCase(fetchLocation.fulfilled, (state, action: PayloadAction<LocationType>) => {
				handleFulfilled(state, action.payload.info);
				state.location.push(...action.payload.results);

			})
			.addCase(fetchLocation.rejected, handleRejected)
			.addCase(fetchOneLocation.fulfilled, (state, action: PayloadAction<ResultsLocation>) => {
				state.oneLocation = action.payload;
			});

		// Эпизоды
		builder
			.addCase(fetchEpisodes.pending, handlePending)
			.addCase(fetchEpisodes.fulfilled, (state, action: PayloadAction<EpisodesType>) => {
				handleFulfilled(state, action.payload.info);
				state.episodes = [...state.episodes, ...action.payload.results];

			})
			.addCase(fetchEpisodes.rejected, handleRejected)
			.addCase(fetchOneEpisodes.fulfilled, (state, action: PayloadAction<ResultsEpisodes>) => {
				state.oneEpisodes = action.payload;
			});
	},
});

// Экспортируем редукторы
export const { reset } = appSlice.actions;
export default appSlice.reducer;
