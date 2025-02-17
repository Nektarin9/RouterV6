import {ApiConfig} from "./redux/api/axiosConfig";

export interface AppConfig {
    api?: {
        backendApi: string;
		rickAndMortyApi: string
    },

}
export class ProcessInitializer {
    private readonly config?: AppConfig;

    constructor(config?: AppConfig) {
        this.config = config;
    }

    getApi(): ApiConfig {
		return {
            backendApi: this.config?.api?.backendApi || '',
			rickAndMortyApi: this.config?.api?.rickAndMortyApi || ''
        };
    }
}

export const processInitializer = new ProcessInitializer(window.config);
