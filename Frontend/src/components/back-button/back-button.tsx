import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButtonContainer = ({ className}: { className?: string}) => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(-1);
	};

	return (
		<button onClick={handleNavigation}
		className={className}>
			<i className="fa fa-angle-left" aria-hidden="true"></i>
		</button>
	);
};

export const BackButton = styled(BackButtonContainer)`
	font-size: 45px;
	color: rgb(255, 255, 255);
	background: none;
	cursor: pointer;
	transition: 0.15s;

	:hover {
		color: rgb(248, 74, 0);
		transition: 0.15s;
	}

	@media (max-width: 600px) {
		left: 65px;
		top: 45px
	}
`;
