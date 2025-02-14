import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import {ROUTES_PATH} from "../../routing/routes.ts";
import {Suspense} from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary.tsx";
import {Loader} from "../../components/loader/loader.tsx";


const HomeContainer = ({ className }: { className?: string }) => {

	return <div className={className}>
			<div className="leftPanel">
				<ErrorBoundary>
					<NavLink className={({ isActive }) =>
						isActive ? 'categoriesActive' : 'categories'
					} to={'/'}>Главная</NavLink>
					<NavLink className={({ isActive }) =>
						isActive ? 'categoriesActive' : 'categories'
					} to={ROUTES_PATH.CHARACTERS}>Персонажи</NavLink>
					<NavLink className={({ isActive }) =>
						isActive ? 'categoriesActive' : 'categories'
					} to={ROUTES_PATH.LOCATION}>Локации</NavLink>
					<NavLink className={({ isActive }) =>
						isActive ? 'categoriesActive' : 'categories'
					} to={ROUTES_PATH.EPISODES}>
						Эпизоды
					</NavLink>
				</ErrorBoundary>
			</div>
			<div className="container">
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>;
};


const Home = styled(HomeContainer)`
	margin: 120px auto;
	max-width: 1800px;

	.leftPanel {
		text-align: left;
		padding: 15px;
		border-radius: 10px;
		position: absolute;
		top: 100px;
	}

	.categories {
		display: block;
		padding: 5px;
		width: 150px;
		background-color: rgba(12, 23, 35, 0.72);
		font-size: 22px;
		color: white;
	}

	.categoriesActive {
		display: block;
		padding: 5px;
		width: 150px;
		font-size: 22px;
		color: #ffffff;
		background-color: #00a462;
	}

	.container {
		max-width: 1200px;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.76);
		border-radius: 10px;
	}

	@media (max-width: 1800px) {
		max-width: 800px;
		.leftPanel {
			position: absolute;
			left: 30px;
			top: 90px;
		}
		}
	}
`

export default Home
