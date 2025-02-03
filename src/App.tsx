import { Routing } from './routing/routing';

import styled from 'styled-components';

const AppContainer = ({ className }: { className?: string }) => {


	return (
		<div className={className}>
			<p>test</p>
			<Routing  />
		</div>
	);
};

export const App = styled(AppContainer)`

`;
