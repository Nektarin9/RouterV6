import styled from 'styled-components';

const LoaderContainer = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<span className="loader"></span>
		</div>
	);
};

export const Loader = styled(LoaderContainer)`
	margin-top: 300px;
	text-align: center;

	.loader {
		width: 48px;
		height: 48px;
		border: 5px solid #ffffff;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 600px) {
		margin-top: 200px;
	}
`;
