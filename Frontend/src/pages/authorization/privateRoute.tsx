import {useAuth} from "../../context/AuthProvider.tsx";
import {ReactNode} from "react";
import {ROUTES_PATH} from "../../routing/routes.ts";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({children}: {children: ReactNode}) => {
	const location = useLocation();
	const auth = useAuth();

	if (auth?.user === null) {
		return <Navigate to={ROUTES_PATH.LOGIN} state={{user: location.pathname}} replace/>
	}

	return children
}
