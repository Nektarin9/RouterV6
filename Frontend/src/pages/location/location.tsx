import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/app-slice/appSelectors.ts';
import { useSort } from '../../hooks/useSort.tsx';
import { useEffect } from 'react';
import { fetchLocation } from '../../redux/api/actions';
import { clear } from '../../redux/app-slice/appSlice.ts';
import { TopPanel } from '../topPanel.tsx';
import { Button } from '../../base/button/button.tsx';
import { Link } from 'react-router-dom';
import { Loader } from '../../base/loader/loader.tsx';
import {ROUTES_PATH} from "../../routing/routes.ts";

const LocationContainer = ({className}:{className?: string}) => {

	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	const {sortedItems, handleSortChange} = useSort(location || [])

	useEffect(() => {
		dispatch(fetchLocation());
		dispatch(clear())
	}, [dispatch]);


	return (
		<div className={className}>
			{location ?<><div className="wrapperBtn">
				<TopPanel links={[
					{ label: "Главная", href: "/", isTarget: false },
					{ label: "Локации", href: ROUTES_PATH.LOCATION, isTarget: true }
				]}/>
				<div className="btnSort">
					<Button width="200px" height="45px" onClick={() => handleSortChange('createdDESC')}>Сортировать по дате (убывание)</Button>
					<Button width="200px"  height="45px" onClick={() => handleSortChange('createdASC')}>Сортировать по дате (возрастание)</Button>
				</div>
			</div>
				<div className="locationContainer">
					{sortedItems.map(({ id, name }) => (
						<Link className="location" key={id} to={`${ROUTES_PATH.LOCATION}/${id}`}>
							<p>{name}</p>
						</Link>
					))}
				</div> </> : <Loader/>}
		</div>
	);
}

export const Location = styled(LocationContainer)`
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
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
		gap: 10px;
	}

	.location {
		padding: 5px;
		background-color: #983600;
		border-radius: 5px;
		font-size: 22px;
		color: white;

		&:hover {
			background-color: #c85d05;
		}
	}
`
