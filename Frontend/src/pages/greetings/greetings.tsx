import styled from "styled-components";

const GreetingsContainer = ({className}: {className?: string}) => {
	const userData: string | null = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")!)
		: null;
	return <div className={className}>
		Добро пожаловать <span className="rickAndMorty">{userData}!</span> <br/> Эта страница
		посвящена <span className="rickAndMorty">Rick and Morty</span>
	</div>
}

export const Greetings = styled(GreetingsContainer)`
	text-align: center;
	font-size: 34px;
	font-weight: 800;
	color: white;

	.rickAndMorty {
		color: #56f616;
		font-size: 44px;
	}
`
