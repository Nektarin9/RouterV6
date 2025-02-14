import { Routing } from './routing/routing';
import styled from 'styled-components';
import {AuthStatus} from "./pages/authorization/AuthStatus.tsx";
import {AuthProvider} from "./context/AuthProvider.tsx";

const AppContainer = ({ className }: { className?: string }) => {

	return (
		<div className={className}>
			<AuthProvider>
				<AuthStatus />
				<Routing  />
			</AuthProvider>
		</div>
	);
};

export const App = styled(AppContainer)`
`;
