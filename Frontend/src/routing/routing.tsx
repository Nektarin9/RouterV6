import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home.tsx';
import { Characters } from '../pages/characters/characters.tsx';
import { Location } from '../pages/location/location.tsx';
import { Episodes } from '../pages/episodes/episodes.tsx';
import { CharactersInfo } from '../pages/characters/charactersInfo.tsx';
import { LocationInfo } from '../pages/location/locationInfo.tsx';
import { EpisodesInfo } from '../pages/episodes/episodesInfo.tsx';
import {BackButton} from "../base/back-button/back-button.tsx";
import {ROUTES_PATH} from "./routes.ts";



export const Routing = () => {
	return (
		<Routes>

			<Route path="/" element={<Home />}>
				<Route path={ROUTES_PATH.CHARACTERS} element={<Characters />}/>
				<Route path={ROUTES_PATH.CHARACTERS_ID} element={<CharactersInfo />} />

				<Route path={ROUTES_PATH.LOCATION} element={<Location />} />
				<Route path={ROUTES_PATH.LOCATION_ID} element={<LocationInfo />} />

				<Route path={ROUTES_PATH.EPISODES} element={<Episodes />} />
				<Route path={ROUTES_PATH.EPISODES_ID} element={<EpisodesInfo />} />

			</Route>

			<Route
				path="*"
				element={
					<>
						<BackButton/>
						<h1>Ошибка 404</h1>
					</>
				}
			/>
		</Routes>
	);
};
