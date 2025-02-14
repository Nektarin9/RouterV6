import { RootState } from '../store.ts';
import {fetchCharacters} from "../api/actions";


// Персонажи
export const selectCharacters = (state: RootState) => {
	return state.appSlice.characters;
};
export const selectOneCharacters = (state: RootState) => {
	return state.appSlice.oneCharacters;
};


// Локации
export const selectLocation = (state: RootState) => {
	return state.appSlice.location;
};
export const selectOneLocation = (state: RootState) => {
	return state.appSlice.oneLocation;
};

// "Эпизоды"
export const selectEpisodes = (state: RootState) => {
	return state.appSlice.episodes;
};
export const selectOneEpisodes = (state: RootState) => {
	return state.appSlice.oneEpisodes;
};

// "Пагинация"
export const selectLoading = ( state: RootState ) => {
	return state.appSlice.loading;
}

export const selectPage = ( state: RootState ) => {
	return state.appSlice.page;
}

export const selectHasMode = ( state: RootState ) => {
	return state.appSlice.hasMode;
}
