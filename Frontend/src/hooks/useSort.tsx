import { useLocation, useNavigate } from 'react-router-dom';

interface Data {
	id: number;
	created: string
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
	image?: string;
	dimension?: string;
	episode?: string;
	air_date?: string;
}
export const useSort = (data: Data[]) => {
	const location = useLocation();
	const navigate = useNavigate();

	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return {
			sort: params.get('sort') || 'createdASC',
		};
	};

	const sortItems = (items: Data[], sort: string): Data[] => {
		return items.sort((a, b) => {
			if (sort === 'createdASC') {
				return new Date(a.created).getTime() - new Date(b.created).getTime();
			} else if (sort === 'createdDESC') {
				return new Date(b.created).getTime() - new Date(a.created).getTime();
			}
			return 0;
		});
	};

	const { sort } = getQueryParams();
	const sortedItems = data ? sortItems([...data], sort) : [];

	const handleSortChange = (newSort: string) => {
		navigate(`?sort=${newSort}`);
	};
	return {sortedItems, handleSortChange}
}
