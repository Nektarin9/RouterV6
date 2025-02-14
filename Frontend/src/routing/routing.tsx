import { Route, Routes } from 'react-router-dom';
import {BackButton} from "../components/back-button/back-button.tsx";
import {ROUTES_PATH} from "./routes.ts";
import {PrivateRoute} from "../pages/authorization/privateRoute.tsx";
import {lazy, Suspense} from "react";
import Authorization from "../pages/authorization/authorization.tsx";
import {Loader} from "../components/loader/loader.tsx";

const Home = lazy(() => import(('../pages/home/home.tsx')))
const Greetings = lazy(() => import(('../pages/greetings/greetings.tsx')))
const Characters = lazy(() => import(('../pages/characters/characters.tsx')))
const CharactersInfo = lazy(() => import(('../pages/characters/charactersInfo.tsx')))
const Episodes = lazy(() => import(('../pages/episodes/episodes.tsx')))
const EpisodesInfo = lazy(() => import(('../pages/episodes/episodesInfo.tsx')))
const Location = lazy(() => import(('../pages/location/location.tsx')))
const LocationInfo = lazy(() => import(('../pages/location/locationInfo.tsx')))


export const Routing = () => {
	return (
		<Routes>
			<Route path={ROUTES_PATH.LOGIN} element={<Authorization />} />
			<Route path={ROUTES_PATH.HOME} element={<Suspense fallback={<Loader />}><PrivateRoute><Home /></PrivateRoute> </Suspense>}>

				<Route index element={<PrivateRoute><Greetings /></PrivateRoute>} />

				<Route path={ROUTES_PATH.CHARACTERS} element={<PrivateRoute><Characters /></PrivateRoute>} />
				<Route path={ROUTES_PATH.CHARACTERS_ID} element={<PrivateRoute><CharactersInfo /></PrivateRoute>} />

				<Route path={ROUTES_PATH.LOCATION} element={<PrivateRoute><Location /></PrivateRoute>} />
				<Route path={ROUTES_PATH.LOCATION_ID} element={<PrivateRoute><LocationInfo /></PrivateRoute>} />

				<Route path={ROUTES_PATH.EPISODES} element={<PrivateRoute><Episodes /></PrivateRoute>} />
				<Route path={ROUTES_PATH.EPISODES_ID} element={<PrivateRoute><EpisodesInfo /></PrivateRoute>} />
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
