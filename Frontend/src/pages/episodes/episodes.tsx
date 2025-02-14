import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectEpisodes } from '../../redux/app-slice/appSelectors.ts';
import { useSort } from '../../hooks/useSort.tsx';
import { useEffect } from 'react';
import { fetchEpisodes } from '../../redux/api/actions';
import { reset} from '../../redux/app-slice/appSlice.ts';
import { TopPanel } from '../components/topPanel.tsx';
import { Button } from '../../components/button/button.tsx';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/loader/loader.tsx';
import {ROUTES_PATH} from "../../routing/routes.ts";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary.tsx";
import {useInfinityScroll} from "../../hooks/useInfinityScroll.tsx";

const EpisodesContainer = ({className}:{className?: string}) => {
	const dispatch = useDispatch();
	const episodes = useSelector(selectEpisodes);
	const {sortedItems, handleSortChange} = useSort(episodes || [])
	const {lastItemRef} = useInfinityScroll("Episodes")

	useEffect(() => {
		dispatch(reset())
		dispatch(fetchEpisodes({page: 1}));
	}, [dispatch]);



	return (
		<div className={className}>
			{episodes ?<>
				<div className="wrapperBtn">
					<ErrorBoundary>
						<TopPanel links={[
							{label: "Главная", href: "/", isTarget: false},
							{label: "Эпизоды", href: ROUTES_PATH.EPISODES, isTarget: true}
						]}/>
					</ErrorBoundary>
					<div className="btnSort">
						<Button width="200px" height="45px" onClick={() => handleSortChange('createdDESC')}>Сортировать
							по дате (убывание)</Button>
						<Button width="200px" height="45px" onClick={() => handleSortChange('createdASC')}>Сортировать
							по дате (возрастание)</Button>
					</div>
				</div>
				<div className="episodesContainer">
					{sortedItems.map(({id, name}, index) => {
						if (sortedItems.length === index + 1) {
							return (
								<Link ref={lastItemRef} className="episodes" key={id} to={`${ROUTES_PATH.EPISODES}/${id}`}>
									<p>{name}</p>
								</Link>
							)
						}
						else {
							return (
								<Link className="episodes" key={id} to={`${ROUTES_PATH.EPISODES}/${id}`}>
									<p>{name}</p>
								</Link>
							)
						}
					})}
				</div>
			</> : <Loader/>}
		</div>
	);
}

const Episodes = styled(EpisodesContainer)`
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
		text-align: center;
		border: 1px solid #ccc;
		max-height: 900px;
		overflow-y: auto;
	}

	.episodes {
		display: block;
		text-align: left;
		padding: 5px;
		border-radius: 5px;
		font-size: 22px;
		color: white;
		&:hover {
			background-color: #015049;
		}
	}
`
export default Episodes
