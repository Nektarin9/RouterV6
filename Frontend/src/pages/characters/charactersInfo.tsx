import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopPanel } from '../components/topPanel.tsx';
import { dateFormat } from '../../utils/dateFormat.ts';
import { Loader } from '../../loader/loader.tsx';
import {fetchOneCharacters} from "../../redux/api/actions";
import {selectOneCharacters} from "../../redux/app-slice/appSelectors.ts";
import {ROUTES_PATH} from "../../routing/routes.ts";

interface CharactersInfoProps {
	className?: string;
}

const PersonInfoContainer = ({ className }: CharactersInfoProps) => {
	const dispatch = useDispatch();
	const oneCharacters = useSelector(selectOneCharacters);
	const params = useParams();

	useEffect(() => {
		dispatch(fetchOneCharacters(params.id));
	}, [dispatch]);

	return <div className={className}>
		{oneCharacters ? <><TopPanel links={[
			{ label: 'Главная', href: '/', isTarget: false },
			{ label: 'Персонажи', href: ROUTES_PATH.CHARACTERS, isTarget: false },
			{ label: oneCharacters.name, href: `${ROUTES_PATH.CHARACTERS}/${params.id}`, isTarget: true },
		]} />
			<div className="container">
				<div className="infoBlock">
					<img src={oneCharacters.image} alt={oneCharacters.name} />
					<div>
						<p className="textInfo">Имя: {oneCharacters.name}</p>
						<p className="textInfo">Гендер: {oneCharacters.gender}</p>
						<p className="textInfo">{oneCharacters.type}</p>
						<p className="textInfo">Дата: {dateFormat(oneCharacters.created)}</p>
					</div>
				</div>
			</div>
		</>: <Loader/>}
	</div>;
};


export const CharactersInfo = styled(PersonInfoContainer)`
	.container {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.infoBlock {
		display: flex;
		align-items: center;
		gap: 40px;
		border: 1px solid rgba(37, 37, 37, 0.59);
		background-color: rgba(25, 24, 24, 0.42);
	}

	.textInfo {
		text-align: left;
		margin: 5px auto;
		color: white;
		font-size: 22px;
	}
`;
