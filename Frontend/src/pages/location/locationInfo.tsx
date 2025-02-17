import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectOneLocation } from '../../redux/app-slice/appSelectors.ts';
import { TopPanel } from '../components/topPanel.tsx';
import { dateFormat } from '../../utils/dateFormat.ts';
import { Loader } from '../../components/loader/loader.tsx';
import { fetchOneLocation } from '../../redux/api/actions';
import {ROUTES_PATH} from "../../routing/routes.ts";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary.tsx";

interface LocationInfoProps {
	className?: string;
}

const LocationInfoContainer = ({ className }: LocationInfoProps) => {
	const dispatch = useDispatch();
	const oneLocation = useSelector(selectOneLocation);
	const params = useParams();

	useEffect(() => {
		dispatch(fetchOneLocation({id: params.id, page: 5}));
	}, [dispatch]);

	return <div className={className}>
		{oneLocation ? <>
			<ErrorBoundary>
				<TopPanel links={[
				{ label: 'Главная', href: '/', isTarget: false },
				{ label: 'Локации', href: ROUTES_PATH.LOCATION, isTarget: false },
				{ label: oneLocation.name, href: `${ROUTES_PATH.LOCATION}/${params.id}`, isTarget: true },
				]} />
			</ErrorBoundary>
			<div className="container">
				<div className="infoBlock">
					<div>
						<p className="textInfo">Название: {oneLocation.name}</p>
						{oneLocation.dimension !== 'unknown' &&
							<p className="textInfo">Измерение: {oneLocation.dimension}</p>}
						<p className="textInfo">Местонахождение: {oneLocation.type}</p>
						<p className="textInfo">Дата: {dateFormat(oneLocation.created)}</p>
					</div>
				</div>
			</div>
		</> : <Loader />}
	</div>;
};


const LocationInfo = styled(LocationInfoContainer)`
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
export default LocationInfo;
