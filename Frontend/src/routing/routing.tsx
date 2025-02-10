import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/home.tsx';
import { Characters } from '../pages/characters/characters.tsx';
import { Location } from '../pages/location/location.tsx';
import { Episodes } from '../pages/episodes/episodes.tsx';
import { CharactersInfo } from '../pages/characters/charactersInfo.tsx';
import { LocationInfo } from '../pages/location/locationInfo.tsx';
import { EpisodesInfo } from '../pages/episodes/episodesInfo.tsx';
import {BackButton} from "../components/back-button/back-button.tsx";
import {ROUTES_PATH} from "./routes.ts";
import {Authorization} from "../pages/authorization/authorization.tsx";
import {AuthProvider, useAuth} from "../context/AuthProvider.tsx";
import {PrivateRoute} from "../pages/authorization/privateRoute.tsx";
import {Greetings} from "../pages/greetings/greetings.tsx";



export const Routing = () => {

	return (
		<Routes>
			<Route path={ROUTES_PATH.LOGIN} element={<Authorization />} />
			<Route path={ROUTES_PATH.HOME} element={<PrivateRoute><Home /></PrivateRoute>}>

				<Route index element={<PrivateRoute><Greetings /></PrivateRoute>} />

				<Route path={ROUTES_PATH.CHARACTERS} element={<Characters />} />
				<Route path={ROUTES_PATH.CHARACTERS_ID} element={<PrivateRoute><CharactersInfo /></PrivateRoute>} />

				<Route path={ROUTES_PATH.LOCATION} element={<PrivateRoute><Location /></PrivateRoute>} />
				<Route path={ROUTES_PATH.LOCATION_ID} element={<PrivateRoute><LocationInfo /></PrivateRoute>} />

				<Route path={ROUTES_PATH.EPISODES} element={<PrivateRoute><Episodes /></PrivateRoute>} />
				<Route path={ROUTES_PATH.EPISODES_ID} element={<EpisodesInfo />} />
			</Route>
			<Route
				path="*"
				element={
					<>
						<BackButton />
						<h1>Ошибка 404</h1>
					</>
				}
			/>
		</Routes>
	);
};
