import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/api/actions';
import {selectCharacters} from '../../redux/app-slice/appSelectors.ts';
import { Link } from 'react-router-dom';
import { Button } from '../../base/button/button.tsx';
import { useSort } from '../../hooks/useSort.tsx';
import { clear } from '../../redux/app-slice/appSlice.ts';
import { TopPanel } from '../topPanel.tsx';
import { Loader } from '../../base/loader/loader.tsx';
import {ROUTES_PATH} from "../../routing/routes.ts";



const CharactersContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const characters = useSelector(selectCharacters);
	const {sortedItems, handleSortChange} = useSort(characters || [])


	useEffect(() => {
		dispatch(fetchCharacters());
		dispatch(clear())
	}, [dispatch]);


	return (
		<div className={className}>
			{characters ?<><div className="wrapperBtn">
				<TopPanel links={[
					{ label: "Главная", href: "/", isTarget: false },
					{ label: "Персонажи", href: ROUTES_PATH.CHARACTERS, isTarget: true }
				]}/>
				<div className="btnSort">
					<Button width="200px" height="45px" onClick={() => handleSortChange('createdDESC')}>Сортировать по дате (убывание)</Button>
					<Button width="200px"  height="45px" onClick={() => handleSortChange('createdASC')}>Сортировать по дате (возрастание)</Button>
				</div>
			</div>
			<div className="charactersContainer">
				{sortedItems.map(({ id, image, name }) => (
					<Link className="characters" key={id} to={`${ROUTES_PATH.CHARACTERS}/${id}`}>
						<img className="image" src={image} alt={name} />
						<p>{name}</p>
					</Link>
				))}
			</div> </> : <Loader/>}
		</div>
	);
};

export const Characters = styled(CharactersContainer)`
	.wrapperBtn {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.btnSort {
		display: flex;
		gap: 15px;
	}
	.charactersContainer {
		margin: 20px auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		max-height: 900px;
		overflow-y: auto;
		border: 1px solid #ccc;
		padding: 4px
	}
	.image {
		width: 290px;
	}
	.characters {
		background-color: black;
		color: white;
		text-align: center;
		&:hover {
			color: orange;
		}
	}
	@media (max-width: 1800px) {
		.image {
			width: 190px;
		}
	}
`;
