import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/app-slice/appSelectors.ts';
import { useSort } from '../../hooks/useSort.tsx';
import { useEffect } from 'react';
import { fetchLocation } from '../../redux/api/actions';
import { reset} from '../../redux/app-slice/appSlice.ts';
import { TopPanel } from '../components/topPanel.tsx';
import { Button } from '../../components/button/button.tsx';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/loader/loader.tsx';
import { ROUTES_PATH } from "../../routing/routes.ts";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary.tsx";
import { useInfinityScroll } from "../../hooks/useInfinityScroll.tsx";

const LocationContainer = ({className}:{className?: string}) => {
	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	const {sortedItems, handleSortChange} = useSort(location || [])
	const {lastItemRef} = useInfinityScroll("Location")

	useEffect(() => {
		dispatch(reset())
		dispatch(fetchLocation({page: 1}));
	}, [dispatch]);



	return (
		<div className={className}>
			{location ?<>
				<div className="wrapperBtn">
					<ErrorBoundary>
						<TopPanel links={[
							{label: "Главная", href: "/", isTarget: false},
							{label: "Локации", href: ROUTES_PATH.LOCATION, isTarget: true}
						]}/>
					</ErrorBoundary>
					<div className="btnSort">
						<Button width="200px" height="45px" onClick={() => handleSortChange('createdDESC')}>Сортировать
							по дате (убывание)</Button>
						<Button width="200px" height="45px" onClick={() => handleSortChange('createdASC')}>Сортировать
							по дате (возрастание)</Button>
					</div>
				</div>
				<div className="locationContainer">
					{sortedItems.map(({id, name}, index) => {
						if (sortedItems.length === index + 1) {
							return (
								<Link ref={lastItemRef} className="location" key={id} to={`${ROUTES_PATH.LOCATION}/${id}`}>
									<p>{name}</p>
								</Link>)
						}
						else {
							return (
								<Link className="location" key={id} to={`${ROUTES_PATH.LOCATION}/${id}`}>
									<p>{name}</p>
								</Link>)
						}
					})}
				</div>
			</> : <Loader/>}
		</div>
	);
}

const Location = styled(LocationContainer)`
	.wrapperBtn {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btnSort {
		display: flex;
		gap: 15px;
	}

	.locationContainer {
		margin: 20px auto;
		text-align: center;
		border: 1px solid #ccc;
		max-height: 900px;
		overflow-y: auto;
	}

	.location {
		display: block;
		text-align: left;
		padding: 5px;
		border-radius: 5px;
		font-size: 22px;
		color: white;

		&:hover {
			background-color: #c85d05;
		}
	}
`
export default Location
