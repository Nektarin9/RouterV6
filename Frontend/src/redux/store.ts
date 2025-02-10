import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appSlice from './app-slice/appSlice';

const rootReducer = combineReducers({
	appSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
