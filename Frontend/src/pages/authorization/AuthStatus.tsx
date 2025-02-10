import {useAuth} from "../../context/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES_PATH} from "../../routing/routes.ts";
import {Button} from "../../components/button/button.tsx";
import styled from "styled-components";

export const AuthStatus = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const userData: string | null = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")!)
		: null;

	const handleSignout = () => {
		auth?.signout(() => {
			navigate(ROUTES_PATH.LOGIN);
		});
	};

const AuthStatusContainer = styled.div`
	color: white;
	margin: 15px auto;
	font-size: 22px;
	max-width: 1800px;
	display: flex;
	gap: 20px;
	justify-content: right;
	align-items: center;
`;
const AuthStatusSignout = styled.p`
	margin: 15px auto;
	text-align: center;
	max-width: 1800px;
	font-size: 24px;
	color: white;
`


	if (!userData) {
		return <AuthStatusSignout>Авторизуйте чтобы продолжить</AuthStatusSignout>;
	} else {
		return (
			<AuthStatusContainer>
				<p>{userData}</p>
				<Button onClick={handleSignout} height="40px" backgroundColor="red" backgroundColorHover="#8b0303">
					Выйти
				</Button>
			</AuthStatusContainer>
		);
	}
};


