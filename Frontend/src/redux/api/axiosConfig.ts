import axios, {AxiosInstance} from "axios";

export interface ApiConfig {
    backendApi: string;
	rickAndMortyApi: string;
}

export let backendApiAxios: AxiosInstance;
export let rickAndMortyApiAxios: AxiosInstance;

export const initializeApi = (apiConfig: ApiConfig) => {
	backendApiAxios = axios.create({
		baseURL: apiConfig.backendApi,
	}),
	rickAndMortyApiAxios = axios.create({
		baseURL: apiConfig.rickAndMortyApi,
	})
};
