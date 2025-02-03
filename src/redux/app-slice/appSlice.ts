import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../api/actions';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		data: {},
	},
	reducers: {
		message: (state, action) => {
			//state.actionMessage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.data = action.payload;
		});

	},
});

// Экспортируем редукторы
export const { message } = appSlice.actions;
export default appSlice.reducer;
