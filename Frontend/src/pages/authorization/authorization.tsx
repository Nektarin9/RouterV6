import styled from "styled-components";
import {TextInput} from "../../components/textInpute/TextInput.tsx";
import {FormEvent, useState} from "react";
import {useAuth} from "../../context/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES_PATH} from "../../routing/routes.ts";

interface SigninFormType {
	userName: string;
	password: string;
}
interface ErrorType {
	userNameError: string | null;
	userPasswordError: string | null;
}

const AuthorizationContainer = ({className}: {className?: string}) => {
	const navigate = useNavigate();
	const [error, setError] = useState<ErrorType>({
		userNameError: null,
		userPasswordError: null,
	});
	const [signinForm, setSigninForm] = useState<SigninFormType>({
		userName: '',
		password: '',
	});
	const auth = useAuth();


	const validation = () => {
		const newErrors: ErrorType = {
			userNameError: null,
			userPasswordError: null,
		};
		if (signinForm.password.length <= 6) {
			newErrors.userPasswordError = "Пароль должен состоять из более 6 символов";
		}
		if (signinForm.userName.length <= 4) {
			newErrors.userNameError = "Имя должно состоять из более 4 символов";
		}
		setError(newErrors);
		return newErrors.userNameError === null && newErrors.userPasswordError === null && signinForm.password && signinForm.userName;
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>, dataForm: SigninFormType) => {
		event.preventDefault();
		if (validation()) {
			auth?.signin(dataForm.userName, () => {
				navigate(ROUTES_PATH.HOME);
			});
		}
	};

	return (
			<div className={className}>
				<form
					className="formContainer"
					onSubmit={(event) => onSubmit(event, signinForm)}
				>
					<div>
						<TextInput
							value={signinForm.userName}
							onChange={(event) => {
								if (event.target.value.length > 4) {
									setError({...error, userNameError: null});
								}
								setSigninForm({
									...signinForm,
									userName: event.target.value,
								})
							}
						}
							size="sm"
							type="text"
							label="user name"
							placeholder="Name"
							description="email"
							inputWithAsterisk
							variant="default"
							error={error.userNameError}
						/>
						<TextInput
							value={signinForm.password}
							onChange={(event) => {
								if (event.target.value.length > 6) {
									setError({...error, userPasswordError: null});
								}
								setSigninForm({
									...signinForm,
									password: event.target.value,
								})
							}
						}
							size="sm"
							type="password"
							label="Your password"
							placeholder="password"
							description="password"
							inputWithAsterisk
							variant="default"
							error={error.userPasswordError}
						/>
						<button className="button" type="submit">
							Войти
						</button>
					</div>
				</form>
			</div>
	)
}


 const Authorization = styled(AuthorizationContainer)`
	margin: 150px auto;
	text-align: center;
	.formContainer {
		margin: auto;
		width: 300px;
		padding: 20px;
		border-radius: 10px;
		background-color: white;
	}

	.button {
		display: block;
		margin: 20px auto;
		text-align: center;
		background-color: #6eb504;
		color: white;
		width: 200px;
		height: 40px;
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
	}

	button:hover {
		background-color: #4c7e01;
	}
`
export default Authorization
