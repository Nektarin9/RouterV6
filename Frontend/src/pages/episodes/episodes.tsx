import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectEpisodes, selectLocation } from '../../redux/app-slice/appSelectors.ts';
import { useSort } from '../../hooks/useSort.tsx';
import { useEffect } from 'react';
import { fetchEpisodes, fetchLocation } from '../../redux/api/actions';
import { clear } from '../../redux/app-slice/appSlice.ts';
import { TopPanel } from '../components/topPanel.tsx';
import { Button } from '../../components/button/button.tsx';
import { Link } from 'react-router-dom';
import { Loader } from '../../loader/loader.tsx';
import {ROUTES_PATH} from "../../routing/routes.ts";

const EpisodesContainer = ({className}:{className?: string}) => {

	const dispatch = useDispatch();
	const episodes = useSelector(selectEpisodes);
	const {sortedItems, handleSortChange} = useSort(episodes || [])

	useEffect(() => {
		dispatch(fetchEpisodes());
		dispatch(clear())
	}, [dispatch]);


	return (
		<div className={className}>
			{location ?<><div className="wrapperBtn">
				<TopPanel links={[
					{ label: "Главная", href: "/", isTarget: false },
					{ label: "Эпизоды", href: ROUTES_PATH.EPISODES, isTarget: true }
				]}/>
				<div className="btnSort">
					<Button width="200px" height="45px" onClick={() => handleSortChange('createdDESC')}>Сортировать по дате (убывание)</Button>
					<Button width="200px"  height="45px" onClick={() => handleSortChange('createdASC')}>Сортировать по дате (возрастание)</Button>
				</div>
			</div>
				<div className="episodesContainer">
					{sortedItems.map(({ id, name }) => (
						<Link className="location" key={id} to={`${ROUTES_PATH.EPISODES}/${id}`}>
							<p>{name}</p>
						</Link>
					))}
				</div> </> : <Loader/>}
		</div>
	);
}

export const Episodes = styled(EpisodesContainer)`
	.wrapperBtn {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btnSort {
		display: flex;
		gap: 15px;
	}

	.episodesContainer {
		margin: 20px auto;
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
		gap: 10px;
	}

	.location {
		padding: 5px;
		background-color: #02675f;
		border-radius: 5px;
		font-size: 22px;
		color: white;
		&:hover {
			background-color: #015049;
		}
	}
`
