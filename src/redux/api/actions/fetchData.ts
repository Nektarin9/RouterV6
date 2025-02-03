import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const fetchData: any = createAsyncThunk<any, void>(
	'clients/fetchData',
	async () => {
		try {
			const response = await backendApiAxios.get(PATCH_URL.API);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
