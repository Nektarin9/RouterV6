import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectOneEpisodes} from '../../redux/app-slice/appSelectors.ts';
import { TopPanel } from '../components/topPanel.tsx';
import { dateFormat } from '../../utils/dateFormat.ts';
import { Loader } from '../../components/loader/loader.tsx';
import { fetchOneEpisodes } from '../../redux/api/actions';
import {ROUTES_PATH} from "../../routing/routes.ts";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary.tsx";

interface EpisodesInfoProps {
	className?: string;
}

const EpisodesInfoContainer = ({ className }: EpisodesInfoProps) => {
	const dispatch = useDispatch();
	const oneEpisodes = useSelector(selectOneEpisodes);
	const params = useParams();

	useEffect(() => {
		dispatch(fetchOneEpisodes({id: params.id, page: 5}));
	}, [dispatch]);

	return <div className={className}>
		{oneEpisodes ? <>
			<ErrorBoundary>
				<TopPanel links={[
				{ label: 'Главная', href: '/', isTarget: false },
				{ label: 'Эпизоды', href: ROUTES_PATH.EPISODES, isTarget: false },
				{ label: oneEpisodes.name, href: `${ROUTES_PATH.EPISODES}/${params.id}`, isTarget: true },
				]} />
			</ErrorBoundary>
			<div className="container">
				<div className="infoBlock">
					<div>
						<p className="textInfo">Название: {oneEpisodes.name}</p>
						<p className="textInfo">Дата выхода в эфир: {oneEpisodes.air_date}</p>
						<p className="textInfo">Эпизод: {oneEpisodes.episode}</p>
						<p className="textInfo">Дата: {dateFormat(oneEpisodes.created)}</p>
					</div>
				</div>
			</div>
		</> : <Loader />}
	</div>;
};


const EpisodesInfo = styled(EpisodesInfoContainer)`
	.container {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.infoBlock {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		gap: 40px;
	}

	.textInfo {
		text-align: left;
		margin: 5px auto;
		color: white;
		font-size: 22px;
	}
`;
export default EpisodesInfo;
