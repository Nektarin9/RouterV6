export interface InfoType {
	count: number;
	next: string | null;
	pages: number;
	prev: string | null;
}

export interface ParamsType {
	id?: number;
	page: number;
}
