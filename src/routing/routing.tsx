import { Route, Routes } from 'react-router-dom';



export const Routing = () => {
	return (
		<Routes>

			<Route path="/client/:id" element={<div />}>
				<Route path="/client/:id/exercise" element={<div />} />
			</Route>

		</Routes>
	);
};
